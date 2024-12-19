<?php

namespace Classes;

class Request
{
    private static $ch = null;
    private static $baseUrl;



    public static function init()
    {
        if (self::$ch === null) {
            self::$ch = curl_init();
            curl_setopt(self::$ch, CURLOPT_RETURNTRANSFER, true);
        }

        if (!self::$baseUrl) {
            self::$baseUrl = $_ENV['ECCOMMERCE_BACKEND_API_URL'];
        }
    }

    public static function Get(string $endPoint): array|bool|string
    {
        self::init();

        curl_setopt(self::$ch, CURLOPT_URL, self::$baseUrl . $endPoint);
        $response = curl_exec(self::$ch);

        if (curl_errno(self::$ch)) {
            return [];
        }

        return $response;
    }

    public static function close()
    {
        if (self::$ch !== null) {
            curl_close(self::$ch);
            self::$ch = null;
        }
    }

}