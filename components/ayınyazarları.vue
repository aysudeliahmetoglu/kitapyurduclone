<template>
    <div>
        <div class="box gray no-padding" style=" max-width:750px; margin-left: 450px;" id="js-ana_sayfa_ayin_yazarlari">
            <div class="box-heading padding">
                <div class="ribbon-container">
                    <div class="ribbon-text">Ayın Yazarları</div>
                </div>
                <div class="heading-nav-horizontal">
                    <a class="view-all" href="ayin-yazarlari" data-title="Ayın Yazarları"
                        style="margin-left:630px; text-decoration:none; color: gray; margin-top: -20px; position: absolute; ">Tümünü
                        Göster</a>
                    <div class="heading-nav-arrows">
                        <a class="common-sprite prev swiper-button-disabled" style="margin-left:-5px;" tabindex="0"
                            role="button" aria-label="Previous slide" aria-disabled="true"></a>
                        <a class="common-sprite next" tabindex="0" role="button" aria-label="Next slide"
                            aria-disabled="false"></a>
                    </div>
                </div>
            </div>
            <div class="box-content html-display-wr" style="height:165px">
                <div class="authors-wr">
                    <a
                        href="index.php?route=product/manufacturer_products&amp;manufacturer_id=3320&amp;filter_publisher=9793&amp;sort=purchased_365&amp;order=DESC&amp;filter_in_stock=1">
                        <img src="https://img.kitapyurdu.com/v1/getImage/fn:11637210/wi:200/wh:63974347b"
                            alt="Prof. Dr. İsmail<br>Tunalı" width="100" height="100">
                        <span class="discount">kitaplarında %45'e varan indirimler!</span>
                        <span class="name">
                            Prof. Dr. İsmail
                            <br>Tunalı
                        </span>
                    </a>
                    <a
                        href="index.php?route=product/manufacturer_products&amp;manufacturer_id=27742&amp;filter_publisher=583&amp;sort=purchased_365&amp;order=DESC&amp;filter_in_stock=1">
                        <img src="https://img.kitapyurdu.com/v1/getImage/fn:9831914/wi:200/wh:31a9319a7"
                            alt="Falih Rıfkı<br>Atay" width="100" height="100">
                        <span class="discount">kitaplarında %45'e varan indirimler!</span>
                        <span class="name">
                            Falih Rıfkı
                            <br>Atay
                        </span>
                    </a>
                    <a
                        href="index.php?route=product/manufacturer_products&amp;manufacturer_id=57944&amp;filter_publisher=8598&amp;sort=purchased_365&amp;order=DESC&amp;filter_in_stock=1">
                        <img src="https://img.kitapyurdu.com/v1/getImage/fn:11490393/wh:bb64996eb"
                            alt="Tülin<br>Kozikoğlu" width="100" height="100">
                        <span class="discount">kitaplarında %40'a varan indirimler!</span>
                        <span class="name">
                            Tülin
                            <br>Kozikoğlu
                        </span>
                    </a>
                    <a
                        href="index.php?route=product/manufacturer_products&amp;manufacturer_id=146611&amp;filter_publisher=53&amp;sort=purchased_365&amp;order=DESC&amp;filter_in_stock=1">
                        <img src="https://img.kitapyurdu.com/v1/getImage/fn:11637212/wi:200/wh:e173cfd43"
                            alt="Saliha<br>Erdim" width="100" height="100">
                        <span class="discount">kitaplarında %40'a varan indirimler!</span>
                        <span class="name">
                            Saliha
                            <br>Erdim
                        </span>
                    </a>
                    <a
                        href="index.php?route=product/manufacturer_products&amp;manufacturer_id=51681&amp;filter_publisher=9150&amp;sort=purchased_365&amp;order=DESC&amp;filter_in_stock=1">
                        <img src="https://img.kitapyurdu.com/v1/getImage/fn:11637213/wi:200/wh:945a1e0fb"
                            alt="Furkan<br>Çalışkan" width="100" height="100">
                        <span class="discount">kitaplarında %40'a varan indirimler!</span>
                        <span class="name">
                            Furkan
                            <br>Çalışkan
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template> 
<style>
.authors-wr {
    overflow: hidden;
    padding: 15px 0 10px 15px;
    user-select: none;
}

.authors-wr a {
    display: inline-block;
    position: relative;
    width: 130px;
    height: 140px;
    text-align: center;
    text-decoration: none;
}

.authors-wr img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ddd;
    pointer-events: none;
}

.authors-wr .discount {
    display: none;
    position: absolute;
    box-sizing: border-box;
    width: 104px;
    height: 104px;
    left: 13px;
    top: 0;
    padding-top: 28px;
    font-size: 15px;
    text-align: center;
    color: #fff !important;
    background-color: #c00;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.95;
}

.authors-wr .discount b {
    font-size: 1.3em;
    color: #fff !important;
}

.authors-wr a:hover .discount {
    display: block;
}

.authors-wr .name {
    position: absolute;
    width: 130px;
    left: 0;
    top: 110px;
    font-size: 12px;
    text-align: center;
    color: #666;
}

.authors-wr a:hover .name {
    color: #000;
}
</style>