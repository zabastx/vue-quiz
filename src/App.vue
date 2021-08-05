<i18n>
{
  "en": {
    "lang": "Language",
    "yes": "Yes",
    "no": "No"
  },
  "fr": {
    "lang": "Langue",
    "yes": "Oui",
    "no": "Non"
  }
}
</i18n>

<template>
  <div class="app">
    <p style="text-align: right; padding-right: 25px;">{{ $t('lang') }}: 
      <select name="language" v-model="locale">
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </p>
    <spinner v-if="!loaded" @loaded="loaded=true"/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component v-if="loaded" :is="Component" @loading="loaded=false" />
      </transition>
    </router-view>
    <img src="./assets/ketohealth.png" alt="keto health" style="max-width: 125px; margin-top: 50px;">
  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'

export default {
  components: {
    Spinner
  },
  data() {
    return {
      loaded: true
    }
  },

  computed: {
    locale: {
      get() {
        return this.$i18n.locale
      },
      set(val) {
        this.$store.commit('setState', { name: 'lang', val })
        localStorage.setItem('lang', val)
        this.$i18n.locale = val
      }
    }
  },

  created() {
    if (localStorage.getItem('lang')) {
      this.locale = localStorage.getItem('lang')
      return
    }
    if (navigator.language.includes('fr'||'FR')) {
      this.locale = 'fr'
    }
  }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
}

body {
  margin: 0;
  min-height: 100vh;
  height: 1px;
  text-align: center;
}

.app {
  display: flow-root;
  height: 100%;
  max-width: 760px;
  padding: 0 15px;
  width: 100%;
  margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

p {
  font-size: 1.2rem;
}

img {
  display: block;
  margin: auto;
  max-width: 500px;
  width: 100%;
}
</style>
