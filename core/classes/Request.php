<?php

namespace Core\Classes;
use Exception;


class Request
{
    private static $ch = null;
    private static $baseUrl;

    public static function init(): void
    {
        if (self::$ch === null) {
            self::$ch = curl_init();
            curl_setopt(handle: self::$ch, option: CURLOPT_RETURNTRANSFER, value: true);
            curl_setopt(handle: self::$ch, option: CURLOPT_FOLLOWLOCATION, value: true);
            curl_setopt(handle: self::$ch, option: CURLOPT_TIMEOUT, value: 30);
        }

        if (!self::$baseUrl) {
            self::$baseUrl = $_ENV['ECCOMMERCE_BACKEND_API_URL'] ?? null;
            if (!self::$baseUrl) {
                throw new Exception(message: "Base URL is not set in environment variables.");
            }
        }
    }

    public static function Get(string $endPoint, array $headers = []): ?array
    {
        self::init();

        $url = self::$baseUrl . $endPoint;
        curl_setopt(handle: self::$ch, option: CURLOPT_URL, value: $url);

        if (!empty($headers)) {
            curl_setopt(handle: self::$ch, option: CURLOPT_HTTPHEADER, value: $headers);
        }

        $response = curl_exec(handle: self::$ch);

        if (curl_errno(handle: self::$ch)) {
            error_log(message: "Curl error: " . curl_error(handle: self::$ch));
            return null;
        }

        $data = json_decode(json: $response, associative: true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            error_log(message: "JSON Decode Error: " . json_last_error_msg());
            return null;
        }
        return $data;
    }

    public static function close(): void
    {
        if (self::$ch !== null) {
            curl_close(handle: self::$ch);
            self::$ch = null;
        }
    }
}
