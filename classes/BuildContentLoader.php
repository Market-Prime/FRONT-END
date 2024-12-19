<?php

namespace Classes;

class BuildContentLoader
{
    private static $build_path = __DIR__ . "/dist";
    public static function loadBuildFiles(): array
    {
        $manifestPath = self::$build_path . "/.vite/manifest.json";

        if (!file_exists($manifestPath)) {
            throw new \Exception("Manifest file not found at: " . $manifestPath);
        }
        $manifest = json_decode(file_get_contents($manifestPath), true);
        if ($manifest === null) {
            throw new \Exception("Failed to decode manifest.json");
        }

        return [
            "default"
        ];
    }
}