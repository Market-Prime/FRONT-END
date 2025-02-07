<?php

use Core\Classes\Router;
use Core\Classes\Render;
use Core\Api\PageContentLoader;


require_once __DIR__ . "/core/bootstrap.php";

$render = new Render(__DIR__ . "/views", __DIR__ . "/cache");

Router::serveDir(__DIR__ . "public");

Router::new("GET", "/", function () use ($render): void {
    $topStores = [
    ];

    $flashSaleData = [
    ];

    $categoriesData = PageContentLoader::LoadCategories();
    $pageData = [
        "categoriesData" => $categoriesData,
        "flashSaleData" => $flashSaleData,
        "topStoresData" => $topStores,
    ];
    $render->render("home", ["pageData" => $pageData]);
});

Router::new("GET","/categories", function () use ($render): void {
    $categoriesData = PageContentLoader::LoadCategories();
    $pageData = [
        "categoriesData" => $categoriesData,
    ];
    $render->render("categories", ["pageData" => $pageData]);
});


Router::new("GET", "/cart", function () use ($render): void {
    $categoriesData = PageContentLoader::LoadCategories();
    $pageData = [
        "categoriesData" => $categoriesData,
    ];
    $render->render("cart", ["pageData" => $pageData]);
});

Router::new("GET", "/confirm-order", function () use ($render): void {
    $categoriesData = PageContentLoader::LoadCategories();
    $pageData = [
        "categoriesData" => $categoriesData,
    ];
    $render->render("confirm-order", ["pageData" => $pageData]);
});

Router::new("GET", "/product-detail", function () use ($render): void {
    $categoriesData = PageContentLoader::LoadCategories();
    
    if (!isset($_GET['p-id']))
        return;
    $pid = $_GET['p-id'];
    $productData = PageContentLoader::GetProductDetails($pid);

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