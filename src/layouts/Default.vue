<template>
	<v-app>
		<v-app-bar
			app
			color="indigo"
			dark
		>
			<v-toolbar-title>Vue.js Frontend</v-toolbar-title>
			<v-spacer></v-spacer>
			

			<v-btn icon to="home">
				<v-icon>mdi-view-dashboard</v-icon>
			</v-btn>
		</v-app-bar>
		<v-main>
			<v-container class="fill-height">
				<slot />
			</v-container>
		</v-main>
	</v-app>
</template>