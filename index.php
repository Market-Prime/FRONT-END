<?php

use Classes\BuildContentLoader;
use Classes\Router;
use Classes\Render;
use Classes\Request;

require_once __DIR__ . "/bootstrap.php";

$render = new Render(__DIR__ . "/views", __DIR__ . "/cache");

Router::serveDir(__DIR__ . "public");

Router::new("GET", "/", function () use ($render): void {
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    $pageData = [
        "categoriesData" => $categoriesData
    ];



    $render->render("home", ["pageData" => $pageData]);
});


$data = [
    "title" => "MarketPrime",
    "initialContent" => "This content was preloaded by PHP",
];





Router::matchRoute();
?>