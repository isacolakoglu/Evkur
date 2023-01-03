<template>
  <top-bar></top-bar> <!--HİÇ PEŞİNATSIZ KREDİ KARTSIZ 24 TAKSİK EVKUR'da-->
  <EvkurVue></EvkurVue> <!--EVKUR Logo + Arama Kutucuğu + Giriş yap / Üye ol butonu + Sepetim-->
  <app-bar> </app-bar> <!--Telefon, Bilgisayar, Elektronik, Ev/Yaşam, Elektrikli Ev Aletleri, Spor/OutDoor/Motor, Kozmetik/Kişisel Bakım/Aksesuar-->
  <TaksitOdemesi> </TaksitOdemesi> <!--Taksit Ödemelerinizi evkur.com.tr'den yapabilirsiniz. ŞİMDİ ÖDE-->
  <Section></Section> <!--Kaydırmalı Büyük Resimler-->
  <kartlar></kartlar> <!--Kaydırmalı Küçük Resimler-->
  <urunler-form></urunler-form> <!--Mavi rengi ile arkaplan oluşturulmuş ilk 6 resimler-->
  <urunler-form2></urunler-form2> <!--Karma Ürünler-->
  <kategoriler></kategoriler> <!--Telefon, Notebook, Televizyon, Akıllı Saat, Mobilya, Ev Yaşam, Spor Aletleri, Beyaz Eşya, Kozmetik-->
  <bottom-bar></bottom-bar> <!--BİZİ TAKİP EDİN-->
</template>

<script>
import TopBar from "../components/TopBar.vue";
import AppBar from "../components/AppBar.vue";
import TaksitOdemesi from "../components/TaksitOdemesi.vue";
import Kartlar from "../components/Kartlar.vue";
import BottomBar from "../components/BottomBar.vue";
import EvkurVue from "../components/Evkur.vue";
import UrunlerForm from "../components/UrunlerForm.vue";
import Section from "../components/Section.vue";
import Kategoriler from "../components/Kategoriler.vue";
import UrunlerForm2 from "../components/UrunlerForm2.vue";
import { db } from "./../db.js";

export default {
  name: "Anasayfa",
  components: {
    TopBar,
    AppBar,
    TaksitOdemesi,
    Kartlar,
    BottomBar,
    EvkurVue,
    Section,
    UrunlerForm,
    Kategoriler,
    UrunlerForm2,
  },
  created ()
  {
    db.collection("users")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          console.log(doc.data());
        });
      })
  }
};
</script>

<style></style>
