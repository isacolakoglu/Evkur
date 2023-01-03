<template>
  <top-bar></top-bar>
  <EvkurVue></EvkurVue>
  <app-bar> </app-bar>
  <section class="form-section">
    <div class="container">
      <div class="form login-form">
        <form action="/uye-girisi" method="post" class="validate" novalidate="novalidate">
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="PN19xjyX2b_XQFAah6x-VcLS87htdtOjs1j3GrI2I64vg2RdywNvnOqpA20aVbutwqZ9bAxsQzgWRCz-TJe6MsduFLm5Sb2H5T1lSSISgQQ1"
          />
          <div class="col-2 background-form-left">
            <div class="form-title">Üye Girişi</div>
            <div class="form-item">
              <label> E-posta </label>
              <input
                class="validate-item email valid"
                data-error="Lütfen geçerli bir e-posta adresi giriniz."
                id="Email"
                name="Email"
                type="text"
                aria-invalid="false"
                v-model="form.email"
              />
            </div>

            <div class="form-item">
              <label> Şifre </label>
              <input
                class="validate-item valid"
                data-error="Bu alan zorunludur."
                id="Password"
                name="Password"
                type="password"
                aria-invalid="false"
                v-model="form.password"
              />
            </div>
            <div class="form-item">
              <div class="form-mini-checkbox">
                <input
                  data-val="true"
                  data-val-required="RememberMe alanı gereklidir."
                  id="remember-me"
                  name="RememberMe"
                  type="checkbox"
                  value="true"
                /><input name="RememberMe" type="hidden" value="false" />

                <label for="remember-me">Beni Hatırla</label>
              </div>
              <a href="/sifremi-unuttum" class="forget-password-link">
                Yeni Şifre Al / Şifremi Unuttum
              </a>
            </div>
            <div class="form-item form-item-button form-item-button-full-width">
              <a class="button red submit-button" @click="login">
                <span> GİRİŞ YAP </span>
              </a>
            </div>
          </div>
          <div class="col-2 background-form-right">
            <div class="form-title">Yeni Üyelik</div>
            <div class="form-description">
              Üye hesabı oluşturarak, daha hızlı alışveriş yapabilir yeni ve eski
              siparişlerinizin durumunu güncel takip edebilirsiniz.
            </div>
            <div class="form-item form-item-button form-item-button-left-aligned">
              <a href="/UyeOl" class="button with-border">
                <span> ÜYE OL </span>
              </a>
            </div>
          </div>
          <input type="hidden" name="returnUrl" />
          <input type="hidden" name="showGuestButton" value="0" />
        </form>
      </div>
    </div>
  </section>
  <bottom-bar></bottom-bar>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import AppBar from "../components/AppBar.vue";
import EvkurVue from "../components/Evkur.vue";
import BottomBar from "../components/BottomBar.vue";
import { db } from "./../db.js";

export default {
  components: {
    TopBar,
    AppBar,
    EvkurVue,
    BottomBar,
  },
  data() {
    return {
      form: {
        email: "test@test.com",
        password: "",
      },
      getUserData: [],
    };
  },
  created() {
    db.collection("users")
      .get()
      .then((x) => {
        x.docs.map((doc) => {
          this.getUserData.push(doc.data());
        });
      });
  },
  methods: {
    login() {
      var user = null;
      this.getUserData.forEach((element) => {
        if (this.form.email == element.email && this.form.password == element.password) {
          user = element;
        }
      });
      if (user != null) {
        this.$store.commit("setUser", user);
        this.$router.push({ name: "anasayfa" });
      } else {
        alert("hatalı giriş");
      }
      // var user = this.getUserData.filter((x) => x == this.form.email);
      // console.log(user);

      // fetch(
      //   "http://localhost:3000/loginRegister" +
      //     `?email=${this.form.email}&password=${this.form.password}`
      // )
      //   .then((response) => response.json())
      //   .then((x) => {
      //     if (x == "") {
      //       alert("Giriş Başarısız");
      //     } else {
      //       this.$store.commit("setUser", x);
      //       this.$router.push({ name: "anasayfa" });
      //     }
      //   });
    },
  },
};
</script>

<style scoped></style>
