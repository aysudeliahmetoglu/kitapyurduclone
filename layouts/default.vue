
<template> 
    <div> 
      <Navbar />
      <Slider /> 
      <haftanınyayınevi />
      <ayınyayınevi />
      <!-- <ayınyazarları /> -->
      <ilgigörenler />
      

      
    </div> 
  </template> 
  <script> 
  import Navbar from '../components/navbar.vue'; 
  import Slider from '../components/slider.vue'; 
  import haftanınyayınevi from '../components/haftanınyayınevi.vue';
  import ayınyayınevi from '../components/ayınyayınevi.vue';
  // import ayınyazarları from '../components/ayınyazarları.vue';
  import ilgigörenler from '../components/ilgigörenler.vue';


  
 
  export default { 
      name: "IndexPage", 
      components: { Navbar,Slider,haftanınyayınevi,ayınyayınevi,ilgigörenler} 
  } 
  </script>