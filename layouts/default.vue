
<template> 
    <div> 
      <Navbar />
      <Slider /> 
      <haftanınyayınevi />
      <ayınyayınevi />
      <!-- <ayınyazarları /> -->
      <ilgigörenler />
      <kategoriler/>
      <cocukKitaplari />
      <oyundan_dahafazlası />
      <dünya_dilleri/>


      

      
    </div> 
  </template> 
  <script> 
  import Navbar from '../components/navbar.vue'; 
  import Slider from '../components/slider.vue'; 
  import haftanınyayınevi from '../components/haftanınyayınevi.vue';
  import ayınyayınevi from '../components/ayınyayınevi.vue';
  // import ayınyazarları from '../components/ayınyazarları.vue';
  import ilgigörenler from '../components/ilgigörenler.vue';
  import kategoriler from '../components/kategoriler.vue';
import cocukKitaplari from '../components/cocukKitaplari.vue';
import oyundan_dahafazlası from '../components/oyundan_dahafazlası.vue';
import dünya_dilleri from '../components/dünya_dilleri.vue';





  
 
  export default { 
      name: "IndexPage", 
      components: { Navbar,Slider,haftanınyayınevi,ayınyayınevi,ilgigörenler,kategoriler,cocukKitaplari,oyundan_dahafazlası,dünya_dilleri} 
  } 
  </script>