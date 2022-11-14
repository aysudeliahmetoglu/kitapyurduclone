export { default as Ayınyayınevi } from '../../components/ayınyayınevi.vue'
export { default as Ayınyazarları } from '../../components/ayınyazarları.vue'
export { default as CocukKitaplari } from '../../components/cocukKitaplari.vue'
export { default as DünyaDilleri } from '../../components/dünya_dilleri.vue'
export { default as Encoksatılanlar } from '../../components/encoksatılanlar.vue'
export { default as Haftanınyayınevi } from '../../components/haftanınyayınevi.vue'
export { default as HayatımızSınav } from '../../components/hayatımız_sınav.vue'
export { default as Ilgigörenler } from '../../components/ilgigörenler.vue'
export { default as Kategoriler } from '../../components/kategoriler.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as NeOkusam } from '../../components/ne_okusam.vue'
export { default as OyundanDahafazlası } from '../../components/oyundan_dahafazlası.vue'
export { default as Slider } from '../../components/slider.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
