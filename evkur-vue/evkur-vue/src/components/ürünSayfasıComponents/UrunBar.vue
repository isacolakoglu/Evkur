<template>
  <div class="tab-links" :class="active">
    <h3
      class="tab-link"
      :class="active == 'firstDiv' ? 'active' : null"
      style="width: calc(25%)"
      @click="firstDiv"
    >
      <span> ÜRÜN BİLGİSİ </span>
    </h3>
    <h3
      class="tab-link"
      :class="active == 'secondDiv' ? 'active' : null"
      style="width: calc(25%)"
      @click="secondDiv"
    >
      <span> TAKSİT BİLGİLERİ </span>
    </h3>
    <h3
      class="tab-link"
      :class="active == 'threeDiv' ? 'active' : null"
      style="width: calc(25%)"
      @click="threeDiv"
    >
      <span> ÜRÜN YORUMLARI </span>
    </h3>
    <h3
      class="tab-link"
      :class="active == 'fourDiv' ? 'active' : null"
      style="width: calc(25%)"
      @click="fourDiv"
    >
      <span> KAMPANYALAR </span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "firstDiv",
    };
  },
  methods: {
    firstDiv() {
      this.active = "firstDiv";
    },
    secondDiv() {
      this.active = "secondDiv";
    },
    threeDiv() {
      this.active = "threeDiv";
    },
    fourDiv() {
      this.active = "fourDiv";
    },
  },
};
</script>

<style>
.firstDiv + .tab-items div:nth-child(1) {
  display: block !important;
  color: red;
}
.secondDiv + .tab-items div:nth-child(2) {
  display: block !important;
  color: red;
}
.threeDiv + .tab-items div:nth-child(3) {
  display: block !important;
  color: red;
}
.fourDiv + .tab-items div:nth-child(4) {
  display: block !important;
  color: red;
}
</style>
