<template>
  <div class="products">
    <div class="product" v-for="item in data" :key="item.id">
      <a :href="'UrunDetayi/' + item.statu + '/' + item.id" class="image">
        <img :src="item.image" alt="" />
      </a>
      <div class="product-content">
        <h2>
          <a
            :href="'UrunDetayi/' + item.statu + '/' + item.id"
            class="name multiline-ellipsis"
            data-text="Samsung Galaxy A22 128GB Siyah Akıllı Telefon (A225F)"
          >
            {{ item.name }}</a
          >
        </h2>
        <div class="product-mobile-wrapper">
          <a
            :href="'UrunDetayi/' + item.statu + '/' + item.id"
            class="price"
            v-if="item.oldPrice"
          >
            <span class="old-price"> {{ item.oldPrice }} </span>
          </a>

          <a :href="'UrunDetayi/' + item.statu + '/' + item.id" class="price">
            <span> {{ item.price }}</span>
          </a>
        </div>
        <a :href="'UrunDetayi/' + item.statu + '/' + item.id" class="rating">
          <div class="stars-discount">
            <div class="stars" data-rating="0">
              <div class="star" v-for="item in item.stars" :key="item">
                <img
                  class="active"
                  src="https://cdn.evkur.com.tr/c/Content/Icons/star-icon.png"
                />
                <img
                  src="https://cdn.evkur.com.tr/c/Content/Icons/active-star-icon.png"
                />
              </div>
              <div class="star" v-for="item in 5 - item.stars" :key="item">
                <img src="https://cdn.evkur.com.tr/c/Content/Icons/star-icon.png" />
                <img
                  class="active"
                  src="https://cdn.evkur.com.tr/c/Content/Icons/active-star-icon.png"
                />
              </div>
            </div>
            <div class="discount-info vcenter" v-if="item.indirim">
              <span> {{ item.indirim }}</span>
            </div>
          </div>
          <div class="button red">
            <span>ÜRÜNE GİT</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./../db.js";

export default {
  props: [
    "checkedModelsParent",
    "checkedStorageParent",
    "checkedCamParent",
    "checkedModelssParent",
    "checkedRenkParent",
    "checkedBellekParent",
  ],
  data() {
    return {
      data: [],
      backup: [],
      storegeBackup: null,
    };
  },
  methods: {
    get() {
      var table = this.$route.path.replace("/", "");
      db.collection(table)
        .get()
        .then((x) => {
          x.docs.map((doc) => {
            this.data.push(doc.data());
            this.backup.push(doc.data());
          });
        });
      // fetch("http://localhost:3000/" + this.$route.path.replace("/", ""))
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.data = data;
      //     this.backup = data;
      //   });
    },
    filteredData() {
      this.data = this.backup;
      if (this.checkedModelsParent[0]?.length == []) {
        this.data = this.backup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedModelsParent.every((f) => f.includes(x.marka));
        });
      }
      this.storegeBackup = this.data;

      //checkedStorageParent
      if (this.checkedStorageParent[0]?.length == []) {
        this.data = this.storegeBackup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedStorageParent.every((f) => f.includes(x.depolama));
        });
      }
      // checkedCamParent
      if (this.checkedCamParent[0]?.length == []) {
        this.data = this.storegeBackup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedCamParent.every((f) => f.includes(x.kamera));
        });
      }
      if (this.checkedModelssParent[0]?.length == []) {
        this.data = this.storegeBackup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedModelssParent.every((f) => f.includes(x.model));
        });
      }
      if (this.checkedRenkParent[0]?.length == []) {
        this.data = this.storegeBackup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedRenkParent.every((f) => f.includes(x.renk));
        });
      }
      if (this.checkedBellekParent[0]?.length == []) {
        this.data = this.storegeBackup;
      } else {
        this.data = this.data.filter((x) => {
          return this.checkedBellekParent.every((f) => f.includes(x.bellek));
        });
      }
    },
  },
  created() {
    this.get();
  },
  watch: {
    checkedModelsParent() {
      this.filteredData();
    },
    checkedStorageParent() {
      this.filteredData();
    },
    checkedCamParent() {
      this.filteredData();
    },
    checkedModelssParent() {
      this.filteredData();
    },
    checkedRenkParent() {
      this.filteredData();
    },
    checkedBellekParent() {
      this.filteredData();
    },
  },
};
</script>

<style scoped>
/* .product {
  width: 50% !important;
} */
.product-mobile-wrapper {
  display: flex;
  align-items: center;
}
.stars-discount {
  display: flex;
}
</style>
