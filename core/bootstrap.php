<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Core\Classes\EnvLoader;

use Core\Classes\Cors;



Cors::enable();



try {
    EnvLoader::loadEnv(file: $_SERVER['DOCUMENT_ROOT'] . '/.env');
} catch (Exception $e) {
    echo "error loading .env file: " . $e->getMessage();
}