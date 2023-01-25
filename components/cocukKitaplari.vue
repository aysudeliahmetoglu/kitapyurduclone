<template>
    <div>
        <div class="home js-ajax" style="max-width: 1200px;">
            <div class="box gray no-padding has-subtitle" id="js-bestseller_product_carousel_2"
                style="margin-left: 450px;">
                <div class="box-heading padding">
                    <div class="ribbon-container">
                        <div class="ribbon-text">Çocuk Kitapları</div>
                    </div>
                    <div class="heading-nav-horizontal">
                        <a class="view-all"
                            href="https://www.kitapyurdu.com/index.php?route=product/best_sellers&amp;list_id=22&amp;filter_in_stock=1"
                            data-title="Çok Satanlar" style="margin-left:-30px;">Tümünü Göster</a>
                        <div class="heading-nav-arrows"><a class="common-sprite prev swiper-button-disabled"
                                style="margin-left:-10px;" tabindex="0" role="button" aria-label="Previous slide"
                                aria-disabled="true"></a><a class="common-sprite next" tabindex="0" role="button"
                                aria-label="Next slide" aria-disabled="false"></a></div>
                    </div>

                    <div class="js-heading-links">
                        <a class="sub-title-22 selected">Çok Satanlar</a>
                        <a class="sub-title-1456">Yeni Çıkanlar</a>
                        <a class="sub-title-1451">İlgi Görenler</a>
                        <a class="sub-title-1452">Okul Öncesi</a>
                        <a class="sub-title-1453">6-12 Yaş</a>
                        <a class="sub-title-1454">12+ Yaş</a>
                        <a class="sub-title-1455">Dil Eğitimi</a>
                    </div>
                </div>

                <div class="box-content product-grid-wr">
                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal"
                        style="cursor: grab;">
                        <ul class="product-grid swiper-wrapper"
                            style="display: flex; width: 100%; transition-duration: 0ms; transform: translate3d(2px, 0px, 0px);">
                            <li class="swiper-slide swiper-slide-active" v-for="product in data"
                                :key="product.permalink">
                                <ProductCard :product="product"></ProductCard>
                            </li>
                            <!-- <li class="swiper-slide swiper-slide-active"><div class="product-cr" id="product-623243"><a class="pr-img-link" href="https://www.kitapyurdu.com/kitap/uzaya-giden-tren/623243.html"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11631570/wi:120/wh:true" alt="Uzaya Giden Tren"></a><a class="name" href="https://www.kitapyurdu.com/kitap/uzaya-giden-tren/623243.html" title="Uzaya Giden Tren"><span class=" line-clamp-2">Uzaya Giden Tren</span></a><div class="price"><div class="price-new "><span class="value"><span class="TL"></span> 25,74</span></div></div><div class="hover-menu-home"><a class="add-to-cart-home" onclick="addToCart(623243);" data-title="Sepete Ekle"><i class="fa fa-shopping-cart"></i></a><a class="in-favorites-home" style="display:none;" onclick="removeFromFavorites(623243);" data-title="Favorilerinizde"><i class="fa fa-heart red"></i></a><a class="add-to-favorites-home" onclick="addToFavorites(623243);" data-title="Favorilerime Ekle"><i class="fa fa-heart"></i></a><a id="product-wish-list-remove-623243" onclick="removeFromWishList(623243);" data-title="Alışveriş Listemden Çıkar" style="color: #FF8000; display: none"><i class="fa fa-tag"></i></a><a id="product-wish-list-add-623243" onclick="addToWishList(623243);" data-title="Alışveriş Listeme Ekle" style="display: inline-block"><i class="fa fa-tag"></i></a></div><div class="notice-container"><div class="notice-home same-day purple"><i class="fa fa-plane"></i>&nbsp;<span class="text">24 Saatte Kargoda</span></div></div></div></li>
                    <li class="swiper-slide swiper-slide-next"><div class="product-cr" id="product-10139"><a class="pr-img-link" href="https://www.kitapyurdu.com/kitap/seker-portakali-ciltsiz/10139.html"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11462950/wi:120/wh:true" alt="Şeker Portakalı (Ciltsiz)"></a><a class="name" href="https://www.kitapyurdu.com/kitap/seker-portakali-ciltsiz/10139.html" title="Şeker Portakalı (Ciltsiz)"><span class=" line-clamp-2">Şeker Portakalı (Ciltsiz)</span></a><div class="price"><div class="price-new "><span class="value"><span class="TL"></span> 24,75</span></div></div><div class="hover-menu-home"><a class="add-to-cart-home" onclick="addToCart(10139);" data-title="Sepete Ekle"><i class="fa fa-shopping-cart"></i></a><a onclick="showAjaxBox('https://www.kitapyurdu.com/index.php?route=product/product/page_image&amp;product_id=10139', true)" data-title="İç Sayfalar"><i class="fa fa-book"></i></a><a class="in-favorites-home" style="display:none;" onclick="removeFromFavorites(10139);" data-title="Favorilerinizde"><i class="fa fa-heart red"></i></a><a class="add-to-favorites-home" onclick="addToFavorites(10139);" data-title="Favorilerime Ekle"><i class="fa fa-heart"></i></a><a id="product-wish-list-remove-10139" onclick="removeFromWishList(10139);" data-title="Alışveriş Listemden Çıkar" style="color: #FF8000; display: none"><i class="fa fa-tag"></i></a><a id="product-wish-list-add-10139" onclick="addToWishList(10139);" data-title="Alışveriş Listeme Ekle" style="display: inline-block"><i class="fa fa-tag"></i></a></div><div class="notice-container"><div class="notice-home same-day purple"><i class="fa fa-plane"></i>&nbsp;<span class="text">24 Saatte Kargoda</span></div></div></div></li>
                    <li class="swiper-slide"><div class="product-cr" id="product-589761"><a class="pr-img-link" href="https://www.kitapyurdu.com/kitap/benim-zurafam-ucabilir/589761.html"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11631569/wi:120/wh:true" alt="Benim Zürafam Uçabilir"></a><a class="name" href="https://www.kitapyurdu.com/kitap/benim-zurafam-ucabilir/589761.html" title="Benim Zürafam Uçabilir"><span class=" line-clamp-2">Benim Zürafam Uçabilir</span></a><div class="price"><div class="price-new "><span class="value"><span class="TL"></span> 19,98</span></div></div><div class="hover-menu-home"><a class="add-to-cart-home" onclick="addToCart(589761);" data-title="Sepete Ekle"><i class="fa fa-shopping-cart"></i></a><a class="in-favorites-home" style="display:none;" onclick="removeFromFavorites(589761);" data-title="Favorilerinizde"><i class="fa fa-heart red"></i></a><a class="add-to-favorites-home" onclick="addToFavorites(589761);" data-title="Favorilerime Ekle"><i class="fa fa-heart"></i></a><a id="product-wish-list-remove-589761" onclick="removeFromWishList(589761);" data-title="Alışveriş Listemden Çıkar" style="color: #FF8000; display: none"><i class="fa fa-tag"></i></a><a id="product-wish-list-add-589761" onclick="addToWishList(589761);" data-title="Alışveriş Listeme Ekle" style="display: inline-block"><i class="fa fa-tag"></i></a></div><div class="notice-container"><div class="notice-home same-day purple"><i class="fa fa-plane"></i>&nbsp;<span class="text">24 Saatte Kargoda</span></div></div></div></li>
                    <li class="swiper-slide"><div class="product-cr" id="product-629759"><a class="pr-img-link" href="https://www.kitapyurdu.com/kitap/icimdeki-melodi/629759.html"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11621209/wi:120/wh:true" alt="İçimdeki Melodi"></a><a class="name" href="https://www.kitapyurdu.com/kitap/icimdeki-melodi/629759.html" title="İçimdeki Melodi"><span class=" line-clamp-2">İçimdeki Melodi</span></a><div class="price"><div class="price-new "><span class="value"><span class="TL"></span> 49,10</span></div></div><div class="hover-menu-home"><a class="add-to-cart-home" onclick="addToCart(629759);" data-title="Sepete Ekle"><i class="fa fa-shopping-cart"></i></a><a class="in-favorites-home" style="display:none;" onclick="removeFromFavorites(629759);" data-title="Favorilerinizde"><i class="fa fa-heart red"></i></a><a class="add-to-favorites-home" onclick="addToFavorites(629759);" data-title="Favorilerime Ekle"><i class="fa fa-heart"></i></a><a id="product-wish-list-remove-629759" onclick="removeFromWishList(629759);" data-title="Alışveriş Listemden Çıkar" style="color: #FF8000; display: none"><i class="fa fa-tag"></i></a><a id="product-wish-list-add-629759" onclick="addToWishList(629759);" data-title="Alışveriş Listeme Ekle" style="display: inline-block"><i class="fa fa-tag"></i></a></div><div class="notice-container"></div></div></li>
                    <li class="swiper-slide"><div class="product-cr" id="product-589761"><a class="pr-img-link" href="https://www.kitapyurdu.com/kitap/benim-zurafam-ucabilir/589761.html"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11631569/wi:120/wh:true" alt="Benim Zürafam Uçabilir"></a><a class="name" href="https://www.kitapyurdu.com/kitap/benim-zurafam-ucabilir/589761.html" title="Benim Zürafam Uçabilir"><span class=" line-clamp-2">Benim Zürafam Uçabilir</span></a><div class="price"><div class="price-new "><span class="value"><span class="TL"></span> 20,31</span></div></div><div class="hover-menu-home"><a class="add-to-cart-home" onclick="addToCart(589761);" data-title="Sepete Ekle"><i class="fa fa-shopping-cart"></i></a><a class="in-favorites-home" style="display:none;" onclick="removeFromFavorites(589761);" data-title="Favorilerinizde"><i class="fa fa-heart red"></i></a><a class="add-to-favorites-home" onclick="addToFavorites(589761);" data-title="Favorilerime Ekle"><i class="fa fa-heart"></i></a><a id="product-wish-list-remove-589761" onclick="removeFromWishList(589761);" data-title="Alışveriş Listemden Çıkar" style="color: #FF8000; display: none"><i class="fa fa-tag"></i></a><a id="product-wish-list-add-589761" onclick="addToWishList(589761);" data-title="Alışveriş Listeme Ekle" style="display: inline-block"><i class="fa fa-tag"></i></a></div><div class="notice-container"><div class="notice-home same-day purple"><i class="fa fa-plane"></i>&nbsp;<span class="text">24 Saatte Kargoda</span></div></div></div></li>
                                  -->
                        </ul>

                        <div class="swiper-scrollbar" style="opacity: 0; transition-duration: 400ms;">
                            <div class="swiper-scrollbar-drag"
                                style="transform: translate3d(0px, 0px, 0px); width: 150.136px;"></div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="home js-lazy">
                <div class="ad-large" id="ad-23" style="margin-left: 450px;"><a
                        href="index.php?route=ad/redirect&amp;ad_id=1247" target="_self" rel="nofollow"><img
                            class="img-lazy-loaded"
                            data-src="https://img.kitapyurdu.com/v1/getImage/fn:11622703/wh:611d5f1ae" alt="banner"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11622703/wh:611d5f1ae" width="1000"
                            height="100"></a></div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: data } = await useFetch('http://localhost:8000/books/kid/')
console.log(data)

</script>