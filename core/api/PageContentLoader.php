<?php

namespace Core\Api;

use Core\Classes\Request;
use Exception;

class PageContentLoader
{
    public static function LoadCategories(): array
    {
        try {
            $response = Request::Get(endPoint: 'categories/');
            if ($response === null || $response === false) {
                throw new Exception(message: "Invalid response from API.");
            }
            $categoriesData = $response;
        } catch (Exception $e) {
            error_log(message: $e->getMessage());
            $categoriesData = [];
        } finally {
            Request::close();
        }
        return $categoriesData;

    }
    public static function GetProductDetails($pid): array|null
    {
        try {
            $response = Request::Get(endPoint: "products/$pid/");
            if ($response === false) {
                return null;
            }
            $productData = $response;
            return $productData;
        } catch (Exception $e) {
            return null;
        } finally {
            Request::close();
        }
    }
}