<?php

use Classes\BuildContentLoader;
use Classes\Router;
use Classes\Render;

require_once __DIR__ . "/bootstrap.php";

$render = new Render(__DIR__ . "/views", __DIR__ . "/cache");

Router::serveDir(__DIR__ . "public");

Router::new("GET", "/", function () use ($render): void {
    $pageData = [
        "categoriesData" => [
            [
                "id" => 1,
                "name" => "Clothing",
                "description" => "All kinds of clothing",
                "sku_chunk" => "CL",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_ittt4f",
                "parent" => null
            ],
            [
                "id" => 2,
                "name" => "Footwear",
                "description" => "All kinds of clothing",
                "sku_chunk" => "FT",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_zpzhnb",
                "parent" => null
            ],
            [
                "id" => 3,
                "name" => "Accessories",
                "description" => "All kinds of clothing",
                "sku_chunk" => "ASC",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_hxf3rj",
                "parent" => null
            ],
            [
                "id" => 4,
                "name" => "Traditional Attire",
                "description" => "Nigerian traditional attire",
                "sku_chunk" => "NTA",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_s8eq2n",
                "parent" => null
            ],
            [
                "id" => 5,
                "name" => "Ankara",
                "description" => "All tops",
                "sku_chunk" => "ANK",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_maltzt",
                "parent" => 4
            ],
            [
                "id" => 6,
                "name" => "Tops",
                "description" => "All tops",
                "sku_chunk" => "TP",
                "image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/categories/avatar_nh8ftq",
                "parent" => 1
            ]
        ]
    ];




    $render->render("home", ["pageData" => $pageData]);
});


$data = [
    "title" => "MarketPrime",
    "initialContent" => "This content was preloaded by PHP",
];





Router::matchRoute();
?>