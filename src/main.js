import Vue from 'vue'
import App from './App.vue'

import UIPredicateVue from "../modules/ui-predicate-vue";


Vue.config.productionTip = false


console.log(UIPredicateVue);
Vue.use(UIPredicateVue);

// expose for debug purposes
window.UIPredicateVue = UIPredicateVue;

new Vue({
  render: h => h(App),
}).$mount('#app')
