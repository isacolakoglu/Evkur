<template>
  <section>
    <div class="container" v-for="item in filted" :key="item.id">
      <div class="product-image">
        <div
          class="image"
          data-zoom-image="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a32-siyah_ho2s4r_1920.jpg"
          style="position: relative; overflow: hidden"
        >
          <div v-if="imageData == null">
            <img :src="item.image" />
          </div>
          <div v-else><img :src="imageData" :alt="imageData" /></div>
          <img
            role="presentation"
            alt=""
            src="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a32-siyah_ho2s4r_1920.jpg"
            class="zoomImg"
            style="
              position: absolute;
              top: 0px;
              left: 0px;
              opacity: 0;
              width: 1920px;
              height: 1920px;
              border: none;
              max-width: none;
              max-height: none;
            "
          />
        </div>
        <div class="items">
          <a
            href="javascript:void(0)"
            class="item active"
            data-zoom-image="https://cdn.evkur.com.tr/c/Product/thumbs/samsung-galaxy-a32-siyah_ho2s4r_1920.jpg"
          >
            <img
              :src="item.image"
              alt="Samsung Galaxy A32 128GB Siyah Akıllı Telefon (A325F)"
              @click="image(item)"
            />
          </a>
        </div>
      </div>
      <div class="product-info">
        <h1 class="name">
          <span> {{ item.name }} </span>
        </h1>
        <div class="rating">
          <div class="stars" data-rating="0">
            <div class="star" v-for="item in item.stars" :key="item">
              <img
                class="active"
                src="https://cdn.evkur.com.tr/c/Content/Icons/star-icon.png"
              />
              <img src="https://cdn.evkur.com.tr/c/Content/Icons/active-star-icon.png" />
            </div>
            <div class="star" v-for="item in 5 - item.stars" :key="item">
              <img src="https://cdn.evkur.com.tr/c/Content/Icons/star-icon.png" />
              <img
                class="active"
                src="https://cdn.evkur.com.tr/c/Content/Icons/active-star-icon.png"
              />
            </div>
          </div>

          <a href="javascript:void(0)" class="make-first-comment">
            Bu ürünü ilk yorumlayan siz olun!
          </a>
          <div class="price">
            <div class="price-title">
              <span>*</span> Fiyat seçimi sepet adımında yapılacaktır.
            </div>
            <div class="price-options">
              <h2 class="price-option">
                <span> Kredi Kartı / Havale / EFT </span>
                <span class="old-price">{{ item.oldPrice }}</span>
                {{ item.price }}
              </h2>
              <h2 class="price-option">
                <span> {{ item.price }} X 3 Taksit </span>
                {{ (parseInt(item.price) / 3).toFixed(4) }}
              </h2>
              <h2 class="price-option">
                <span> {{ item.price }} X 12 Taksit </span>
                {{ (parseInt(item.price) / 12).toFixed(4) }}
              </h2>
            </div>
          </div>
          <div class="group-products">
            <div class="title">Renk</div>
            <a href="/samsung-galaxy-a32-128gb-beyaz-akilli-telefon-a325f" class="item">
              Beyaz
            </a>
            <a href="/samsung-galaxy-a32-128gb-mavi-akilli-telefon-a325f" class="item">
              Mavi
            </a>
            <a href="/samsung-galaxy-a32-128gb-menekse-akilli-telefon-a325f" class="item">
              Menekşe
            </a>
            <a href="javascript:void(0)" class="item selected"> Siyah </a>
          </div>

          <div class="product-actions">
            <form
              action="/"
              ajaxcallname="addProductToCart"
              class="validate"
              method="post"
              novalidate="novalidate"
            >
              <input id="languageId" name="languageId" type="hidden" value="1" /><input
                data-val="true"
                data-val-number="The field Id must be a number."
                data-val-required="Id alanı gereklidir."
                id="Id"
                name="Id"
                type="hidden"
                value="236307"
              />
              <div class="product-quantity-selector" data-max="1" data-value="1">
                <a href="javascript:void(0)" class="minus"> - </a>
                <span>
                  <span> 1 </span>
                  Adet
                </span>
                <a href="javascript:void(0)" class="plus"> + </a>
                <input
                  type="hidden"
                  name="Quantity"
                  class="product-quantity-hidden-input"
                  value="1"
                />
              </div>
              <a
                href="javascript:void(0)"
                class="button red add-to-cart-button submit-button"
              >
                <span @click="addBasket(filted)">SEPETE EKLE</span>
              </a>
            </form>
          </div>
          <div class="sub-actions">
            <div class="sub-action sub-action-favorite">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="addProductToFavorites"
                novalidate="novalidate"
              >
                <img
                  src="https://cdn.evkur.com.tr/c/Content/Icons/product-favorite-icon.png"
                  class="submit-button"
                />
                <span class="submit-button"> Favorilerime Ekle </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="236307" />
              </form>
            </div>
            <div class="sub-action sub-action-comparison">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="AddProductToComparisonList"
                novalidate="novalidate"
              >
                <img
                  src="https://cdn.evkur.com.tr/c/Content/Icons/product-compare-icon.png"
                  class="submit-button"
                />
                <span class="submit-button"> Karşılaştırma Listesine Ekle </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="236307" />
              </form>
            </div>
            <a href="javascript:void(0)" class="sub-action sub-action-share">
              <img
                src="https://cdn.evkur.com.tr/c/Content/Icons/product-share-icon.png"
                alt="share"
              />
              <span> Paylaş </span>
            </a>
            <div class="sub-action sub-action-pricealert">
              <form
                action=""
                method="post"
                class="validate"
                ajaxcallname="AddProductPriceAlert"
                novalidate="novalidate"
              >
                <img
                  src="https://cdn.evkur.com.tr/c/Content/Icons/product-price-alarm-icon.png"
                  class="submit-button"
                />
                <span class="submit-button"> Fiyatı düşünce haber ver </span>
                <input type="hidden" name="languageId" value="1" />
                <input type="hidden" name="productId" value="236307" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "./../../db.js";

export default {
  data() {
    return {
      data: [],
      filted: null,
      imageData: null,
    };
  },
  created() {
    db.collection(this.$route.params.data)
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.data.push(doc.data());
        });
      });
    // fetch("http://localhost:3000/" + this.$route.params.data)
    //   .then((response) => response.json())
    //   .then((data) => (this.data = data));

    setTimeout(() => {
      this.filted = this.data.filter((x) => x.id == this.$route.params.id);
    }, 500);
  },
  methods: {
    image(item) {
      this.imageData = item;
    },
    addBasket(item) {
      console.log(item);
      console.log(item.image);
      db.collection("basket").add({
        name: item[0].name,
        image: item[0].image,
        count: 1,
        price: item[0].price,
      });
      alert("eklendi");
    },
  },
};
</script>

<style scoped>
/* .items a:first-child {
  display: none;
} */
</style>
