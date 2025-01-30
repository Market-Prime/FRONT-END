<?php
use Core\Classes\Request;

function getCategories(): array
{
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    return $categoriesData;
}
