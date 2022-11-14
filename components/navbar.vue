<template>
    <div>
      <div id="header" class="js-obs js-obs-ever">

        <div id="header-banner" style="background-color:#fff2d0">
        <div class="container_12" id="top-banner">
            <a class="alt" href="https://www.kitapyurdu.com/kampanyalar" target="_self"><img alt="banner" src="https://img.kitapyurdu.com/v1/getImage/fn:11625281/wh:359343c9d" width="960" height="50"></a>
        </div>
    </div>
        <div id="header-top">
    <div class="container_12">
        <div class="welcome fl">
                            <div class="menu-top-button login"><a href="https://www.kitapyurdu.com/index.php?route=account/login">Giriş Yap</a></div>
            <div class="menu-top-button register"><a href="https://www.kitapyurdu.com/index.php?route=account/register">Üye Ol</a></div>
            
                            <div style="display: flex;">
                            </div>
                        </div>

        <div class="top-menu fr"><ul>
                <li><div class="menu top my-list"><ul><li>
                                <a class="common-sprite">Listelerim</a>
                                <div><ul>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/favorite&amp;selected_tags=0">Favorilerim</a></li>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/wishlist">Alışveriş Listem</a></li>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/readlist">Okuma Listelerim</a></li>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/notification">Ürün Takip Listem</a></li>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/price_notification">Fiyat Alarmı Listem</a></li>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/purchase">Satın Aldıklarım</a></li>
                                    </ul></div>
                            </li></ul></div></li>

                <li><div class="menu top"><ul><li>
                                <a href="https://www.kitapyurdu.com/index.php?route=account/order" class="common-sprite">Sipariş Takibi</a>
                                <div style="min-width:136px"><ul>
                                        <li><a href="https://www.kitapyurdu.com/index.php?route=account/order">Siparişlerim</a></li>
                                        <li><a href="iletisim">Müşteri Hizmetleri</a></li>
                                        <li><a onclick="showPaymentInfo();">Havale/EFT</a></li>
                                       
                                    </ul></div>
                            </li></ul></div></li>

                <li><form id="language-form" action="https://www.kitapyurdu.com/index.php?route=module/language" method="post" enctype="multipart/form-data">
<input type="hidden" name="csrf_token" value="211b1e92bc391d6c7440ec1df99e3ce3">
<div class="menu top">
<ul>
<li>
<a class="common-sprite icon-lang-tr">Türkçe</a>
<div style="min-width:85px">
    <ul>
        <li><a class="common-sprite icon-lang-en lang-list-link" onclick="$('input[name=\'language_code\']').attr('value', 'en');$('#language-form').submit();">English</a></li>
        <li><a class="common-sprite icon-lang-de lang-list-link" onclick="$('input[name=\'language_code\']').attr('value', 'de');$('#language-form').submit();">Deutsch</a></li>
    </ul>
</div>
</li>
</ul>
</div>
<input type="hidden" name="language_code" value="">
<input type="hidden" name="redirect" value="https://www.kitapyurdu.com/index.php?route=common/home">
</form>
</li>

                <li><form id="currency-form" action="https://www.kitapyurdu.com/index.php?route=module/currency" method="post" enctype="multipart/form-data">
<input type="hidden" name="csrf_token" value="84b88c0fe8b0b7739b9c31599f4ad9ea">
<div class="menu top">
<ul>
<li>
<a class="common-sprite">TL</a>
<div>
<ul>
    <li><a class="currency-list-link cur-EUR" title="Euro" onclick="$('input[name=\'currency_code\']').attr('value', 'EUR');$('#currency-form').submit();">EUR</a></li>
    <li><a class="currency-list-link cur-GBP" title="Sterlin" onclick="$('input[name=\'currency_code\']').attr('value', 'GBP');$('#currency-form').submit();">GBP</a></li>
    <li><a class="currency-list-link cur-USD" title="US Dollar" onclick="$('input[name=\'currency_code\']').attr('value', 'USD');$('#currency-form').submit();">USD</a></li>
</ul>
</div>
</li>
</ul>
</div>
<input type="hidden" name="currency_code" value="">
<input type="hidden" name="redirect" value="https://www.kitapyurdu.com/index.php?route=common/home">
</form>
</li>

                <li><div class="menu top"><ul><li>
                                <a href="yardim" class="common-sprite">Yardım</a>
                                <div style="right:0"><ul>
                                        <li><a href="yardim">Yardım ve İşlem Rehberi</a></li>
                                        <li><a href="yardim/sss">Sıkça Sorulan Sorular</a></li>
                                        <li><a href="yardim/video">Video Yardım</a></li>
                                        <li><a onclick="showAjaxBox('https://www.kitapyurdu.com/index.php?route=information/feedback/popup');">Önerim Var</a></li>
                                        <li><a href="iletisim">İletişim</a></li>
                                    </ul></div>
                            </li></ul></div></li>
            </ul></div>
    </div>
</div>

<div id="header-bottom">
    <div class="container_12 relative">
        <div class="logo-icon">
            <a href="https://www.kitapyurdu.com/"><img src="https://img.kitapyurdu.com/v1/getImage/fn:11250623/wh:fca476ca7" alt="kitapyurdu.com" width="95" height="75"></a>
        </div>
        <div class="logo-text">
            <a href="https://www.kitapyurdu.com/">
                                    <img src="https://img.kitapyurdu.com/v1/getImage/fn:11596676/wh:5ca4d31f0" title="kitapla buluşmanın en kolay yolu!" alt="kitapyurdu.com" width="260" height="74">
                                </a>
        </div>

                    <div id="search" class="">
            <input id="search-input" type="text" name="search_keyword" autocomplete="off" value="" placeholder="kitap adı, yazar veya yayınevi ara">
            <div class="search-tools">
                                    <div id="search-key-button" class="common-sprite" onclick="showMiniKeyboard();"></div>
                <div id="search-key-container" style="display: none;"><a onclick="insertText('ç')">ç</a><a onclick="insertText('ğ')">ğ</a><a onclick="insertText('ı')">ı</a><a onclick="insertText('ö')">ö</a><a onclick="insertText('ş')">ş</a><a onclick="insertText('ü')">ü</a></div>
            </div>
            <span class="common-sprite button-search"></span>
            <div class="search-panel-container" style="display: none;" id="search-panel-cr">
                <div class="search-panel">
                    <span class="close-button"> <a onclick="resetSearchPanel()"> <i class="fa fa-lg fa-times"></i> </a> </span>
                    <div id="search-panel-results"></div>
                </div>
            </div>
                            
        </div>
        <div id="cart">
<div class="heading">
    <div id="sprite-cart-icon" class="common-sprite fl">
        <span id="cart-items" class="fl">0</span>
    </div>
    <div class="fl">
        <h4 class="common-sprite">Sepetim</h4>
        <div style="display: none" id="cart-items-text-container" class="text"><span id="cart-items-text" class="fl">0</span>&nbsp;ürün</div>
        <div style="display: block" id="cart-items-empty" class="text">Sepetiniz boş</div>
    </div>
</div>
<div class="content">
<div id="waiting" style="padding-top: 60px; min-height: 100px; text-align: center;"><img src="https://cdn.kitapyurdu.com/default/img/loading.gif" alt="loading" width="10" height="10"></div>
  </div>
</div>
    </div>
</div>

<div id="mainNav">
<div class="nav-content"><ul class="lvl1 active"><li class="book has-menu active"><div class="lvl1-item"><span>Kitap</span></div><div class="lvl2 js-bookCr"><ul class="js-ajaxCt js-bookCt">
<li class="has-open-menu">
<span class="mn-strong common-sprite">Çok Satan Kitaplar</span><div class="open-menu-cr">
<div class="open-menu-ct bookBestSeller">
<div class="subCategories">
<div class="mn-header">
<a class="mn-icon icon-angleRight" href="cok-satan-kitaplar/haftalik/1.html"><strong>Haftalık </strong>Çok Satan Kitaplar</a><a class="common-sprite headerIcon bookIcon mn-icon icon-arrowRight" href="kategori/kitap/1.html">Tüm Kitaplar</a>
</div>
<ul>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=16&amp;filter_in_stock=1">Çok Satan <strong>Edebiyat</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=19&amp;filter_in_stock=1">Çok Satan <strong>Edebiyat Dışı</strong> Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=22&amp;filter_in_stock=1">Çok Satan <strong>Çocuk</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=25&amp;filter_in_stock=1">Çok Satan <strong>İngilizce</strong> Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=28&amp;filter_in_stock=1">Çok Satan <strong>Sınav</strong> Kitapları</a></li>
</ul>
<ul>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=5&amp;filter_in_stock=1"><strong>Aylık</strong> Çok Satan Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=6&amp;filter_in_stock=1"><strong>Yıllık</strong> Çok Satan Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/bestseller_ten_year"><strong>Son 10 Yılın</strong> Çok Satanları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/bargain&amp;category=0&amp;discount=50&amp;filter_in_stock=1&amp;sort=p.price&amp;order=ASC&amp;limit=50"><strong>Kelepir Kitaplar</strong></a></li>
</ul>
</div>
<div class="BannersContainer" id="BookBestSellerBanners">
    <div class="swiper-button-prev swiper-button-prev-20bb" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-container swiperContainerBanners-20bb swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-380px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="9" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=211">
                    <img alt="50 adetlik Karbon Cep Boy Kitap Seti ve Mini Kitaplık bir arada, avantajlı fiyatıyla!" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11618321/wi:380/wh:d27471f96" width="380" height="213">
                </a>
                
            </div>
            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=194">
                    <img alt="Çok satan kitaplarda %70'e varan indirimler!	" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11519108/wi:380/wh:4f7de5ccf" width="380" height="213">
                </a>
                
            </div>
            
            <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 380px;">
                <a href="index.php?route=product/best_sellers&amp;list_id=1358&amp;sort=purchased&amp;order=DESC&amp;limit=100&amp;filter_in_stock=1">
                    <img alt="Cep Boy Kitaplarda Tek Fiyat 4,90 TL" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11618062/wi:380/wh:84203a852" width="380" height="213">
                </a>
                
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="2" style="width: 380px;">
                <a href="index.php?route=product/best_sellers&amp;sort=purchased&amp;order=DESC&amp;list_id=1625&amp;limit=100&amp;filter_in_stock=1">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11628826/wi:380/wh:f5a3b3d7b" alt="Manga " class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="3" style="width: 380px;">
                <a href="https://www.kitapyurdu.com/index.php?route=product/best_sellers&amp;sort=purchased_365&amp;order=DESC&amp;list_id=1369&amp;filter_in_stock=1&amp;filter_in_stock=1&amp;limit=100">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11565644/wi:380/wh:4e984229d" alt="Seçili kitaplardan 5 adet alın, sadece 35TL ödeyin!" class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="4" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=195">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11626143/wi:380/wh:1df892dbc" alt="Teslim Noktalarında, hem kargonuz hem de hediyeniz sizi bekler ;)" class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="5" style="width: 380px;">
                <a href="index.php?route=product/product&amp;product_id=592209">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11497232/wi:380/wh:140b1e839" alt="350TL ve üzeri alışverişlerde Kapra Felsefe Seti (10 Kitap) sadece 10,00TL." class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="6" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=179">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11576264/wi:380/wh:861457451" alt="Karbon Kitaplar’dan 50 adet Cep Boy kitap alana Mini Kitaplık sadece 150TL.! " class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="7" style="width: 380px;">
                <a href="index.php?route=product/best_sellers&amp;sort=purchased_365&amp;order=DESC&amp;list_id=744&amp;filter_in_stock=1&amp;filter_in_stock=1&amp;limit=100">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11577190/wi:380/wh:70b6feb69" alt="Kargo Ödeyen Avantajlı Ürünler" class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide" data-swiper-slide-index="8" style="width: 380px;">
                <a href="index.php?route=product/best_sellers&amp;sort=publish_date&amp;order=DESC&amp;list_id=1400&amp;filter_in_stock=1">
                    <img data-src="https://img.kitapyurdu.com/v1/getImage/fn:11583400/wi:380/wh:3ad844aca" alt="Kitap Hediye Kartları" class="swiper-lazy" width="380" height="213">
                </a>
                <div class="swiper-lazy-preloader"></div>
            </div>
            
            <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="9" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=211">
                    <img alt="50 adetlik Karbon Cep Boy Kitap Seti ve Mini Kitaplık bir arada, avantajlı fiyatıyla!" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11618321/wi:380/wh:d27471f96" width="380" height="213">
                </a>
                
            </div>
            
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=194">
                    <img alt="Çok satan kitaplarda %70'e varan indirimler!	" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11519108/wi:380/wh:4f7de5ccf" width="380" height="213">
                </a>
                
            </div></div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    <div class="swiper-button-next swiper-button-next-20bb" tabindex="0" role="button" aria-label="Next slide"></div>
    <div class="swiper-pagination bannerPagination-20bb swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 9"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 10"></span></div>
    </div>
</div>
<div class="mn-footer"><ul>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=176&amp;filter_in_stock=1">Hep Okunanlar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=729&amp;sort=purchased&amp;order=DESC&amp;filter_in_stock=1">Dünya Klasikleri</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=730&amp;sort=purchased&amp;order=DESC&amp;filter_in_stock=1">Türk Klasikleri</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=177&amp;filter_in_stock=1">En Çok Yorum Alanlar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/points_catalog&amp;sort=purchased&amp;order=DESC">Puan Kataloğunda Çok Satanlar</a></li>
</ul></div>
</div>
</li>
<li class="has-open-menu">
<span class="mn-strong common-sprite">Yeni Çıkan Kitaplar</span><div class="open-menu-cr">
<div class="open-menu-ct bookNew">
<div class="subCategories">
<div class="mn-header">
<a class="mn-icon icon-angleRight" href="yeni-cikan-kitaplar/haftalik/2.html"><strong>Haftalık</strong> Yeni Çıkan Kitaplar</a><a class="common-sprite headerIcon bookIcon mn-icon icon-arrowRight" href="kategori/kitap/1.html">Tüm Kitaplar</a>
</div>
<ul>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;filter_category_all=true&amp;path=1_737&amp;filter_in_stock=1&amp;sort=publish_date&amp;order=DESC&amp;limit=50">Yeni Çıkan <strong>Sınav</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;filter_category_all=true&amp;path=1_2&amp;filter_in_stock=1&amp;sort=publish_date&amp;order=DESC&amp;limit=50">Yeni Çıkan <strong>Çocuk</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;filter_category_all=true&amp;path=1_41&amp;filter_in_stock=1&amp;sort=publish_date&amp;order=DESC&amp;limit=50">Yeni Çıkan <strong>Tarih</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;sort=publish_date&amp;order=DESC&amp;path=1_319_341&amp;filter_in_stock=1">Yeni Çıkan <strong>Kişisel Gelişim</strong> Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/category/&amp;filter_category_all=true&amp;category_id=31&amp;sort=publish_date&amp;order=DESC&amp;filter_in_stock=1">Yeni Çıkan <strong>Bilgisayar</strong> Kitapları</a></li>
</ul>
<ul>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;list_id=15&amp;filter_in_stock=1">Son <strong>60 Günde</strong> Çıkanlar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;sort=publish_date&amp;order=DESC&amp;list_id=637&amp;filter_in_stock=1"><strong>İlgi Gören</strong> Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/tobe_published_products"><strong>Yayımlanacak</strong> Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/bargain&amp;category=0&amp;discount=50&amp;filter_in_stock=1&amp;sort=p.price&amp;order=ASC&amp;limit=50"><strong>Kelepir Kitaplar</strong></a></li>
</ul>
</div>
<div class="BannersContainer" id="BookNewBanners">
    <div class="swiper-button-prev swiper-button-prev-21bn" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-container swiperContainerBanners-21bn swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-380px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="1" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=93">
                    <img alt="Kütüphanem Uygulaması" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11461881/wi:380/wh:ceaf95fd3" width="380" height="213">
                </a>
                
            </div>
            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 380px;">
                <a href="ne-okusam">
                    <img alt="DM: Ne Okusam Listeleri" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11432020/wi:380/wh:5fee619ee" width="380" height="213">
                </a>
                
            </div>
            
            <div class="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="1" style="width: 380px;">
                <a href="index.php?route=information/information&amp;information_id=93">
                    <img alt="Kütüphanem Uygulaması" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11461881/wi:380/wh:ceaf95fd3" width="380" height="213">
                </a>
                
            </div>
            
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 380px;">
                <a href="ne-okusam">
                    <img alt="DM: Ne Okusam Listeleri" class="swiper-lazy swiper-lazy-loaded" src="https://img.kitapyurdu.com/v1/getImage/fn:11432020/wi:380/wh:5fee619ee" width="380" height="213">
                </a>
                
            </div></div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    <div class="swiper-button-next swiper-button-next-21bn" tabindex="0" role="button" aria-label="Next slide"></div>
    <div class="swiper-pagination bannerPagination-21bn swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span></div>
    </div>
</div>
<div class="mn-footer"><ul>
<li><a class="mn-icon icon-hash" href="index.php?route=product/manufacturer_readlist">Yazarlarımız Hangi Kitapları Okuyor?</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/points_catalog&amp;sort=publish_date&amp;order=DESC">Puan Kataloğuna Yeni Eklenenler</a></li>
</ul></div>
</div>
</li>
<li class="has-open-menu">
<span class="mn-strong common-sprite">Tüm Kitaplar</span><div class="open-menu-cr long-cr">
<div class="open-menu-ct bookAllCategories"><div class="subCategories">
<div class="mn-header">
<span class="common-sprite headerIcon bookIcon">Tüm Kitaplar</span><a class="mn-icon icon-arrowRight" href="kategori/kitap/1.html">Tüm Kitaplar</a>
</div>
<ul>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-edebiyat/128.html">Edebiyat</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-cocuk-kitaplari/2.html">Çocuk Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sinavlar/737.html">Sınavlar</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-kisisel-gelisim/341.html">Kişisel Gelişim</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-bilgisayar/31.html">Bilgisayar</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-kultur/77.html">Kültür</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-tarih/41.html">Tarih</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-felsefedusunce/424.html">Felsefe-Düşünce</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-psikoloji/87.html">Psikoloji</a></li>
</ul>
<ul>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-basvuru-kitaplari/1_200.html">Başvuru Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-bilgisayar/1_31.html">Bilgisayar</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-bilim-amp-muhendislik/1_236.html">Bilim &amp; Mühendislik</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-cocuk-kitaplari/1_2.html">Çocuk Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-dergi/1_479.html">Dergi</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-ders-kitaplari/1_283.html">Ders Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-diger-dildeki-yayinlar/1_436.html">Diğer Dildeki Yayınlar</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-din/1_64.html">Din</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-edebiyat/1_128.html">Edebiyat</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-egitim/1_359.html">Eğitim</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-eglencemizah/1_371.html">Eğlence-Mizah</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-ekonomi/1_380.html">Ekonomi</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-felsefedusunce/1_424.html">Felsefe-Düşünce</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-hobi/1_212.html">Hobi</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-hukuk/1_248.html">Hukuk</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-islam/1_258.html">İslam</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-istanbul-kitaplari/1_224.html">İstanbul Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-kadinerkek/1_731.html">Kadın-Erkek</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/diger-kisisel-gelisim/341.html">Kişisel Gelişim</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-kultur/1_77.html">Kültür</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-muzik/1_161.html">Müzik</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-orijinal-dil/1_760.html">Orjinal Dil</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-psikoloji/1_87.html">Psikoloji</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-resim/1_753.html">Resim</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sagliktip/1_344.html">Sağlık-Tıp</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sanat/1_172.html">Sanat</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sinavlar/1_737.html">Sınavlar</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sinematiyatro/1_724.html">Sinema-Tiyatro</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-siyaset/1_98.html">Siyaset</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sosyoloji/1_415.html">Sosyoloji</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-spor/1_186.html">Spor</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-sehir-kitaplari/1_456.html">Şehir Kitapları</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-tarih/1_41.html">Tarih</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-turizmgezi/1_403.html">Turizm-Gezi</a></li>
<li><a class="mn-icon icon-angleRight" href="kategori/kitap-diger/1_319.html">Diğer</a></li>
</ul>
</div></div>
<div class="mn-footer"><ul>
<li><a class="mn-icon icon-hash" href="index.php?route=product/manufacturer_readlist">Yazarlarımız Hangi Kitapları Okuyor?</a></li>
<li><a class="mn-icon icon-hash" href="ayin-yayinevleri">Ayın Yayınevleri</a></li>
<li><a class="mn-icon icon-hash" href="ayin-yazarlari">Ayın Yazarları</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/bargain&amp;category=0&amp;discount=50&amp;filter_in_stock=1">Kelepir Kitaplar</a></li>
<li><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;sort=purchased&amp;order=DESC&amp;list_id=744&amp;filter_in_stock=1&amp;limit=50">Kargo Ödeyen Avantajlı Ürünler</a></li>
</ul></div>
</div>
</li>
<li class="no-open-menu"><a class="mn-strong common-sprite" href="yayincilar">Yayıncılar</a></li>
<li class="no-open-menu"><a class="mn-strong common-sprite" href="yazarlar">Yazarlar</a></li>
<li class="no-open-menu" style="margin-left: auto;"><a class="mn-icon icon-hash" href="cocuk-kitaplari">Çocuk Kitapları</a></li>
<li class="no-open-menu"><a class="mn-icon icon-hash" href="sinav-kitaplari">Sınav Kitapları</a></li>
<li class="no-open-menu"><a class="mn-icon icon-hash" href="ne-okusam">Ne Okusam?</a></li>
</ul>
</div></li>
<li class="magazine has-menu"><div class="lvl1-item"><span>Dergi</span></div><div class="lvl2 js-magazineCr"><ul class="js-ajaxCt js-magazineCt"><li class="has-open-menu"><span class="mn-strong common-sprite">Edebiyat Dergileri</span><div class="open-menu-cr"><div class="open-menu-ct literatureMagazine"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="MagazineLiteratureBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="has-open-menu"><span class="mn-strong common-sprite">Tüm Dergiler</span><div class="open-menu-cr long-cr"><div class="open-menu-ct magazineAllCategories"><div class="subCategories"><div class="mn-load-sub-cats"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="no-open-menu" style="margin-left: auto;"><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;path=479_1142&amp;sort=publish_date&amp;order=DESC&amp;limit=50">Çocuk Dergileri</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;path=1_479_1140&amp;sort=publish_date&amp;order=DESC&amp;limit=50">Kültür ve Sanat Dergileri</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;sort=publish_date&amp;order=DESC&amp;path=1_479_1139">Tarih Dergileri</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/category&amp;sort=publish_date&amp;order=DESC&amp;path=479_1141">Bilim Dergileri</a></li></ul></div></li>
<li class="game has-menu"><div class="lvl1-item"><span>Hobi <small>&amp;</small> Oyuncak</span></div><div class="lvl2 js-gameCr"><ul class="js-ajaxCt js-gameCt"><li class="has-open-menu"><span class="mn-strong common-sprite">Oyun ve Oyuncak</span><div class="open-menu-cr"><div class="open-menu-ct gameForKids"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="GameForKidsBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="has-open-menu"><span class="mn-strong common-sprite">Hobi ve Eğlence</span><div class="open-menu-cr"><div class="open-menu-ct gameForAdults"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="GameForAdultsBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="no-open-menu" style="margin-left: auto;"><a class="mn-icon icon-hash" href="bookinzi">Bookinzi</a></li><li class="no-open-menu"><a class="mn-icon icon-hash" href="hobi-oyuncak">Oyundan Daha Fazlası</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;sort=purchased&amp;order=DESC&amp;list_id=1137&amp;filter_in_stock=1">Montessori Oyuncakları</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/publisher_products/all&amp;sort=purchased_365&amp;order=DESC&amp;publisher_id=8906&amp;filter_in_stock=1&amp;limit=50">Ahşap Puzzle</a></li></ul></div></li>
<li class="stationery has-menu"><div class="lvl1-item"><span>Kırtasiye</span></div><div class="lvl2 js-stationeryCr"><ul class="js-ajaxCt js-stationeryCt"><li class="has-open-menu"><span class="mn-strong common-sprite">Defterler</span><div class="open-menu-cr"><div class="open-menu-ct stationeryNotebook"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="StationeryNotebookBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="has-open-menu"><span class="mn-strong common-sprite">Kitap Aksesuarları</span><div class="open-menu-cr"><div class="open-menu-ct stationeryBookAccessories"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="BookAccessoriesBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="has-open-menu"><span class="mn-strong common-sprite">Diğer Ürünler</span><div class="open-menu-cr"><div class="open-menu-ct accessoriesProducts"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="StationeryOtherBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="no-open-menu" style="margin-left: auto;"><a class="mn-icon icon-hash" href="bookinzi">Bookinzi Kültür ve Sanat Ürünleri</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/best_sellers&amp;sort=p.sort_order&amp;order=ASC&amp;list_id=1400">Kitap Hediye Kartları</a></li><li class="no-open-menu"><a class="mn-icon icon-hash" href="okul-alisverisi">Okul Alışverişi</a></li></ul></div></li>
<li class="kirkambar has-menu"><div class="lvl1-item"><span>Kırkambar</span></div><div class="lvl2 js-kirkambarCr"><ul class="js-ajaxCt js-kirkambarCt"><li class="has-open-menu"><span class="mn-strong common-sprite">Temalı ve Lisanslı Ürünler</span><div class="open-menu-cr"><div class="open-menu-ct themeProducts"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="ThemeProductsBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="has-open-menu"><span class="mn-strong common-sprite">Diğer Ürünler</span><div class="open-menu-cr"><div class="open-menu-ct accessoriesProducts"><div class="subCategories"><div class="mn-load-header"></div><div class="mn-load-sub1"></div><div class="mn-load-sub2"></div></div><div class="BannersContainer" id="OtherProductsBanners"><div class="mn-load-banner"></div></div></div><div class="mn-footer"><div class="mn-load-footer"></div></div></div></li><li class="no-open-menu" style="margin-left:auto"><a class="mn-icon icon-hash" href="index.php?route=information/information&amp;information_id=185">Kahve ve Kahve Çekirdekleri</a></li><li class="no-open-menu"><a class="mn-icon icon-hash" href="index.php?route=information/information&amp;information_id=64">Tesbihler</a></li><li class="no-open-menu"><a class="mn-icon icon-angleRight" href="index.php?route=product/publisher_products/all&amp;publisher_id=8961&amp;sort=purchased_365&amp;order=DESC&amp;limit=50">Miyuki Takılar</a></li></ul></div></li>
<li class="hasLink"><a class="common-sprite allCategories" href="index.php?route=product/category">Tüm Kategoriler</a></li></ul><div class="lvl1feature"><div class="lvl1campaigns"><a class="common-sprite" href="kampanyalar">Kampanyalar</a></div><div class="lvl1catalog"><a class="common-sprite" href="puan-katalogu">Puan Kataloğu</a></div></div></div><div class="lvl2Area"></div><div id="mn-overlay"></div>
</div>
</div>
    </div>
  </template>
  
  