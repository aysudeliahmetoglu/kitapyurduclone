// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ... other options
    components: true,

    modules: [
      // ...
      '@pinia/nuxt',
    ],    css: [
      "~/assets/css/style.css",
      "~/assets/css/style2.css",
      "~/assets/css/style3.css",
      "~/assets/css/style4.css",
      "~/assets/css/style5.css",
      "~/assets/css/style6.css",
      "~/assets/css/style7.css",
      "~/assets/css/style8.css"


    ],
    
    app: {
      head: { 
        title: '',
       
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
    }
    

  },
  
  

  )
