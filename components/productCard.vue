<template>
    <div class="product-cr"  :id="'product-' + product.id">
      <a class="pr-img-link" :href="product.link"
        ><img
          :src="product.img1"
          :alt="product.title"
      /></a>
      <a class="name" :href="product.link" :title="product.title">
        <span class="line-clamp-2">{{ product.title }}</span></a
      >
      <div class="price">
        <div class="price-new">
          <span class="value"><span class="TL"></span>{{ product.price }}</span>
        </div>
      </div>
      <div class="hover-menu-home">
        <a
          class="add-to-cart-home"
          onclick="addToCart(451018);"
          data-title="Sepete Ekle"
          ><i class="fa fa-shopping-cart"></i></a
        ><a
          onclick="showAjaxBox('https://www.kitapyurdu.com/index.php?route=product/product/page_image&amp;product_id=451018', true)"
          data-title="İç Sayfalar"
          ><i class="fa fa-book"></i></a
        ><a
          class="in-favorites-home"
          style="display: none"
          onclick="removeFromFavorites(451018);"
          data-title="Favorilerinizde"
          ><i class="fa fa-heart red"></i></a
        ><a
          class="add-to-favorites-home"
          onclick="addToFavorites(451018);"
          data-title="Favorilerime Ekle"
          ><i class="fa fa-heart"></i></a
        ><a
          id="product-wish-list-remove-451018"
          onclick="removeFromWishList(451018);"
          data-title="Alışveriş Listemden Çıkar"
          style="color: #ff8000; display: none"
          ><i class="fa fa-tag"></i></a
        ><a
          id="product-wish-list-add-451018"
          onclick="addToWishList(451018);"
          data-title="Alışveriş Listeme Ekle"
          style="display: inline-block"
          ><i class="fa fa-tag"></i
        ></a>
      </div>
      <div class="notice-container">
        <div class="notice-home same-day purple">
          <i class="fa fa-plane"></i>&nbsp;<span class="text"
            >24 Saatte Kargoda</span
          >
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
  };
  </script>
  