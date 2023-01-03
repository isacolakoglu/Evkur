<template>
  <div class="tab-item" v-for="item in filted" :key="item.id">
    <div class="product-description-text">
      <div class="product-detail-specifications-title">ÜRÜN ÖZELLİKLERİ</div>
      <table class="product-detail-specifications">
        <tbody>
          <tr>
            <td>Marka</td>
            <td>{{ item.marka }}</td>
          </tr>
          <tr>
            <td>Model</td>
            <td>{{ item.model }}</td>
          </tr>
          <tr>
            <td>Ekran Boyutu</td>
            <td>{{ item.ekranBoyutu }}</td>
          </tr>
          <tr>
            <td>Ekran Boyutu (İnç)</td>
            <td>{{ item.ekranBoyutu }}</td>
          </tr>
          <tr>
            <td>Ekran Tipi</td>
            <td>{{ item.ekranTipi }}</td>
          </tr>
          <tr>
            <td>Bellek (RAM)</td>
            <td>{{ item.bellek }}</td>
          </tr>
          <tr>
            <td>Depolama</td>
            <td>{{ item.depolama }}</td>
          </tr>
          <tr>
            <td>İşlemci Hızı</td>
            <td>{{ item.islemciHizi }}</td>
          </tr>
          <tr>
            <td>Ekran Çözünürlüğü</td>
            <td>{{ item.ekranCozunurlugu }}</td>
          </tr>
          <tr>
            <td>Dokunmatik Ekran</td>
            <td>{{ item.dokunmatikEkran }}</td>
          </tr>
          <tr>
            <td>Kamera</td>
            <td>{{ item.kamera }}</td>
          </tr>
          <tr>
            <td>Ön Kamera</td>
            <td>{{ item.onKamera }}</td>
          </tr>
          <tr>
            <td>Ön Kamera Çözünürlüğü</td>
            <td>{{ item.onKameraCozunurlugu }}</td>
          </tr>
          <tr>
            <td>Flaş</td>
            <td>{{ item.flas }}</td>
          </tr>
          <tr>
            <td>Bluetooth</td>
            <td>{{ item.bluetooth }}</td>
          </tr>
          <tr>
            <td>GPS</td>
            <td>{{ item.GPS }}</td>
          </tr>
          <tr>
            <td>Wi-Fi</td>
            <td>Var</td>
          </tr>
          <tr>
            <td>Parmak İzi Okuyucu</td>
            <td>{{ item.ParmakiziOkuyucu }}</td>
          </tr>
          <tr>
            <td>4.5G Desteği</td>
            <td>{{ item.GDestegi }}</td>
          </tr>
          <tr>
            <td>Hafıza Kartı Desteği</td>
            <td>{{ item.HafizaKartiDestegi }}</td>
          </tr>
          <tr>
            <td>Çift Sim</td>
            <td>{{ item.ciftsim }}</td>
          </tr>
          <tr>
            <td>İşletim Sistemi</td>
            <td>{{ item.isletimSistemi }}</td>
          </tr>
          <tr>
            <td>Ürün Çeşidi</td>
            <td>{{ item.urunCesidi }}</td>
          </tr>
          <tr>
            <td>Renk</td>
            <td>{{ item.renk }}</td>
          </tr>
          <tr>
            <td>Üretici Garantisi (yıl)</td>
            <td>{{ item.ureticiGarantisi }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      filted: null,
    };
  },
  created() {
    fetch("http://localhost:3000/" + this.$route.params.data)
      .then((response) => response.json())
      .then((data) => (this.data = data));

    setTimeout(() => {
      this.filted = this.data.filter((x) => x.id == this.$route.params.id);
    }, 500);
  },
};
</script>

<style></style>
