<template>
    <div>
        <div class="box gray no-padding bargain-filter-cr" style="margin-left: 450px;">
            <div class="box-heading">
                <div class="ribbon-container">
                    <div class="ribbon-text">Kelepir Ara</div>
                </div>
                <div class="bargain-percentages" style="margin-right: 590px;">%90 %80 %70 %60 %50 indirimlerle!</div>
            </div>
        
            <div class="bargain-filter padding">
                <div class="bargain-filter-item">
                    Konu:<select id="js-bg-cat" name="category" style="width: 120px">
                        <option value="0">- Bütün Konular -</option><option value="1033">Akademik</option><option value="200">Başvuru Kitapları</option><option value="31">Bilgisayar</option><option value="236">Bilim &amp; Mühendislik</option><option value="2">Çocuk Kitapları</option><option value="283">Ders Kitapları</option><option value="319">Diğer</option><option value="436">Diğer Dildeki Yayınlar</option><option value="64">Din</option><option value="128">Edebiyat</option><option value="359">Eğitim</option><option value="371">Eğlence-Mizah</option><option value="380">Ekonomi</option><option value="424">Felsefe-Düşünce</option><option value="212">Hobi</option><option value="248">Hukuk</option><option value="258">İslam</option><option value="224">İstanbul Kitapları</option><option value="731">Kadın-Erkek</option><option value="77">Kültür</option><option value="161">Müzik</option><option value="760">Orijinal Dil</option><option value="87">Psikoloji</option><option value="753">Resim</option><option value="344">Sağlık-Tıp</option><option value="172">Sanat</option><option value="737">Sınavlar</option><option value="724">Sinema-Tiyatro</option><option value="98">Siyaset</option><option value="415">Sosyoloji</option><option value="186">Spor</option><option value="456">Şehir Kitapları</option><option value="41">Tarih</option><option value="403">Turizm-Gezi</option>            </select>
                </div>
        
                <div class="bargain-filter-item">
                    Fiyat Üst Sınır:<input type="text" id="js-bg-price" name="price" size="7" style="width: 40px">
                </div>
        
                <div class="bargain-filter-item" >
                    İndirim Alt Sınır: <select id="js-bg-disc" name="discount" style="width: 60px">
                        <option value="50">% 50</option><option value="60">% 60</option><option value="70">% 70</option><option value="80">% 80</option><option value="90">% 90</option>            </select>
                </div>
                <input type="button" value="Kelepir Ara" id="button-bargain" class="right button" style="margin-right: 500px;">
            </div>
        </div>
    </div>
</template>