<?php

namespace Classes;

class Router
{
    protected static $routes = [];
    protected static $publicDirs = [];

    public static function new(string $method, string $url, \Closure $action): void
    {
        self::$routes[$method][$url] = $action;
    }

    public static function serveDir(string $path): void
    {
        array_push(self::$publicDirs, $path);
    }

    public static function exit404(): never
    {
        header("HTTP/1.0 404 Not Found");
        exit();
    }

    public static function getContentType(string $filePath): string
    {
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);
        $mimeTypes = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'html' => 'text/html',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'json' => 'application/json',
            'xml' => 'application/xml',
            'txt' => 'text/plain',
            'pdf' => 'application/pdf'
        ];

        return $mimeTypes[$extension] ?? 'application/octet-stream'; // Default binary stream if unknown
    }


    public static function matchRoute(): void
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $url = $_SERVER['REQUEST_URI'];
        $urlParts = parse_url($url);
        $path = $urlParts['path'];

        if (isset(self::$routes[$method])) {
            foreach (self::$routes[$method] as $routeUrl => $target) {
                $pattern = preg_replace('/\/:([^\/?]+)/', '/(?P<$1>[^/]+)', $routeUrl);

                if (preg_match('#^' . $pattern . '$#', $path, $matches)) {
                    $params = array_filter($matches, 'is_string', ARRAY_FILTER_USE_KEY);
                    call_user_func_array($target, $params);
                    return;
                }
            }
        }

        foreach (self::$publicDirs as $value) {
            if (preg_match("/^" . preg_quote(sprintf($value), '/') . "/", $path)) {
                $filePath = $_SERVER['DOCUMENT_ROOT'] . $path;
                if (file_exists($filePath)) {
                    $contentType = self::getContentType($filePath);
                    header('Content-Type: ' . $contentType);
                    readfile($filePath);
                    return;
                } else
                    self::exit404();
            }
        }

        self::exit404();
    }
}