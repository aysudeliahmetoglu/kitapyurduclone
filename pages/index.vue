
<template>
  <div>
    <Slider />
    <Navbar />
    <haftanınyayınevi />
    <ayınyayınevi />
    <ayınyazarları />
    <ilgigörenler />
    <kategoriler />
    <cocukKitaplari />
    <oyundan_dahafazlası />
    <dünya_dilleri />
    <Hayatımız_sınav />
    <Ne_okusam />
    <coksatanveyenieklenenler />
    <altkısım />
    <Encoksatılanlar />
    <Populeraramalar />
    <Populerkategoriler />
  </div>
</template> 
<script>
import Slider from "../components/slider.vue";
import Navbar from "../components/navbar.vue";

import haftanınyayınevi from "../components/haftanınyayınevi.vue";
import ayınyayınevi from "../components/ayınyayınevi.vue";
import ayınyazarları from '../components/ayınyazarları.vue';
import ilgigörenler from "../components/ilgigörenler.vue";

import kategoriler from "../components/kategoriler.vue";
import cocukKitaplari from "../components/cocukKitaplari.vue";
import oyundan_dahafazlası from "../components/oyundan_dahafazlası.vue";
import dünya_dilleri from "../components/dünya_dilleri.vue";
import Hayatımız_sınav from "../components/hayatımız_sınav.vue";
import Ne_okusam from "../components/ne_okusam.vue";
import coksatanveyenieklenenler from "../components/coksatanveyenieklenenler.vue";
import altkısım from "../components/altkısım.vue";
import Populeraramalar from "../components/populeraramalar.vue";
import Populerkategoriler from "../components/populerkategoriler.vue";
import Encoksatılanlar from "../components/encoksatılanlar.vue";
import productCard from "~~/components/productCard.vue";
if (process.client) {
  window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/sw.js')
  })
}
export default {
  name: "IndexPage",
  components: {
    Navbar,
    Slider,
    haftanınyayınevi,
    ayınyayınevi,
    ilgigörenler,
    kategoriler,
    cocukKitaplari,
    oyundan_dahafazlası,
    dünya_dilleri,
    Hayatımız_sınav,
    Encoksatılanlar,
    Ne_okusam,
    coksatanveyenieklenenler,
    altkısım,
    Populeraramalar,
    Populerkategoriler,
    ayınyazarları,
    productCard
  }
};

</script>