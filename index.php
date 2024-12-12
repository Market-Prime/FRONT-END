<?php

require_once "./includes/buildConfig.php";

$data = [
    "title" => "MarketPrime",
    "initialContent" => "This content was preloaded by PHP",
];


$host = $_SERVER['HTTP_HOST'];
$parts = explode(".", $host);
print_r($parts);
$subdomain = count($parts);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/assets/Logo 1.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo htmlspecialchars($data['title']); ?></title>
    <link rel="stylesheet" href="<?php echo "$BUILD_PATH/$cssMain" ?>">
</head>

<body>
    <!-- <div id="root"></div> -->
    <script>
        window.__INITIAL_DATA__ = <?php echo json_encode($data); ?>;
    </script>
    <script type="module" src="<?php echo "$BUILD_PATH/$jsMain" ?>"></script>
</body>

</html>