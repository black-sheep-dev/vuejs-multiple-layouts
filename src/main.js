import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

// Routes
import Routes from '@/routes.js';

// Layouts
import DashboardLayout from '@/layouts/Dashboard';
import DefaultLayout from '@/layouts/Default';

Vue.component('dashboard-layout', DashboardLayout);
Vue.component('default-layout', DefaultLayout);

Vue.config.productionTip = false

new Vue({
	vuetify,
	router: Routes,
	render: h => h(App)
}).$mount('#app')
