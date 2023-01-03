<template>
  <div class="filter-container" data-productcount="68">
    <a href="javascript:void(0)" class="filter-close-icon mobile">
      <span></span>
    </a>
    <form
      action="/"
      ajaxcallname="filterProductList"
      class="validate product-list-filter-form"
      method="post"
      novalidate="novalidate"
    >
      <!-----------------------------TELEFON MARKA-------------------->
      <!-----------------------------TELEFON MARKA-------------------->
      <!-----------------------------TELEFON MARKA-------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Marka</div>
        <div class="filter-items">
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1069-1264"
              value="Samsung"
              v-model="checkedModels"
            />
            <label for="spec-1069-1264">
              Samsung
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1069-1276"
              value="Trident"
              v-model="checkedModels"
            />
            <label for="spec-1069-1276">
              Trident
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1069-39948"
              value="Oppo"
              v-model="checkedModels"
            />
            <label for="spec-1069-39948">
              Oppo
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1069-44816"
              value="Realme"
              v-model="checkedModels"
            />
            <label for="spec-1069-44816">
              Realme
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1069-31663"
              value="Xiaomi"
              v-model="checkedModels"
            />
            <label for="spec-1069-31663">
              Xiaomi
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1069-26094"
              value="Hiking"
              v-model="checkedModels"
            />
            <label for="spec-1069-26094">
              Hiking
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1069-48574"
              value="Tecno"
              v-model="checkedModels"
            />
            <label for="spec-1069-48574">
              Tecno
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1069-43809"
              value="Tcl"
              v-model="checkedModels"
            />
            <label for="spec-1069-43809">
              Tcl
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1069-1772"
              value="Alcatel"
              v-model="checkedModels"
            />
            <label for="spec-1069-1772">
              Alcatel
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem">{{ hideText }} </span>
            <span></span>
          </div>
        </div>
      </div>
      <!-----------------------------Ürün ÇEŞİDİ-------------------->
      <!-----------------------------Ürün ÇEŞİDİ-------------------->
      <!-----------------------------Ürün ÇEŞİDİ-------------------->
      <div
        class="filter specification-filter"
        v-if="$route.path == '/sarj-aletleri-ve-kablolar'"
      >
        <div class="filter-title">Ürün Çeşidi</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-1144-38800" value="38800" />
            <label for="spec-1144-38800">
              Şarj Kablosu
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1144-35610" value="35610" />
            <label for="spec-1144-35610">
              Şarj Cihazı
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1144-35614" value="35614" />
            <label for="spec-1144-35614">
              Şarj Standı
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1144-42098" value="42098" />
            <label for="spec-1144-42098">
              Hızlı Şarj Aleti
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1144-36484" value="36484" />
            <label for="spec-1144-36484">
              Usb Type C
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item">
            <span> Daha fazla göster </span>
            <span> Daha az göster </span>
          </div>
        </div>
      </div>

      <!---------------------------DEPOLAMA------------------------->
      <!---------------------------DEPOLAMA------------------------->
      <!---------------------------DEPOLAMA------------------------->
      <div class="filter specification-filter" v-if="$route.path == '/cep-telefonlari'">
        <div class="filter-title">Depolama</div>
        <div class="filter-items">
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-10-1483"
              value="128 GB"
              v-model="checkedStorage"
            />
            <label for="spec-10-1483">
              128 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-10-7563"
              value="64 GB"
              v-model="checkedStorage"
            />
            <label for="spec-10-7563">
              64 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-10-7534"
              value="32 GB"
              v-model="checkedStorage"
            />
            <label for="spec-10-7534">
              32 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-10-23083"
              value="256 GB"
              v-model="checkedStorage"
            />
            <label for="spec-10-23083">
              256 GB
              <span>KALDIR</span>
            </label>
          </div>
        </div>
      </div>

      <!---------------------------TELEFON MODEL------------------------->
      <!---------------------------TELEFON MODEL------------------------->
      <!---------------------------TELEFON MODEL------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Model</div>
        <div class="filter-items">
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1284-47451"
              value="Reno 5 Lite"
              v-model="checkedModelss"
            />
            <label for="spec-1284-47451">
              Reno 5 Lite
              <span>KALDIR</span>
            </label>
          </div>

          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1284-48603"
              value="A25"
              v-model="checkedModelss"
            />
            <label for="spec-1284-48603">
              A25
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1284-49860"
              value="Galaxy A32 (A325F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-49860">
              Galaxy A32 (A325F)
              <span>KALDIR</span>
            </label>
          </div>

          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1284-49886"
              value="Galaxy A52 (A525F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-49886">
              Galaxy A52 (A525F)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-1284-51191"
              value="Galaxy Z Flip3"
              v-model="checkedModelss"
            />
            <label for="spec-1284-51191">
              Galaxy Z Flip3
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-51883"
              value="A26"
              v-model="checkedModelss"
            />
            <label for="spec-1284-51883">
              A26
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-48420"
              value="Galaxy A12 (A125F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-48420">
              Galaxy A12 (A125F)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-49079"
              value="Galaxy A02 (A022F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-49079">
              Galaxy A02 (A022F)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-51189"
              value="Galaxy Z Fold3 (F926BZ)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-51189">
              Galaxy Z Fold3 (F926BZ)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-51817"
              value="Redmi Note 10S"
              v-model="checkedModelss"
            />
            <label for="spec-1284-51817">
              Redmi Note 10S
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-47902"
              value="A24"
              v-model="checkedModelss"
            />
            <label for="spec-1284-47902">
              A24
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-48575"
              value="Pova Ld7"
              v-model="checkedModelss"
            />
            <label for="spec-1284-48575">
              Pova Ld7
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-48580"
              value="Spark 6"
              v-model="checkedModelss"
            />
            <label for="spec-1284-48580">
              Spark 6
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50208"
              value="10 SE"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50208">
              10 SE
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50361"
              value="A74"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50361">
              A74
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50465"
              value="A15s"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50465">
              A15s
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50954"
              value="C25"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50954">
              C25
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-51704"
              value="Poco X3 Pro"
              v-model="checkedModelss"
            />
            <label for="spec-1284-51704">
              Poco X3 Pro
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-52196"
              value="C25s"
              v-model="checkedModelss"
            />
            <label for="spec-1284-52196">
              C25s
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-52200"
              value="A16"
              v-model="checkedModelss"
            />
            <label for="spec-1284-52200">
              A16
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-52204"
              value="C11"
              v-model="checkedModelss"
            />
            <label for="spec-1284-52204">
              C11
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-46301"
              value="Galaxy Z Flip (F700F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-46301">
              Galaxy Z Flip (F700F)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-46309"
              value="Galaxy A11 (A115F)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-46309">
              Galaxy A11 (A115F)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-46935"
              value="3X 2020"
              v-model="checkedModelss"
            />
            <label for="spec-1284-46935">
              3X 2020
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-48731"
              value="Galaxy S21 (G991B)"
              v-model="checkedModelss"
            />
            <label for="spec-1284-48731">
              Galaxy S21 (G991B)
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50193"
              value="Reno 5 Lite"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50193">
              Reno 5 Lite
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50266"
              value="1SE 2020"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50266">
              1SE 2020
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-50366"
              value="C21"
              v-model="checkedModelss"
            />
            <label for="spec-1284-50366">
              C21
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide1 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-1284-52132"
              value="L7"
              v-model="checkedModelss"
            />
            <label for="spec-1284-52132">
              L7
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem1">{{ hideText1 }} </span>
            <span></span>
          </div>
        </div>
      </div>

      <!---------------------------KAMERA------------------------->
      <!---------------------------KAMERA------------------------->
      <!---------------------------KAMERA------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Kamera</div>
        <div class="filter-items">
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-13-47453"
              value="8MP+16MP"
              v-model="checkedCam"
            />
            <label for="spec-13-47453">
              8MP+16MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-13-48579"
              value="13 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-48579">
              13 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-13-50363"
              value="48 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-50363">
              48 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-13-44983"
              value="64 MP+12 MP+5 MP+5 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-44983">
              64 MP+12 MP+5 MP+5 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-13-46942"
              value="48 MP+5 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-46942">
              48 MP+5 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-47012"
              value="48 MP+8 MP+5 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-47012">
              48 MP+8 MP+5 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-49862"
              value="64 MP+8 MP+5 MP+5 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-49862">
              64 MP+8 MP+5 MP+5 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-51194"
              value="12MP+12MP"
              v-model="checkedCam"
            />
            <label for="spec-13-51194">
              12MP+12MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-51884"
              value="48 MP+8 MP+0.3 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-51884">
              48 MP+8 MP+0.3 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-43341"
              value="48 MP+8 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-43341">
              48 MP+8 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-43661"
              value="64 MP+8 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-43661">
              64 MP+8 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-47190"
              value="12MP+12MP+12MP"
              v-model="checkedCam"
            />
            <label for="spec-13-47190">
              12MP+12MP+12MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-49081"
              value="13 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-49081">
              13 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-37377"
              value="13 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-37377">
              13 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-48104"
              value="16 MP+5 MP+16 MP+5 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-48104">
              16 MP+5 MP+16 MP+5 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-48581"
              value="16 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-48581">
              16 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-50210"
              value="48 MP+5 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-50210">
              48 MP+5 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-36440"
              value="12 MP+12 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-36440">
              12 MP+12 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-45225"
              value="13MP+2MP+5MP"
              v-model="checkedCam"
            />
            <label for="spec-13-45225">
              13MP+2MP+5MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-48734"
              value="12 MP+12 MP+64 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-48734">
              12 MP+12 MP+64 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-49162"
              value="13 MP+2 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-49162">
              13 MP+2 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-13-50268"
              value="13 MP+5 MP+2 MP"
              v-model="checkedCam"
            />
            <label for="spec-13-50268">
              13 MP+5 MP+2 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide2 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-13-52133" value="8 MP" v-model="checkedCam" />
            <label for="spec-13-52133">
              8 MP
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem2">{{ hideText2 }} </span>
            <span></span>
          </div>
        </div>
      </div>

      <!---------------------------EKRAN BOYUTU(İNÇ)------------------------->
      <!---------------------------EKRAN BOYUTU(İNÇ)------------------------->
      <!---------------------------EKRAN BOYUTU(İNÇ)------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Ekran Boyutu (İnç)</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-1919-8834" value="8834" />
            <label for="spec-1919-8834">
              6"-7"
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1919-41910" value="41910" />
            <label for="spec-1919-41910">
              7"-8"
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-1919-8833" value="8833" />
            <label for="spec-1919-8833">
              5"-6"
              <span>KALDIR</span>
            </label>
          </div>
        </div>
      </div>

      <!-------------------------------RENK------------------------------->
      <!-------------------------------RENK------------------------------->
      <!-------------------------------RENK------------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Renk</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-19-1527" value="Mavi" v-model="checkedRenk" />
            <label for="spec-19-1527">
              Mavi
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-19-38" value="Siyah" v-model="checkedRenk" />
            <label for="spec-19-38">
              Siyah
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-19-2172"
              value="Beyaz"
              v-model="checkedRenk"
            />
            <label for="spec-19-2172">
              Beyaz
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-19-2667" value="Gri" v-model="checkedRenk" />
            <label for="spec-19-2667">
              Gri
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-19-3290"
              value="Yeşil"
              v-model="checkedRenk"
            />
            <label for="spec-19-3290">
              Yeşil
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-19-3134" value="Mor" v-model="checkedRenk" />
            <label for="spec-19-3134">
              Mor
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-36352"
              value="Menekşe"
              v-model="checkedRenk"
            />
            <label for="spec-19-36352">
              Menekşe
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-2051"
              value="Gümüş"
              v-model="checkedRenk"
            />
            <label for="spec-19-2051">
              Gümüş
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-1488"
              value="Kırmızı"
              v-model="checkedRenk"
            />
            <label for="spec-19-1488">
              Kırmızı
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-17925"
              value="Parlak Siyah"
              v-model="checkedRenk"
            />
            <label for="spec-19-17925">
              Parlak Siyah
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-19-3588" value="Bej" v-model="checkedRenk" />
            <label for="spec-19-3588">
              Bej
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-39954"
              value="Yıldız Mavisi"
              v-model="checkedRenk"
            />
            <label for="spec-19-39954">
              Yıldız Mavisi
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-48415"
              value="Koyu Mavi"
              v-model="checkedRenk"
            />
            <label for="spec-19-48415">
              Koyu Mavi
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-48797"
              value="Yıldızlı Siyahı"
              v-model="checkedRenk"
            />
            <label for="spec-19-48797">
              Yıldızlı Siyahı
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-50233"
              value="Kutup Gecesi"
              v-model="checkedRenk"
            />
            <label for="spec-19-50233">
              Kutup Gecesi
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide3 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-19-7286"
              value="Turkuaz"
              v-model="checkedRenk"
            />
            <label for="spec-19-7286">
              Turkuaz
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem3">{{ hideText3 }} </span>
            <span></span>
          </div>
        </div>
      </div>

      <!---------------------------EKRAN TİPİ------------------------->
      <!---------------------------EKRAN TİPİ------------------------->
      <!---------------------------EKRAN TİPİ------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Ekran Tipi</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-52-3650" value="3650" />
            <label for="spec-52-3650">
              IPS LCD
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-52-7706" value="7706" />
            <label for="spec-52-7706">
              Super AMOLED
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-52-1660" value="1660" />
            <label for="spec-52-1660">
              PLS TFT LCD
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-52-1673" value="1673" />
            <label for="spec-52-1673">
              AMOLED
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-52-22426" value="22426" />
            <label for="spec-52-22426">
              HD+
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-39771" value="39771" />
            <label for="spec-52-39771">
              FULL HD+
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-40276" value="40276" />
            <label for="spec-52-40276">
              Dynamic AMOLED
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-1676" value="1676" />
            <label for="spec-52-1676">
              TFT LCD
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-41913" value="41913" />
            <label for="spec-52-41913">
              Dinamik AMOLED
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-22206" value="22206" />
            <label for="spec-52-22206">
              FULL HD
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-42506" value="42506" />
            <label for="spec-52-42506">
              IPS
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide4 ? 'filter-item-hideable' : none">
            <input type="checkbox" id="spec-52-44887" value="44887" />
            <label for="spec-52-44887">
              Dinamik AMOLED 2X
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem4">{{ hideText4 }} </span>
            <span></span>
          </div>
        </div>
      </div>

      <!--------------------------ÇİFT SİM------------------------->
      <!--------------------------ÇİFT SİM------------------------->
      <!--------------------------ÇİFT SİM------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Çift Sim</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-54-167" value="167" />
            <label for="spec-54-167">
              Var
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-54-168" value="168" />
            <label for="spec-54-168">
              Yok
              <span>KALDIR</span>
            </label>
          </div>
        </div>
      </div>

      <!---------------------------BELLEK(RAM)------------------------->
      <!---------------------------BELLEK(RAM)------------------------->
      <!---------------------------BELLEK(RAM)------------------------->
      <div class="filter specification-filter">
        <div class="filter-title">Bellek (RAM)</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="spec-9-52" value="4 GB" v-model="checkedBellek" />
            <label for="spec-9-52">
              4 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-9-1248"
              value="6 GB"
              v-model="checkedBellek"
            />
            <label for="spec-9-1248">
              6 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-9-1244"
              value="8 GB"
              v-model="checkedBellek"
            />
            <label for="spec-9-1244">
              8 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="spec-9-59" value="2 GB" v-model="checkedBellek" />
            <label for="spec-9-59">
              2 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input
              type="checkbox"
              id="spec-9-7740"
              value="3 GB"
              v-model="checkedBellek"
            />
            <label for="spec-9-7740">
              3 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item" :class="hide5 ? 'filter-item-hideable' : none">
            <input
              type="checkbox"
              id="spec-9-9012"
              value="12 GB"
              v-model="checkedBellek"
            />
            <label for="spec-9-9012">
              12 GB
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-hide-item" style="color: black">
            <span @click="hideItem5">{{ hideText5 }} </span>
            <span></span>
          </div>
        </div>
      </div>

      <!---------------------------FİYAT------------------------>
      <!---------------------------FİYAT------------------------>
      <!---------------------------FİYAT------------------------>
      <div class="filter price-filter">
        <div class="filter-title">FİYAT</div>
        <div class="filter-items">
          <div class="filter-item">
            <input type="checkbox" id="price-1500-1999" data-min="1500" data-max="1999" />
            <label for="price-1500-1999">
              1500 - 1999 TL
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="price-2000-2499" data-min="2000" data-max="2499" />
            <label for="price-2000-2499">
              2000 - 2499 TL
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="price-2500-2999" data-min="2500" data-max="2999" />
            <label for="price-2500-2999">
              2500 - 2999 TL
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="price-3000-3499" data-min="3000" data-max="3499" />
            <label for="price-3000-3499">
              3000 - 3499 TL
              <span>KALDIR</span>
            </label>
          </div>
          <div class="filter-item">
            <input type="checkbox" id="price-3500--1" data-min="3500" data-max="-1" />
            <label for="price-3500--1">
              3500 TL ve üstü
              <span>KALDIR</span>
            </label>
          </div>
        </div>
      </div>

      

      <input type="hidden" name="languageId" value="1" />
      <input type="hidden" name="categoryId" value="75" />
      <input type="hidden" name="manufacturerId" />
      <input type="hidden" name="url" value="cep-telefonlari" />
      <input type="hidden" name="searchTerm" value="" />
      <input
        type="hidden"
        id="product-list-filter-price-start-hidden-input"
        name="priceStart"
        value="-1"
      />
      <input
        type="hidden"
        id="product-list-filter-price-end-hidden-input"
        name="priceEnd"
        value="-1"
      />
      <input
        type="hidden"
        id="product-list-filter-manufacturers-hidden-input"
        name="selectedManufacturerIds"
        value=""
      />
      <input
        type="hidden"
        id="product-list-filter-specification-values-hidden-input"
        name="selectedSpecificationValueIds"
        value=""
      />
      <input
        type="hidden"
        id="product-list-filter-order-by-hidden-input"
        name="orderBy"
        value="0"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedModels: [],
      checkedStorage: [],
      checkedCam: [],
      checkedModelss: [],
      checkedRenk: [],
      checkedBellek: [],
      hide: true,
      hide1: true,
      hide2: true,
      hide3: true,
      hide4: true,
      hide5: true,
      hide6: true,
      hideText: "Daha fazla göster",
      hideText1: "Daha fazla göster",
      hideText2: "Daha fazla göster",
      hideText3: "Daha fazla göster",
      hideText4: "Daha fazla göster",
      hideText5: "Daha fazla göster",
      hideText6: "Daha fazla göster",
    };
  },
  methods: {
    hideItem() {
      this.hide = !this.hide;
      if (this.hide == false) this.hideText = "Daha az göster";
      else this.hideText = "Daha fazla göster";
    },
    hideItem1() {
      this.hide1 = !this.hide1;
      if (this.hide1 == false) this.hideText1 = "Daha az göster";
      else this.hideText1 = "Daha fazla göster";
    },
    hideItem2() {
      this.hide2 = !this.hide2;
      if (this.hide2 == false) this.hideText2 = "Daha az göster";
      else this.hideText2 = "Daha fazla göster";
    },
    hideItem3() {
      this.hide3 = !this.hide3;
      if (this.hide3 == false) this.hideText3 = "Daha az göster";
      else this.hideText3 = "Daha fazla göster";
    },
    hideItem4() {
      this.hide4 = !this.hide4;
      if (this.hide4 == false) this.hideText4 = "Daha az göster";
      else this.hideText4 = "Daha fazla göster";
    },
    hideItem5() {
      this.hide5 = !this.hide5;
      if (this.hide5 == false) this.hideText5 = "Daha az göster";
      else this.hideText5 = "Daha fazla göster";
    },
    hideItem6() {
      this.hide6 = !this.hide6;
      if (this.hide6 == false) this.hideText6 = "Daha az göster";
      else this.hideText6 = "Daha fazla göster";
    },
  },
  watch: {
    checkedModels() {
      this.$emit("checkedModels", this.checkedModels);
    },
    checkedStorage() {
      this.$emit("checkedStorage", this.checkedStorage);
    },
    checkedCam() {
      this.$emit("checkedCam", this.checkedCam);
    },
    checkedModelss() {
      this.$emit("checkedModelss", this.checkedModelss);
    },
    checkedRenk() {
      this.$emit("checkedRenk", this.checkedRenk);
    },
    checkedBellek() {
      this.$emit("checkedBellek", this.checkedBellek);
    },
  },
};
</script>

<style scoped>
select {
  display: block;
}
</style>
