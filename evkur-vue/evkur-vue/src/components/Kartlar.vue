<template>
  <div class="container ansf1">
    <div class="eylylyazi">
      <h2>
        <a
          style="font-size: inherit; text-decoration: none; color: #555555"
          href="https://www.evkur.com.tr/kampanyalar?banner=kmpBsl"
          >HAFTANIN FIRSATLARI</a
        >
        <a
          class="eylylyazilink"
          href="https://www.evkur.com.tr/kampanyalar?banner=kmpdesk"
          >Tüm Ürünler →</a
        >
      </h2>
      <a
        class="eylylyazilinkMobl"
        href="https://www.evkur.com.tr/kampanyalar?banner=kmpmobil"
        >Tüm Ürünler →</a
      >
    </div>
    <div class="nsnTum">
      <div class="firsatBtnSlide" style="max-width: 1200px; margin: auto">
        <div class="firsatbnrkp sp-custom-c88-330">
          <div
            class="scenekBtn onCKBtn"
            onclick="ktfiltrele(this,'onCK');"
            @click="onecikanlarData"
            :class="showData == 1 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Öne Çıkanlar</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'ceptel');"
            @click="telefonData"
            :class="showData == 2 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Telefon</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'blgsyr');"
            @click="bilgisayarData"
            :class="showData == 3 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Bilgisayar</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'elektr');"
            @click="elektronikData"
            :class="showData == 4 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Elektronik</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'evysm');"
            @click="evyasamData"
            :class="showData == 5 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Ev/Yaşam</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'kea');"
            @click="kucukevaletleriData"
            :class="showData == 6 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Küçük<br />Ev Aletleri</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'mtfk');"
            @click="mutfakData"
            :class="showData == 7 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Mutfak</div>
          </div>
          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'evtekst');"
            @click="evtekstiliData"
            :class="showData == 8 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Ev Tekstili</div>
          </div>

          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'kzmtk');"
            @click="kozmetikData"
            :class="showData == 9 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Kozmetik</div>
          </div>
          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'mbly');"
            @click="mobilyalarData"
            :class="showData == 10 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Mobilyalar</div>
          </div>
          <div
            class="scenekBtn"
            onclick="ktfiltrele(this,'mbly');"
            @click="motorluaraclarData"
            :class="showData == 11 ? 'scnkBtnAktif' : null"
          >
            <div class="mrkzlyc"></div>
            <div class="mrkzlnd">Motorlu Araçlar</div>
          </div>
        </div>
      </div>
      <div class="nsnIcrk">
        <div v-for="item in data" :key="item.id">
          <div data-trh="NOV 04, 2021 10:30:00" class="nsnKutucuk ceptel onCK accld">
            <a
              :href="'/UrunDetayi/' + item.statu + '/' + item.id"
              style="background-color: rgb(255, 255, 255)"
            >
              <div class="imgBitis" style="height: 166.979px"></div>
              <div class="urunIsim" style="visibility: visible">
                {{ item.name }}
              </div>
              <div class="urnFyt" style="visibility: visible">
                <div class="eskFyt">{{ item.oldPrice }}</div>
                <div class="ynFyt">{{ item.price }}</div>
              </div>
              <img
                :src="item.image[0]"
                alt="Trident A24 64GB Siyah Akıllı Telefon"
                data-sku="TR-A24-BLACK"
                class="canKutuImg"
                style="visibility: visible"
              />
              <canvas class="canKutu" width="288" height="483"> </canvas>
              <div class="syc" style="visibility: visible">
                <div class="countdown sny">
                  <div class="cmbr" style="height: 45.7604px">
                    <div class="zmnBlg gun" style="line-height: 43.7604px">3</div>
                  </div>
                  <div class="zmnAd">gün</div>
                </div>
                <div class="countdown sny">
                  <div class="cmbr" style="height: 45.7604px">
                    <div class="zmnBlg saat" style="line-height: 43.7604px">11</div>
                  </div>
                  <div class="zmnAd">saat</div>
                </div>
                <div class="countdown sny">
                  <div class="cmbr" style="height: 45.7604px">
                    <div class="zmnBlg dak" style="line-height: 43.7604px">3</div>
                  </div>
                  <div class="zmnAd">dakika</div>
                </div>
                <div class="countdown sny">
                  <div class="cmbr" style="height: 45.7604px">
                    <div class="zmnBlg sn" style="line-height: 43.7604px">55</div>
                  </div>
                  <div class="zmnAd">saniye</div>
                </div>
              </div>
            </a>
            <a
              class="buttonAlt"
              href="https://www.evkur.com.tr/cep-telefonlari?banner=kmpcuma2019"
            ></a>
            <div class="buttonAltKategori">Fırsat Ürünler</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      showData: 1,
    };
  },
  created() {
    this.onecikanlarData();
  },
  methods: {
    onecikanlarData() {
      this.showData = 1;
      fetch("http://localhost:3000/firsat")
        .then((response) => response.json())
        .then((data) => (this.data = data));
    },
    telefonData() {
      this.showData = 2;
      fetch("http://localhost:3000/cep-telefonlari")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    bilgisayarData() {
      this.showData = 3;
      fetch("http://localhost:3000/bilgisayar")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    elektronikData() {
      this.showData = 4;
      fetch("http://localhost:3000/elektronik")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    evyasamData() {
      this.showData = 5;
      fetch("http://localhost:3000/ev-yasam")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    kucukevaletleriData() {
      this.showData = 6;
      fetch("http://localhost:3000/kucukevaletleri")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    mutfakData() {
      this.showData = 7;
      fetch("http://localhost:3000/mutfak")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    evtekstiliData() {
      this.showData = 8;
      fetch("http://localhost:3000/evtekstili")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    kozmetikData() {
      this.showData = 9;
      fetch("http://localhost:3000/kozmetik")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    mobilyalarData() {
      this.showData = 10;
      fetch("http://localhost:3000/mobilyalar")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
    motorluaraclarData() {
      this.showData = 11;
      fetch("http://localhost:3000/motorluaraclar")
        .then((response) => response.json())
        .then((data) => (this.data = data.splice(0, 8)));
    },
  },
};
</script>

<style scoped>
.nsnIcrk {
  width: 100%;
  height: auto;
  display: table;
  margin: 2% 0 1% 0;
  padding: 0.0625% 0;
  position: relative;
  border-collapse: separate;
}
.accld {
  display: table-cell;
}
.nsnKutucuk {
  width: 25%;
  height: auto;
  border: solid 0px #000;
  border-radius: 0.16rem;
  display: table-cell;
  float: left;
  padding: 1%;
  vertical-align: middle;
  position: relative;
}
.nsnKutucuk a:first-child {
  border: solid 0px #fff;
  width: 100%;
  height: auto;
  display: block;
  text-decoration: none;
  position: relative;
  border-radius: 0.16rem;
  -moz-border-radius: 0.16rem;
  -webkit-border-radisue: 5.208%;
  background-color: #f9f9f9;
}
.imgBitis {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 666;
  width: 100%;
  height: auto;
  background-image: url(https://cdn.evkur.com.tr/Content/contentimg/ozelsf/kampanya-sona-erdi2019.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

element.style {
  visibility: visible;
}
.urunIsim {
  color: #fff !important;
}
.urunIsim {
  font-family: "Proxima";
  font-size: 0.19rem;
  max-width: 95%;
  margin: auto;
  text-align: center;
  color: white !important;
  font-weight: 600;
  display: block;
  position: absolute;
  z-index: 10;
  top: 4%;
  left: 0;
  right: 0;
  line-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.urnFyt {
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  z-index: 5;
  top: 17%;
  left: 0;
  right: 0;
  color: #fff !important;
  visibility: hidden;
}
.nsnKutucuk img {
  width: 100%;
  height: auto;
  display: block;
}

.canKutuImg {
  z-index: 2;
  max-width: 60%;
  height: auto;
  display: block;
  top: 27%;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  border-radius: 0.15rem;
  -webkit-border-radius: 0.15rem;
  -o-border-radius: 0.15rem;
}
.canKutu {
  display: block;
  position: relative;
  background-image: url(https://cdn.evkur.com.tr/Content/contentimg/ozelsf/13agustosbg2.png);
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  border: solid 0px #fff;
  border-radius: 0.15rem;
  width: 100%;
  height: auto;
  background-size: cover;
}
.syc {
  position: absolute;
  bottom: 8%;
  width: 81%;
  height: auto;
  display: flex;
  left: 0;
  right: 0;
  margin: 18px auto 12px auto;
  z-index: 555;
}
a.buttonAlt {
  position: absolute;
  bottom: 2%;
  width: 92%;
  z-index: 999;
  display: block;
  padding: 8% 0%;
  font-size: 16px !important;
}
.buttonAltKategori {
  z-index: 15;
  font-size: 0.16rem;
  bottom: 0%;
  width: 100%;
  display: block;
  position: absolute;
  padding: 8% 13% 8% 0%;
  color: #fff;
  text-align: center;
  font-family: "Proxima";
}
.avntjlr {
  max-width: 1210px;
  height: auto;
  display: flex;
  margin: 4% auto 0px auto;
}
.avntjlr div {
  margin: 5px 1.65% 5px 0;
}
.avntjlr div img {
  width: 100%;
  height: auto;
}
.avntjlr div:nth-child(1) {
  margin: 5px 1.65% 0px 0px;
}
.avntjlr div:nth-child(4) {
  margin: 5px 0px 0px 0px;
}
@media only screen and (max-width: 768px) {
  .avntjlr {
    display: block;
    width: 96%;
    margin: 7% auto 0px auto;
  }
  .avntjlr div:nth-child(1) {
    margin: 0px 1.65% 0px 0px;
  }
  .avntjlr div {
    width: calc(50% - 0.825%);
    display: inline-block;
    margin-top: 1.65%;
    margin-bottom: 1.65%;
  }
  .avntjlr div:nth-child(2n) {
    margin: 0px 0px 0px 0px;
  }
}
a.buttonAlt {
  position: absolute;
  bottom: 2%;
  width: 92%;
  z-index: 999;
  display: block;
  padding: 8% 0%;
  font-size: 16px !important;
}
.buttonAltKategori {
  z-index: 15;
  font-size: 0.16rem;
  bottom: 0%;
  width: 100%;
  display: block;
  position: absolute;
  padding: 8% 13% 8% 0%;
  color: #fff;
  text-align: center;
  font-family: "Proxima";
}
</style>
