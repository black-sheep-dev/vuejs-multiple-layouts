import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '@/pages/About';
import Home from '@/pages/Home';
import Welcome from '@/pages/Welcome';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'frontend',
			meta: { layout: "default" },
			component: Welcome
		},
		{
			path: '/home',
			name: 'home',
			meta: { layout: "dashboard" },
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			meta: { layout: "dashboard" },
			component: About
		}
	]
});

export default router;