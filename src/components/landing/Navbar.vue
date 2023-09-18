<script setup>
	import { RouterLink } from "vue-router"
	import { ref } from "vue"
	import { useWindowSize } from "vue-window-size"

	const { width: screenWidth } = useWindowSize()
	const show = ref(false)

	const menus = ref([
		{ id: 1, name: 'home', route: "/" },
		{ id: 2, name: 'about', route: "/" },
		{ id: 3, name: 'features', route: "/" },
		{ id: 4, name: 'collection', route: "/" },
		{ id: 5, name: 'contact', route: "/" },
	])
</script>

<template>
	<nav class="absolute inset-x-0 px-4 lg:px-[100px] top-0 z-10 pt-4 pb-8 mx-auto max-w-screen-2xl lg:py-8" :class="show ? 'bg-white' : ''">
		<div class="flex flex-col justify-between w-full lg:flex-row lg:items-center">
			<!-- Logo & Toggler Button here -->
			<div class="flex items-center justify-between">
				<RouterLink to="/">
					<img src="@/assets/svgs/protem.svg" alt="" />
				</RouterLink>
				<!-- RESPONSIVE NAVBAR BUTTON TOGGLER -->
				<div class="block lg:hidden">
					<button
						class="p-1 outline-none mobileMenuButton"
						id="navbarToggler"
						@click="screenWidth < 992 ? (show = !show) : ''"
					>
						<svg
							v-if="!show"
							class="text-white lg:text-grey w-7 h-7"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							></path>
						</svg>
						<svg v-if="show" class="w-7 h-7 text-primary" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Nav Menu -->
			<div :class="[!show ? 'hidden' : '', 'w-full lg:block']" id="navigation">
				<div
					class="flex flex-col items-baseline gap-4 mt-6 lg:justify-between lg:flex-row lg:items-center lg:mt-0"
				>
					<div class="flex flex-col w-full gap-4 ml-auto lg:w-auto lg:items-center lg:flex-row">
						<template v-for="menu in menus" :key="menu.id">
							<RouterLink :to="menu.route" class="nav-link-item">{{ menu.name }}</RouterLink>
						</template>
						<div class="ml-0 lg:ml-[60px]">
							<RouterLink to="/" class="btn-primary lg:min-w-[150px] shadow lg:shadow-none">
								Sign Up
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
