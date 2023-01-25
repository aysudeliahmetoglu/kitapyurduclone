
import ProductCard from './productCard.vue';

<template>
    <div>
        <div class="home js-ajax" style="max-width: 1200px;">
            <div class="box gray featured-publisher-cr" style="margin-left: 450px;" id="js-weekly_featured_publisher_0">
                <div class="box-heading featured-publisher-heading" style="max-width: 1200px;">
                    <div class="ribbon-container" style="width: 200px;">
                        <div class="ribbon-text">Haftanın Yayınevi</div>
                    </div>

                    <a class="pub-image-cr" href="https://www.kitapyurdu.com/yayinevi/altinordu-yayinlari/7791.html">
                        <img class="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:11582373/wi:100/wh:93febe10a"
                            alt="ALTINORDU YAYINLARI" title="ALTINORDU YAYINLARI" width="100" height="100">
                    </a>

                    <div class="pub-name line-clamp-3">
                        <span>ALTINORDU YAYINLARI</span>
                    </div>

                    <div class="featured-publisher-discount">%45'e<br>varan indirim</div>

                    <span class="tooltip-discount-date"
                        data-title="14 Kasım - 21 Kasım tarihleri arasında geçerlidir."><i
                            class="common-sprite info"></i></span>

                    <div class="heading-nav-horizontal">
                        <a class="show-all" href="https://www.kitapyurdu.com/yayinevi/altinordu-yayinlari/7791.html"
                            style="margin-left:-140px;  float:left">Tümünü Göster</a>
                        <div class="heading-nav-arrows" style="margin-right:-500px;"><a
                                class="common-sprite prev swiper-button-disabled" tabindex="0" role="button"
                                aria-label="Previous slide" aria-disabled="true" style="margin-left:-510px;"></a><a
                                class="common-sprite next" tabindex="0" role="button" aria-label="Next slide"
                                aria-disabled="false"></a></div>
                    </div>

                </div>

                <div class="box-content product-grid-wr">
                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal"
                        style="cursor: grab;">
                        <ul class="product-grid swiper-wrapper"
                            style="display: flex; width:300px !important; transition-duration: 0ms; transform: translate3d(2px, 0px, 0px);">
                            <li class="swiper-slide swiper-slide-active" v-for="product in products" :key="product.permalink">
                                <ProductCard :product="product"></ProductCard>
                            </li>
                                                   
                        </ul>
                        <div class="swiper-scrollbar" style="opacity: 0; transition-duration: 400ms;">
                            <div class="swiper-scrollbar-drag"
                                style="transform: translate3d(0px, 0px, 0px); width: 150.136px;"></div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
                <div class="box-heading featured-publisher-heading next-week" style="width: 735px;">
                    <div class="ribbon-container" style="width: 400px;">
                        <div class="ribbon-text" style="width: 300px;">Gelecek Haftanın Yayınevi</div>
                    </div>

                    <a class="pub-image-cr" href="https://www.kitapyurdu.com/yayinevi/celik-yayinevi/485.html">
                        <img class="pub-image"
                            src="https://img.kitapyurdu.com/v1/getImage/fn:3877269/wi:100/wh:c8c1716f2"
                            alt="ÇELİK YAYINEVİ" title="ÇELİK YAYINEVİ" width="100" height="100">
                    </a>

                    <div class="pub-name line-clamp-3">
                        <span>ÇELİK YAYINEVİ</span>
                    </div>

                    <div class="featured-publisher-discount">%45'e<br>varan indirim</div>

                    <span class="tooltip-discount-date"
                        data-title="21 Kasım - 28 Kasım tarihleri arasında geçerlidir."><i
                            class="common-sprite info"></i></span>

                    <a class="btn-prepare-cart" href="https://www.kitapyurdu.com/yayinevi/celik-yayinevi/485.html"
                        style="margin-right: 500px;"> <span>Sepetinizi Hazırlayın</span> <i
                            class="common-sprite red-next"></i> </a>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import data from '../datas/data.json';
export default {

    data() {
        return {
            products: data.products
        }
    }
};
</script>