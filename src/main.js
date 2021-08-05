import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyButton from './components/MyButton'
import MyCheckbox from './components/MyCheckbox'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

app.component(MyButton.name, MyButton)
app.component(MyCheckbox.name, MyCheckbox)

const i18n = createI18n({
    legacy: true,
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    globalInjection: true
  })

app.use(i18n).use(store).use(router).mount('#app')
