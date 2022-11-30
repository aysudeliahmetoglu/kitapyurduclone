export default {
    head: { 
      title: '',
      
      router: {
        base: '//'
      },
     
      htmlAttrs: {
        lang: 'en',
      },
      script:[
        {
          
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
  

    css: [
      "~/assets/css/style.css",
      "~/assets/css/style2.css",
      "~/assets/css/style3.css",
      "~/assets/css/style4.css",
      "~/assets/css/style5.css",
      "~/assets/css/style6.css",
      "~/assets/css/style7.css",
      "~/assets/css/style8.css"


    ],
    
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
   
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],
  
    // Modules: https://go.nuxtjs.dev/config-modules
 
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      
    },
  
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
   
  }