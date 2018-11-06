import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#3cc47c',
    secondary: '#828081',
    accent: '#d48cf8',
    error: '#e24e42',
    info: '#4484ce',
    success: '#8fc33a',
    warning: '#eab126'
  },
  iconfont: 'md'
})
