<template>
  <TopBar></TopBar>
  <AppBar></AppBar>
  <Evkur></Evkur>
  <ContainerBar></ContainerBar>
  <section>
    <div id="product-list" class="container">
      <Filter
        @checkedModels="checkedModels"
        @checkedStorage="checkedStorage"
        @checkedCam="checkedCam"
        @checkedModelss="checkedModelss"
        @checkedRenk="checkedRenk"
        @checkedBellek="checkedBellek"
      ></Filter>
      <div class="product-list-container">
        <!-- <Categorytext></Categorytext> -->
        <KategoriOneCikanSlider></KategoriOneCikanSlider>
        <ProductListFilter></ProductListFilter>
        <Products
          :checkedModelsParent="checkedModelsParent"
          :checkedStorageParent="checkedStorageParent"
          :checkedCamParent="checkedCamParent"
          :checkedModelssParent="checkedModelssParent"
          :checkedRenkParent="checkedRenkParent"
          :checkedBellekParent="checkedBellekParent"
        ></Products>
        <Paging></Paging>
        <Categorytext></Categorytext> 
        <Wrapper></Wrapper>
      </div>
    </div>
  </section>

  <BottomBar></BottomBar>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import TopBar from "../components/TopBar.vue";
import Evkur from "../components/Evkur.vue";
import BottomBar from "../components/BottomBar.vue";
import ContainerBar from "../components/ContainerBar.vue";
import Filter from "../components/Filter.vue";
import KategoriOneCikanSlider from "../components/KategoriOneCikanSlider.vue";
import ProductListFilter from "../components/ProductListFilter.vue";
import Products from "../components/Products.vue";
import Paging from "../components/Paging.vue";
// import Categorytext from "../components/Categorytext.vue";
import Wrapper from "../components/Wrapper.vue";

export default {
  components: {
    AppBar,
    TopBar,
    Evkur,
    BottomBar,
    ContainerBar,
    Filter,
    KategoriOneCikanSlider,
    ProductListFilter,
    Products,
    Paging,
    // Categorytext,
    Wrapper,
  },
  data() {
    return {
      checkedModelsParent: [],
      checkedStorageParent: [],
      checkedCamParent: [],
      checkedModelssParent: [],
      checkedRenkParent: [],
      checkedBellekParent: [],
    };
  },
  methods: {
    checkedModels(item) {
      this.checkedModelsParent = [];
      this.checkedModelsParent.push(item);
    },
    checkedStorage(item) {
      this.checkedStorageParent = [];
      this.checkedStorageParent.push(item);
    },
    checkedCam(item) {
      this.checkedCamParent = [];
      this.checkedCamParent.push(item);
    },
    checkedModelss(item) {
      this.checkedModelssParent = [];
      this.checkedModelssParent.push(item);
    },
    checkedRenk(item) {
      this.checkedRenkParent = [];
      this.checkedRenkParent.push(item);
    },
    checkedBellek(item) {
      this.checkedBellekParent = [];
      this.checkedBellekParent.push(item);
    }
  },
};
</script>

<style>
.filter-items,
.filter-title {
  text-align: left;
}

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
    display: table;
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
section.breadcrumb-section {
  margin-top: 0;
  padding-top: 0.11rem;
  padding-bottom: 0.11rem;
  background-color: #e7e7e7;
}
section {
  margin-top: 0.5rem;
}
section.breadcrumb-section .container {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 2.5rem;
}

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
    display: table;
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
.seg-rec-1 .item-info .price span.old-price:before {
  height: 0.5px;
}
</style>
