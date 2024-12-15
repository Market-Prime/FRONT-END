<?php
require_once __DIR__ . '/vendor/autoload.php';

use Classes\EnvLoader;

use Classes\Cors;


Cors::enable();



try {
    EnvLoader::loadEnv(__DIR__ . '/.env');
} catch (Exception $e) {
    echo "error loading .env file: " . $e->getMessage();
}