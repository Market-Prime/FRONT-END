<?php
$BUILD_PATH = "./dist";
$manifest = json_decode(file_get_contents("$BUILD_PATH/.vite/manifest.json"), true);
$jsMain = $manifest["index.html"]["file"];
$cssMain = $manifest["index.html"]["css"][0];
