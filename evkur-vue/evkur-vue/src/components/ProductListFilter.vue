<template>
  <div class="product-list-filter" :class="value ? 'product-list-filter-list' : null">
    <div class="product-layout-type type-1">
      <span> GÖSTERİM: </span>
      <img
        class="type-1"
        src="https://cdn.evkur.com.tr/c/Content/Icons/layout-type-1.png"
        data-type="type-1"
      />
      <img
        class="type-1-active"
        src="https://cdn.evkur.com.tr/c/Content/Icons/layout-type-1-active.png"
        @click="listed"
      />
      <img
        class="type-2"
        src="https://cdn.evkur.com.tr/c/Content/Icons/layout-type-2.png"
        data-type="type-2"
        @click="listed1"
      />
      <img
        class="type-2-active"
        src="https://cdn.evkur.com.tr/c/Content/Icons/layout-type-2-active.png"
      />
    </div>
    <div class="product-sort">
      <span> SIRALAMA: </span>
      <div class="product-sort-select">
        <select
          data-select2-id="1"
          tabindex="-1"
          class="select2-hidden-accessible"
          aria-hidden="true"
        >
          <option value="0" selected="selected" data-select2-id="3">
            Sizin için seçilenler
          </option>
          <option value="20">Fiyata göre artan</option>
          <option value="10">Fiyata göre azalan</option>
          <option value="30">A'dan Z'ye</option>
          <option value="40">Z'den A'ya</option></select
        ><span
          class="select2 select2-container select2-container--default"
          dir="ltr"
          data-select2-id="2"
          style="width: 100%"
          ><span class="selection"
            ><span
              class="select2-selection select2-selection--single"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabindex="0"
              aria-labelledby="select2-5uf4-container"
              ><span
                class="select2-selection__rendered"
                id="select2-5uf4-container"
                role="textbox"
                aria-readonly="true"
                title="
                        Sizin için seçilenler
                    "
              >
                Sizin için seçilenler </span
              ><span class="select2-selection__arrow" role="presentation"
                ><b role="presentation"></b></span></span></span
          ><span class="dropdown-wrapper" aria-hidden="true"></span
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    };
  },
  methods: {
    listed() {
      this.value = false;
    },
    listed1() {
      this.value = true;
    },
  },
};
</script>

<style>
.product-list-filter-list + .products .product {
  width: 50% !important;
}
</style>
