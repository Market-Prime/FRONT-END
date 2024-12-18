@extends('layout.main', ['categories' => $pageData['categoriesData']])
@section('content')
    <main class="home flex-col items-center">
        <section class="hero-main">

        </section>
        <section class="flash-sales">
            <p class="head listing-head-1 fnt-integral">Flash sales</p>
            <div class="listing-card" id="19233hAzQw4x">{{-- csr --}}</div>
        </section>
        <section class="dress-styles">
            <div class="content flex flex-col">
                <p class="head text-center fnt-integral">BROWSE BY DRESS STYLE</p>
                <div class="main flex flex-col">
                    <div class="">
                        <a href="" class="no-decor w-full relative">
                            <p class="txt fnt-bold">Casual</p>
                            <img src="/public/assets/images/cax10.png" alt="" class="absolute top-0 right-0 h-full">
                        </a>
                        <a href="" class="no-decor w-full relative">
                            <p class="txt fnt-bold">Formal</p>
                            <img src="/public/assets/images/cax50.png" alt="" class="absolute top-0 right-0 h-full">
                        </a>
                    </div>
                    <div class="">
                        <a href="" class="no-decor w-full relative">
                            <p class="txt fnt-bold">Party</p>
                            <img src="/public/assets/images/cax30.png" alt="" class="absolute top-0 right-0 h-full">
                        </a>
                        <a href="" class="no-decor w-full relative">
                            <p class="txt fnt-bold">Gym</p>
                            <img src="/public/assets/images/cax90.png" alt="" class="absolute top-0 right-0 h-full">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="top-stores">
            <div class="head">
                <p class="fnt-integral">Explore Top Stores</p>
            </div>
            <div class="main flex overflow-x-scroll gap-4 scroll-bar" id="41XQnmpy47">{{-- csr --}}</div>
        </section>
        <section class="check-out-categories">
            <p class="head fnt-integral text-center font-semibold">Trending Categories</p>
            <div class="main">
                <div class="category-browser-item">
                    <p class="root">Clothing</p>
                    <ul>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Men's Wear</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Women's Wear</span></a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">T-Shirts & Polos</span>
                            </a>
                        </li>
                        <li><a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Dresses(Casual, Evening, Cocktail, Maxi)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Hoodies & Jackets</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="category-browser-item">
                    <p class="root">Footwear</p>
                    <ul>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Formal Shoes</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Casual Shoes (Sneakers, Loafers)</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Heels</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Sandals & Slippers</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Boots</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="category-browser-item">
                    <p class="root">Accessories</p>
                    <ul>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Bags</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Luxury Watches</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Caps</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Eye Wear</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="/public/assets/images/dr92.jpg" alt="">
                                <span href="">Jewelry</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="end flx items-center justify-center px-2 my-4 mx-auto">
                <a class="flex items-center gap-2 hover:underline" href=""><span class="fnt-bold text-sm">Browse
                        Categories</span> <i class="fa fa-arrow-right fa-xs "></i></a>
            </div>
        </section>
        <section class="for-the-season relative">
            <div class="head flex flex-col gap-3">
                <p class="fnt-integral">For The Season</p>
                <p class="fnt-medium text-lg">Save up to 20% off!</p>
            </div>
            <div class="no-scrollbar content">
                <div class="no-scrollbar flex gap-2" id="focr2119ta">
                    <div class="fts-item flex shadow-md">
                        <div class="img" style="background-image: url('/public/assets/images/p11.jpg')"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                    <div class="fts-item flex shadow-md">
                        <div class="img"></div>
                    </div>
                </div>
            </div>
            <div class="fts-cta flex items-center justify-center m-2">
                <a href="">See Deals</a>
            </div>
            <img src="/public/assets/images/cmas1.png" alt="" class="absolute" id="cmas1">
            <img src="/public/assets/images/cmas2.png" alt="" class="absolute" id="cmas2">
        </section>
    </main>
@endsection
@section('data')
    <script>
        window.__FLASH_SALE_DATA__ = @json($pageData['flashSaleData']);
        window.__TOP_STORES_DATA__ = @json($pageData['topStoresData']);
    </script>
@endsection
