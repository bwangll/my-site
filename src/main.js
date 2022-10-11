import Vue from 'vue'
import App from '@/App.vue'
import '@/styles/global.less'
import {router} from "@/router";
import {showMessage} from "@/utils";
import '@/mock';
import '@/api/banner.js';
import vLoading from '@/directives/loading'

Vue.config.productionTip = false

Vue.directive('loading', vLoading);

Vue.prototype.$showMessage = showMessage

new Vue({
    router, render: h => h(App),
}).$mount('#app')

// import * as blogApi from './api/blog';
//
// blogApi.getBlog("asdfasdf").then((r) => {
//   console.log(r);
// });
//
// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });
//
// blogApi.getComments("123123").then((r) => {
//     console.log(r);
// });

