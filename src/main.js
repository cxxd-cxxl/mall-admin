import Vue from 'vue';
import echarts from 'echarts';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import './assets/css/reset.less';

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
