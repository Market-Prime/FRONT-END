<?php

use Core\Classes\BuildContentLoader;
use Core\Classes\Router;
use Core\Classes\Render;
use Core\Classes\Request;


require_once __DIR__ . "/core/bootstrap.php";

$render = new Render(__DIR__ . "/views", __DIR__ . "/cache");

Router::serveDir(__DIR__ . "public");

Router::new("GET", "/", function () use ($render): void {
    $topStores = [
    ];

    $flashSaleData = [    
    ];
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    $pageData = [
        "categoriesData" => $categoriesData,
        "flashSaleData" => $flashSaleData,
        "topStoresData" => $topStores,
    ];
    $render->render("home", ["pageData" => $pageData]);
});


Router::new("GET", "/cart", function () use ($render): void {
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    $pageData = [
        "categoriesData" => $categoriesData,
        // add more page context here to be passed to the view
    ];



    $render->render("cart", ["pageData" => $pageData]);
});
Router::new("GET", "/confirm-order", function () use ($render): void {
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    $pageData = [
        "categoriesData" => $categoriesData,
        // add more page context here to be passed to the view
    ];
    $render->render("confirm-order", ["pageData" => $pageData]);
});

Router::new("GET", "/product-detail", function () use ($render): void {
    try {
        $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));

    } catch (Exception $e) {
        $categoriesData = json_decode("[]");

    } finally {
        Request::close();
    }

    if (!isset($_GET['p-id']))
        return;
    $pid = $_GET['p-id'];
    try {
        $productData = json_decode(Request::Get(endPoint: "products/$pid/"));
    } catch (Exception $e) {
        return;
    } finally {
        Request::close();
    }
    $pageData = [
        "categoriesData" => $categoriesData,
        "productData" => $productData
    ];
    $render->render("product-detail", ["pageData" => $pageData]);
});

Router::new("GET", "/account/login", function () use ($render): void {
    $render->render("login");
});
Router::new("GET", "/account/register", function () use ($render): void {
    $render->render("register");
});
Router::new("GET", "/account/confirm-email/:token", function ($token) use ($render): void {
    $render->render("confirm-email", ["confirmationToken" => $token]);
});






Router::matchRoute();