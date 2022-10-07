import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import VueRouter from "vue-router";

Vue.config.productionTip = false
App.use(VueRouter);
new Vue({
    render: h => h(App),
}).$mount('#app')
