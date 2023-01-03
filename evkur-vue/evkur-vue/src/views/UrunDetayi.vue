<template>
  <top-bar></top-bar>
  <!--HİÇ PEŞİNATSIZ KREDİ KARTSIZ 24 TAKSİK EVKUR'da-->
  <EvkurVue></EvkurVue>
  <!--EVKUR Logo + Arama Kutucuğu + Giriş yap / Üye ol butonu + Sepetim-->
  <app-bar> </app-bar>
  <!--Telefon, Bilgisayar, Elektronik, Ev/Yaşam, Elektrikli Ev Aletleri, Spor/OutDoor/Motor, Kozmetik/Kişisel Bakım/Aksesuar-->
  <ContainerBar></ContainerBar>

  <section>
    <UrunArayuz></UrunArayuz>
    <UrunOneriSlider></UrunOneriSlider>
    <div class="container">
      <div class="tab product-tab">
        <UrunBar></UrunBar>
        <div class="tab-items">
          <UrunBilgisi></UrunBilgisi>
          <UrunTaksitBilgileri></UrunTaksitBilgileri>
          <UrunYorumlari></UrunYorumlari>
          <Kampanyalar></Kampanyalar>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import AppBar from "../components/AppBar.vue";
import EvkurVue from "../components/Evkur.vue";
import ContainerBar from "../components/ContainerBar.vue";
import UrunArayuz from "../components/ürünSayfasıComponents/UrunArayuz.vue";
import UrunOneriSlider from "../components/ürünSayfasıComponents/UrunOneriSlider.vue";
import UrunBar from "../components/ürünSayfasıComponents/UrunBar.vue";
import UrunBilgisi from "../components/ürünSayfasıComponents/UrunBilgisi.vue";
import UrunTaksitBilgileri from "../components/ürünSayfasıComponents/UrunTaksitBilgileri.vue";
import UrunYorumlari from "../components/ürünSayfasıComponents/UrunYorumlari.vue";
import Kampanyalar from "../components/ürünSayfasıComponents/Kampanyalar.vue";

export default {
  name: "UrunDetayi",
  components: {
    TopBar,
    AppBar,
    EvkurVue,
    ContainerBar,
    UrunOneriSlider,
    UrunBar,
    UrunBilgisi,
    UrunArayuz,
    UrunTaksitBilgileri,
    UrunYorumlari,
    Kampanyalar,
  },
};
</script>

<style>
@media only screen and (min-width: 600px) {
  .slider .item-info .price span.old-price:before {
    width: 90% !important;
  }

  .seg-rec-1 .slider .item .item-image .discount-info {
    top: -0.25rem;
    right: -0.25rem;
  }
  .seg-rec-1 .item-info a.item {
    padding: 0;
    border: none;
  }

  .seg-rec-1 .seg-item > a {
    padding-bottom: 0px;
  }

  .seg-item .sgf-add-btn {
    border: none;
  }

  .seg-rec-1 .item-info {
    border-right: 1px solid #e7e7e7;
    padding: 0 30px 10px 30px;
  }

  .seg-item .sgf-add-btn a.add-to-cart-button > span {
    line-height: 0.35rem;
  }

  .seg-item .sgf-add-btn a.add-to-cart-button {
    height: 0.34rem;
  }

  .seg-item .sgf-add-btn {
    display: none;
  }

  .seg-item:hover .sgf-add-btn {
    display: block;
  }

  .seg-item:hover #seg-product-title {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .seg-rec-1 span.old-price {
    text-decoration: none;
    width: 70% !important ;
  }
  .slider .item-info .price span.old-price:before {
    width: 62% !important;
  }

  .seg-rec-1 .slider .item {
    padding: 5px;
  }
  .seg-rec-1 .price {
    padding-left: 10px;
    min-height: 55px !important;
  }
  .seg-rec-1 .slider .item-info .rating {
    padding-right: 10px;
  }
  .seg-rec-1 .slider .multiline-ellipsis {
    min-height: 48px;
  }

  .seg-rec-1 .slider .item .item-image .discount-info {
    right: 10px;
  }
}
@media only screen and (max-width: 800px) {
  .seg-rec-1 span.old-price {
    width: 100% !important;
  }
  .seg-rec-1 button.owl-prev,
  .seg-rec-1 button.owl-next {
    margin-left: -9px;
    margin-top: -1.4rem !important;
    height: 1.1rem !important;
  }

  .seg-rec-1 h2 {
    font-size: 16px !important;
    text-transform: uppercase;
    font-family: "Proxima";
    text-align: center;
    color: #555555;
  }

  .seg-rec-1 .price span:not(.old-price) {
    font-size: 0.62rem !important;
  }

  .seg-rec-1 .price span:not(.old-price) sup {
    font-size: 0.28rem;
  }

  .seg-rec-1 .price span.old-price {
    font-size: 0.35rem;
    display: unset;
  }

  .seg-rec-1 .price span.old-price sup {
    font-size: 0.25rem;
  }

  .seg-rec-1 .rating {
    margin-top: 0.3rem;
  }

  .seg-rec-1 .rating .stars {
    /*float: left;*/
  }

  .seg-rec-1 .item-image .discount-info {
    width: 42px;
    height: 30px;
    margin-right: -28px;
  }

  .seg-rec-1 .item-image .discount-info span {
    font-size: 9px;
  }
}

@media only screen and (min-width: 900px) {
  .seg-rec-1 button.owl-prev,
  .seg-rec-1 button.owl-next {
    height: 0.44rem !important;
  }
  .seg-rec-1 .item-info .price span.old-price {
    display: table-cell;
  }
}
@media only screen and (max-width: 900px) {
  .seg-rec-1 button.owl-next {
    right: 0.1rem !important;
  }
}

.seg-rec-1 .item-info {
  margin-top: 0;
}

.seg-rec-1 .price {
  min-height: 50px;
}

.seg-rec-1 .sgf-add-btn {
  margin-top: 0;
  text-align: center;
}

.seg-rec-1 .sgf-add-btn a.item {
  padding: 0;
}

.seg-rec-1 .owl-next,
.seg-rec-1 .owl-prev {
  background-color: transparent !important;
}

.seg-rec-1 {
  padding-top: 40px;
  padding-bottom: 20px;
}

.seg-rec-1 h2 {
  font-size: 20px !important;
  text-transform: uppercase;
  font-family: "Proxima";
  text-align: center;
  color: #555555;
}

.seg-rec-1 .slider {
  margin-top: 0.2rem;
}

.seg-rec-1 .name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 600;
}

/*.seg-rec-1 span.old-price {
  text-decoration: none;
  width: 50% ;
  }*/

.seg-rec-1 .slider .item-info .price {
  width: auto !important;
}

.seg-rec-1 .slider .item-info .rating {
  width: 100% !important;
  text-align: right;
  margin-top: 0px !important;
}

.seg-rec-1 .price span.old-price {
  font-size: 0.16rem;
  font-weight: 400 !important;
}

.seg-rec-1 .price span.old-price sup {
  font-size: 0.08rem;
}
.seg-rec-1 button.owl-prev {
  background-image: url("https://cdn.segmentify.com/712a4c66-49f9-4f28-8eea-2f49905851e8/arrows/left.svg") !important;
  border-radius: 2px !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.seg-rec-1 button.owl-next {
  background-image: url("https://cdn.segmentify.com/712a4c66-49f9-4f28-8eea-2f49905851e8/arrows/right.svg") !important;
  border-radius: 2px !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.seg-rec-1 button.owl-prev span,
.seg-rec-1 button.owl-next span {
  background-image: none !important;
}

#flix-privacy-policy {
  float: right;
  margin-top: 30px;
  margin-right: 20px;
}
.flix-policytext-container {
  padding: 55px 10px 10px;
}
#flix-privacy-policy-text {
  display: none;
  background-color: #f5f5f5;
  padding: 10px 15px;
  margin: 0;
  color: #676767;
  font-size: 11px;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
}
#flix-privacy-policy-text .flix-privacy-pointer {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #f5f5f5;
  position: absolute;
  top: -8px;
  right: 13px;
  z-index: 5;
}
</style>
