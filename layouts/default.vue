
<template> 
    <div> 
      <Navbar />
      <Slider /> 
      <haftanınyayınevi />
      <ayınyayınevi />
      <ayınyazarları />
      <ilgigörenler />
      <kategoriler/>
      <cocukKitaplari />
      <oyundan_dahafazlası />
      <dünya_dilleri/>
      <Hayatımız_sınav />
      <Ne_okusam/>
      <coksatanveyenieklenenler />
      <kelepirara />
      <altkısım />
      <Encoksatılanlar/>
      <Populeraramalar/>
      <Populerkategoriler/>


      

      
    </div> 
  </template> 
  <script> 
  import Navbar from '../components/navbar.vue'; 
  import Slider from '../components/slider.vue'; 
  import haftanınyayınevi from '../components/haftanınyayınevi.vue';
  import ayınyayınevi from '../components/ayınyayınevi.vue';
  import ayınyazarları from '../components/ayınyazarları.vue';
  import ilgigörenler from '../components/ilgigörenler.vue';
  import kategoriler from '../components/kategoriler.vue';
import cocukKitaplari from '../components/cocukKitaplari.vue';
import oyundan_dahafazlası from '../components/oyundan_dahafazlası.vue';
import dünya_dilleri from '../components/dünya_dilleri.vue';
import Hayatımız_sınav from '../components/hayatımız_sınav.vue';
import Ne_okusam from '../components/ne_okusam.vue';
import coksatanveyenieklenenler from '../components/coksatanveyenieklenenler.vue';
import kelepirara from '../components/kelepirara.vue';
import altkısım from '../components/altkısım.vue';
import Populeraramalar from '../components/populeraramalar.vue';
import Populerkategoriler from '../components/populerkategoriler.vue';
import Encoksatılanlar from '../components/encoksatılanlar.vue';







  
 
  export default { 
      name: "IndexPage", 
      components: { Navbar, Slider, haftanınyayınevi, ayınyayınevi, ilgigörenler,
         kategoriler, cocukKitaplari, oyundan_dahafazlası, dünya_dilleri, Hayatımız_sınav, Ne_okusam,
          coksatanveyenieklenenler, kelepirara, altkısım, Populeraramalar, Populerkategoriler , Encoksatılanlar,ayınyazarları} 
  } 
  </script>