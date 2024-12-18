<?php

use Classes\BuildContentLoader;
use Classes\Router;
use Classes\Render;
use Classes\Request;

require_once __DIR__ . "/bootstrap.php";

$render = new Render(__DIR__ . "/views", __DIR__ . "/cache");

Router::serveDir(__DIR__ . "public");

Router::new("GET", "/", function () use ($render): void {
    $topStores = [
        [
            "name" => "MarketPrime Official",
            "niches" => ['Clothing', 'Coperate', 'Casual'],
            "image" => "/public/static/images/logo.png",
            "back_image" => "/public/assets/images/dr91.jpg",
        ],
        [
            "name" => "DNL Stores",
            "niches" => ['Clothing', 'Shoes', 'Sports'],
            "image" => "/public/static/images",
            "back_image" => "/public/assets/images/dr92.jpg",
        ],
        [
            "name" => "Subomi LTD",
            "niches" => ['Nigerian', 'Ankara', 'Asoebi'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr93.jpg",
        ],
        [
            "name" => "Sade Beauty Stores",
            "niches" => ['Beauty', 'Designers', 'Party'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr94.jpg",
        ],
        [
            "name" => "MarketPrime Official",
            "niches" => ['Clothing', 'Coperate', 'Casual'],
            "image" => "/public/static/images/logo.png",
            "back_image" => "/public/assets/images/dr91.jpg",
        ],
        [
            "name" => "DNL Stores",
            "niches" => ['Clothing', 'Shoes', 'Sports'],
            "image" => "/public/static/images",
            "back_image" => "/public/assets/images/dr92.jpg",
        ],
        [
            "name" => "Subomi LTD",
            "niches" => ['Nigerian', 'Ankara', 'Asoebi'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr93.jpg",
        ],
        [
            "name" => "Sade Beauty Stores",
            "niches" => ['Beauty', 'Designers', 'Party'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr94.jpg",
        ],
        [
            "name" => "MarketPrime Official",
            "niches" => ['Clothing', 'Coperate', 'Casual'],
            "image" => "/public/static/images/logo.png",
            "back_image" => "/public/assets/images/dr91.jpg",
        ],
        [
            "name" => "DNL Stores",
            "niches" => ['Clothing', 'Shoes', 'Sports'],
            "image" => "/public/static/images",
            "back_image" => "/public/assets/images/dr92.jpg",
        ],
        [
            "name" => "Subomi LTD",
            "niches" => ['Nigerian', 'Ankara', 'Asoebi'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr93.jpg",
        ],
        [
            "name" => "Sade Beauty Stores",
            "niches" => ['Beauty', 'Designers', 'Party'],
            "image" => "/public/static/images/logo",
            "back_image" => "/public/assets/images/dr94.jpg",
        ]
    ];

    $flashSaleData = [
        [
            "id" => 108,
            "name" => "BoxA",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_smqnvn",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T22:47:29.999583+01:00",
            "flash_deal" => [["name" => "Save NGN 4970", "type" => 1], ["name" => "Limited Items", "type" => 0]]
        ],
        [
            "id" => 106,
            "name" => "BoxM",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_igu4eu",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T22:44:41.044336+01:00",
            "flash_deal" => [["name" => "40% off", "type" => 1], ["name" => "Free delivery", "type" => 1]]
        ],
        [
            "id" => 107,
            "name" => "BoxO",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_qyyn8z",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T22:45:13.073823+01:00",
            "flash_deal" => [["name" => "Price drop alert!", "type" => 0], ["name" => "Free delivery", "type" => 1]]
        ],
        [
            "id" => 139,
            "name" => "BoxR",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_ogefts",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T23:25:09.286548+01:00",
            "flash_deal" => [["name" => "Urgent: Last chance to save", "type" => 0], ["name" => "Save 26% off", "type" => 1]]
        ],
        [
            "id" => 73,
            "name" => "BoxU",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_sd26fj",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T22:42:46.314669+01:00",
            "flash_deal" => [["name" => "Price drop alert!", "type" => 0], ["name" => "Free delivery", "type" => 1]]
        ],
        [
            "id" => 72,
            "name" => "BoxUP",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_jf3r64",
            "rating" => 3.1,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-11T22:35:15.358825+01:00",
            "flash_deal" => [["name" => "Mega weekend sale", "type" => 0],["name" => "50% off clearance sale", "type" => 0],]
        ],
        [
            "id" => 71,
            "name" => "Boxx",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "19000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_q72mro",
            "rating" => 4.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-10T14:29:48.719734+01:00",
            "flash_deal" => [["name" => "Hot deal: 30% off today only", "type" => 0],]
        ],
        [
            "id" => 70,
            "name" => "Boxxi",
            "store_id" => "MP-v-pet36",
            "category" => 6,
            "category_name" => "Tops",
            "price" => "25000.00",
            "description" => "Quality Men T'Shirt",
            "base_image" => "https://res.cloudinary.com/dngmon5et/image/upload/v1/media/public/products/prof_jdp45x",
            "rating" => 3.6,
            "seo_title" => null,
            "seo_description" => null,
            "publish_status" => false,
            "publish_date" => null,
            "created_at" => "2024-12-10T13:57:24.244335+01:00",
            "flash_deal" => [["name" => "Exclusive deal: Limited stock", "type" => 0],]
        ],
    ];




    try {
        // $categoriesData = json_decode(Request::Get(endPoint: 'categories/'));
        $categoriesData = [];

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


$data = [
    "title" => "MarketPrime",
    "initialContent" => "This content was preloaded by PHP",
];





Router::matchRoute();