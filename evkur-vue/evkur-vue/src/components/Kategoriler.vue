<template>
  <div class="iconCont">
    <h3 class="iconConBslk">Kategoriler</h3>
    <div class="iconContWrp">
      <a
        href="/telefon"
        class="iconLnk"
      >
        <div class="iconBack">
          <div class="iconTxt">Telefon</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icntelefon.svg"
            alt=""
          />
        </div>
      </a>
      <a
        href="/bilgisayar"
        class="iconLnk"
      >
        <div class="iconBack">
          <div class="iconTxt">Notebook</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnlaptop.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/elektronik" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Televizyon</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icntelevizyon.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/giyilebilir-teknoloji" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Akıllı Saat</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnakillisaat.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/mobilyalar" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Mobilya</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnmobilya.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/ev-yasam" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Ev Yaşam</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnevyasam.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/spor-outdoor-motor" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Spor Aletleri</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnspor.svg"
            alt=""
          />
        </div>
      </a>
      <a href="/elektrikli-ev-aletleri" class="iconLnk">
        <div class="iconBack">
          <div class="iconTxt">Beyaz Eşya</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnbeyazesya.svg"
            alt=""
          />
        </div>
      </a>
      <a
        href="/kozmetikkisisel-bakimaksesuar"
        class="iconLnk"
      >
        <div class="iconBack">
          <div class="iconTxt">Kozmetik</div>
          <img
            class="iconImg"
            src="https://cdn.evkur.com.tr/Content/contentimg/ozelsf/icnkozmetik.svg"
            alt=""
          />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.iconBack {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconImg {
  padding: 8px 54px;
}
.iconCont {
  margin: 3% auto;
  padding: 0 0.2rem;
  max-width: 1200px;
}
.iconContWrp {
  margin-top: 0.5%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 1% 0;
}
.iconConBslk {
  font-size: 0.2rem;
  font-family: "Proxima";
  letter-spacing: 0px;
  color: #555;
  width: auto;
  float: left;
}
.iconLnk {
  border: 1px solid #d7d7d7;
  display: inline-block;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  max-width: 10.25%;
  height: auto;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  margin-top: 1%;
}

.iconKt {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
}

.iconTxt {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 6%;
  margin: auto;
  text-align: center;
  font-size: 0.12rem;
  color: #808080;
  font-family: "Proxima";
}
@media screen and (max-width: 900px) {
  .iconCont {
    padding: 0 0.2rem;
  }
  .iconLnk {
    max-width: 32%;
    width: 32%;
    margin-top: 2%;
  }
  .iconTxt {
    font-size: 0.24rem;
  }
  .iconConBslk {
    font-size: 0.26rem;
  }
}
@media screen and (max-width: 768px) {
  .iconConBslk {
    font-size: 0.55rem;
  }
}
</style>
