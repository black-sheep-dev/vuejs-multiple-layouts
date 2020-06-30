<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link to="/">
					<v-list-item-action>
						<v-icon>mdi-application</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Frontend</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/home">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/about">
					<v-list-item-action>
						<v-icon>mdi-information</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>About</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar
			app
			color="indigo"
			dark
		>
				<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
				<v-toolbar-title>Vue.js Dashboard</v-toolbar-title>
		</v-app-bar>
		<v-main>
			<v-container class="fill-height">
				<slot />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			drawer: null,
		}),
	};
</script>