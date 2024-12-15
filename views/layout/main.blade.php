<!DOCTYPE html>
<html lang="en">

<>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="/public/static/css/all.css">
    <link rel="stylesheet" href="/public/static/css/style.css">

    <script>
        window.__CATEGORIES_DATA__ = @json($categories);
    </script>

    <title>Market Prime</title>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    
</head>

<body>
    @include('partials.header')
    @yield('content')
    @include('partials.footer')
    <script src="/public/assets/app.js"></script>
</body>

</html>
