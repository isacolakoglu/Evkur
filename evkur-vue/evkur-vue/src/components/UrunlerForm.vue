<template>
  <div class="srlWrp">
    <!--URUNLER FORMUNUN TÜM KAPSADIĞI ALAN -->
    <div class="container srlItem" style="order: 1">
      <!-- ALANIN İÇİNDE BİR ALAN DAHA. -->
      <div class="tumDlb">
        <!-- RESMİN VE SAĞDAKİ 6 ÜRÜNÜN OLDUĞU ALANDIR. -->
        <div class="anaBnr">
          <!--SOLDAKİ RESMİNE AİT OLDUĞU ALANDIR. -->
          <a
            href="https://www.evkur.com.tr/elektrikli-supurgeler-2?banner=6modulsupurge13102021"
          >
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/supurgelerkmpekim2021-desktop.png"
              alt="Tüm Süpürgeler 24 aya varan taksitlerle"
              class="bykvr"
            />
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/supurgelerkmpekim2021-mobile.png"
              alt="Tüm süpürge modellerinde 24 aya varan taksit imkanı"
              class="mblvr"
            />
          </a>
        </div>
        <div class="anaicerik">
          <!---------SAĞDAKİ 6 ADET ÜRÜNÜN OLDUĞU ALANDIR. ---------->

          <!-------------------------1.ÜRÜN-------------------------------------->
          <!-------------------------1.ÜRÜN-------------------------------------->
          <!-------------------------1.ÜRÜN-------------------------------------->

          <div v-for="item in data" :key="item.id">
            <!--------------ÜRÜNÜN BAŞLANGIÇ SAYFASI------->
            <a :href="'/UrunDetayi/' + item.statu + '/' + item.id">&nbsp;</a>

            <div class="altiliUrn">
              <!-----ÜRÜNÜN ADI, FİYATI, TAKSİT YAZISI KISMI BURADAN BAŞLIYOR--------->
              <div class="altiliUrnAd">
                {{ item.name }}
              </div>
              <div class="altiliUrnFyt">{{ item.price }}</div>
              <div class="altiliUrnTaksit">{{ item.label }}</div>
            </div>

            <!-------------ÜRÜNÜN RESMİ BURADADIR.---------->
            <img
              :src="item.image"
              class="urRes"
              alt="Philips XB9125/07 Marathon Ultimate Toz Torbasız Süpürge Siyah "
            />
            <canvas class="altiliCan" width="266" height="229"></canvas>
          </div>
        </div>
      </div>
      <div style="width: 100; height: 10px; display: block; clear: both">&nbsp;</div>
    </div>

    <div class="container srlItem" style="order: 2">
      <div class="tumDlb">
        <div class="anaBnr">
          <a
            href="https://www.evkur.com.tr/televizyonlar?banner=6modultelevizyonlar14092021"
          >
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/yatas-projects-sierrakasim2021-desktop.png"
              alt="Tüm Televizyon Modelleri 24 aya varan taksitlerle"
              class="bykvr"
            />
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/yatas-projects-sierrakasim2021-desktop.png"
              alt="Tüm Televizyon Modelleri 24 aya varan taksit imkanı"
              class="mblvr"
            />
          </a>
        </div>
        <div class="anaicerik">
          <div v-for="item in secondData" :key="item.id">
            <a :href="'/UrunDetayi/' + item.statu + '/' + item.id">&nbsp;</a>
            <div class="altiliUrn">
              <div class="altiliUrnAd">
                {{ item.name }}
              </div>
              <div class="altiliUrnFyt">{{ item.price }}</div>
              <div class="altiliUrnTaksit">{{ item.label }}</div>
            </div>
            <img
              :src="item.image"
              class="urRes"
              alt="Onvo OV32F153 82 Cm Frameless HD Ready Android Smart Dahili Uydu Alıcılı Led Tv + 3 Yıl (2+1) Üretici Garantili "
            />
            <canvas class="altiliCan" width="266" height="229"></canvas>
          </div>
        </div>
      </div>
      <div style="width: 100; height: 10px; display: block; clear: both">&nbsp;</div>
    </div>

    <div class="container srlItem" style="order: 3">
      <div class="tumDlb">
        <div class="anaBnr">
          <a href="https://www.evkur.com.tr/tabletler?banner=6modultabletler08092021">
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/tabletler-kmpeylul2021-desktop.jpg"
              alt="Tabletler 6 aya varan taksitlerle"
              class="bykvr"
            />
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/tabletler-kmpeylul2021-mobile.jpg"
              alt="Tüm Tablet modellerinde 6 aya varan taksit imkanı"
              class="mblvr"
            />
          </a>
        </div>
        <div class="anaicerik">
          <div v-for="item in thirdData" :key="item.id">
            <a :href="'/UrunDetayi/' + item.statu + '/' + item.id">&nbsp;</a>
            <div class="altiliUrn">
              <div class="altiliUrnAd">
                {{ item.name }}
              </div>
              <div class="altiliUrnFyt">{{ item.price }}</div>
              <div class="altiliUrnTaksit">{{ item.label }}</div>
            </div>
            <img
              :src="item.image"
              class="urRes"
              alt="Hometech ALFA-8SL QuadCore MT8167 1.3Ghz İşlemci 1Gb Ram 16Gb Hafıza Wi-Fi 8inç Ekran Android Gümüş Tablet "
            />
            <canvas class="altiliCan" width="266" height="229"></canvas>
          </div>
        </div>
      </div>
      <div style="width: 100; height: 10px; display: block; clear: both">&nbsp;</div>
    </div>

    <div class="container srlItem" style="order: 4">
      <div class="tumDlb">
        <div class="anaBnr">
          <a
            href="https://www.evkur.com.tr/koltuk-takimlari?banner=6modulkoltuktakimlari28102021"
          >
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/koltuk-takimlari-kmptemmuz2021-desktop.png"
              alt="Tüm Koltuk Takımları 24 aya varan taksitlerle"
              class="bykvr"
            />
            <img
              src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/koltuk-takimlari-kmptemmuz2021-mobile.png"
              alt="Kıyma oltuk Takımlarında 24 aya varan taksit imkanı"
              class="mblvr"
            />
          </a>
        </div>
        <div class="anaicerik">
          <div v-for="item in fourthData" :key="item.id">
            <a :href="'/UrunDetayi/' + item.statu + '/' + item.id">&nbsp;</a>
            <div class="altiliUrn">
              <div class="altiliUrnAd">{{ item.model }}<br />{{ item.name }}</div>
              <div class="altiliUrnFyt">{{ item.price }}</div>
              <div class="altiliUrnTaksit">{{ item.label }}</div>
            </div>
            <img
              :src="item.image"
              class="urRes"
              alt="Letto Koltuk Takımı Krem-Antrasit LET-KOT-2"
              style="top: 10%"
            />
            <canvas class="altiliCan" width="266" height="229"></canvas>
          </div>
        </div>
      </div>
      <div style="width: 100; height: 10px; display: block; clear: both">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { db } from "./../db.js";
export default {
  data() {
    return {
      data: [],
      secondData: [],
      thirdData: [],
      fourthData: [],
    };
  },
  created() {
    db.collection("supurgeler")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.data.push(doc.data());
        });
      });
    db.collection("supurgeler")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.secondData.push(doc.data());
        });
      });
    db.collection("tabletler")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.thirdData.push(doc.data());
        });
      });
    db.collection("koltuktakimi")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.fourthData.push(doc.data());
        });
      });

    // fetch("http://localhost:3000/supurgeler")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.data = data;
    //   });
    // fetch("http://localhost:3000/yatakodasitakimi")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.secondData = data;
    //   });
    // fetch("http://localhost:3000/tabletler")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.thirdData = data;
    //   });
    // fetch("http://localhost:3000/koltuktakimi")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.fourthData = data;
    //   });
  },
};
</script>

<style scoped>
.tumDlb {
  float: left;
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-top: 25px;
}
.tumDlb img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: auto;
  padding: 0;
}
.tumDlb img.mblvr {
  display: none;
}
.tumDlb img.bykvr {
  display: block;
}
.anaBnr {
  width: calc(33.6%);
  height: auto;
  display: block;
  float: left;
}
.anaicerik {
  width: calc(66%);
  height: auto;
  display: block;
  float: left;
}
.anaicerik div {
  float: left;
  width: 33.33%;
  border: 1px solid #fff;
  position: relative;
}
.anaicerik div a {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 200;
}
.anaicerik div:nth-child(1):after,
.anaicerik div:nth-child(2):after,
.anaicerik div:nth-child(3):after,
.anaicerik div:nth-child(4):after,
.anaicerik div:nth-child(5):after {
  content: "";
  position: absolute;
  z-index: 100;
}
.anaicerik div:nth-child(1):after {
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  right: 0px;
  bottom: 0px;
  height: 65%;
  width: 82%;
}
.anaicerik div:nth-child(2):after {
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  right: 0;
  height: 65%;
  bottom: 0;
  width: 100%;
}
.anaicerik div:nth-child(3):after {
  border-bottom: 1px solid #e7e7e7;
  left: -2px;
  width: 90%;
  bottom: 0;
  height: 1px;
}
.anaicerik div:nth-child(4):after {
  border-right: 1px solid #e7e7e7;
  right: 0;
  top: -3px;
  height: 62%;
  width: 100%;
}
.anaicerik div:nth-child(5):after {
  border-right: 1px solid #e7e7e7;
  right: 0;
  top: -3px;
  height: 62%;
}
.tumDlb.ikiliDlb .anaicerik div {
  width: 50%;
  position: relative;
}
.tumDlb.ikiliDlb .anaicerik div:nth-child(1):after {
  border-bottom: 0px solid #fff;
  position: absolute;
  bottom: 20%;
  height: 58.78%;
}
.tumDlb.ikiliDlb .anaicerik div:nth-child(2):after {
  border-bottom: 0px solid #fff;
  border-right: 0px solid #fff;
}
.tumDlb.drtlu .anaicerik div {
  width: 50%;
}
.tumDlb.drtlu .anaicerik div:nth-child(2):after {
  border-right: 0px solid #fff;
}
.tumDlb.drtlu .anaicerik div:nth-child(3):after {
  border-right: 1px solid #e7e7e7;
}
.tumDlb.drtlu .anaicerik div:nth-child(4):after {
  border-right: 0px solid #fff;
  right: 0;
  top: -3px;
  height: 62%;
  width: 100%;
}
.altiliUrn {
  position: absolute !important;
  top: 63%;
  left: 0%;
  right: 0%;
  z-index: 15;
  width: 100% !important;
  height: 36%;
  display: block;
  text-align: center;
  text-decoration: none;
  border: 0 !important;
}
.altiliUrn:after,
.altiliUrnAd:after,
.altiliUrnFyt:after,
.altiliUrnTaksit:after {
  border: 0px !important;
  display: none;
}
.altiliUrnAd {
  width: 100% !important;
  font-size: 0.13rem;
  font-family: "Proxima";
  text-decoration: none;
  font-weight: 600;
  border: 0 !important;
  position: absolute !important;
  top: 0;
  color: #555;
  border: 0px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.altiliUrnFyt {
  font-size: 0.21rem;
  font-family: "Proxima";
  text-decoration: none;
  font-weight: bold;
  border: 0 !important;
  color: #ed2124 !important;
  width: 100% !important;
  position: absolute !important;
  top: 40%;
  border: 0px !important;
}
.altiliUrnTaksit {
  font-size: 0.13rem;
  font-family: "Proxima";
  font-weight: 500;
  width: 100% !important;
  color: #9d9d9d;
  position: absolute !important;
  bottom: 7%;
  border: 0px !important;
}
@media only screen and (max-width: 1024px) {
  .altiliUrnAd {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
@media only screen and (max-width: 768px) {
  .anaBnr,
  .anaicerik {
    width: 100%;
  }
  .tumDlb img {
    width: 100%;
  }
  .anaicerik div {
    width: 50%;
  }
  .anaicerik div:nth-child(2):after {
    width: 82%;
    right: auto;
    left: 0px;
    border-right: 0px;
  }

  .anaicerik div:nth-child(3):after {
    border-right: 1px solid #e7e7e7;
    right: 0px;
    left: auto;
    height: 100%;
    width: 82%;
  }
  .anaicerik div:nth-child(4):after {
    border-right: 0px;
    border-bottom: 1px solid #e7e7e7;
    top: auto;
    bottom: 0px;
    width: 82%;
    left: 0px;
    right: auto;
  }
  .tumDlb img.mblvr {
    display: block;
  }
  .tumDlb img.bykvr {
    display: none;
  }
  .altiliUrnAd {
    font-size: 0.3rem;
  }
  .altiliUrnFyt {
    font-size: 0.41rem;
    margin-top: 3%;
  }
  .altiliUrnTaksit {
    font-size: 0.28rem;
    bottom: 0%;
  }
}
.altiliCan {
  position: relative;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
}
.tumDlb img.urRes {
  max-width: 51%;
  position: absolute;
  top: 1.6%;
  left: 0;
  right: 0;
  margin: auto;
}
@media only screen and (max-width: 480px) {
  /*.anaicerik div:after{
  
    }
  
.anaicerik div{display:block;width:85%;height:auto;float:none;border-top:1px solid #e7e7e7;margin:3px auto !important;}
.anaicerik div:nth-child(1){border-top:0px solid #ffff;}
 .tumDlb.ikiliDlb .anaicerik div
  {
    width:90%;
  }*/
}
</style>
