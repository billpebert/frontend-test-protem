<script setup>
	import vSelect from "vue-select"
	import "vue-select/dist/vue-select.css"
	import { ref, h, onMounted } from "vue"
	import axios from "axios"
  import ModalAddCategory from './ModalAddCategory.vue'

	// const OpenIndicator = ref({
	//   render: () => h('span', '🔽'),
	// })

  const showModal = ref(false)
	const options = ref([])

	async function fetchProductCategories() {
		try {
			const response = await axios.get(`https://summo.id/api/category`)
			response.data.data.sort(function (a, b) {
				let idA = new Date(a.id)
				let idB = new Date(b.id)
				return idB - idA
			})
			options.value = response.data.data.map((data) => {
				return data.name
			})
			options.value = options.value.slice(0, 5)
		} catch (error) {
			console.error(error)
		}
	}

	onMounted(() => {
		fetchProductCategories()
	})
</script>

<template>
	<div class="flex flex-col gap-4 p-5 bg-white rounded-lg shadow">
		<div class="inline-flex items-center gap-2">
			<h6 class="text-base text-[#202223] font-semibold mb-5">Product organization</h6>
			<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_1_1848)">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.2626 10.8977C18.2626 8.77599 17.4198 6.74116 15.9195 5.24087C14.4192 3.74058 12.3844 2.89772 10.2626 2.89772C8.1409 2.89772 6.10607 3.74058 4.60578 5.24087C3.10549 6.74116 2.26263 8.77599 2.26263 10.8977C2.26263 13.0195 3.10549 15.0543 4.60578 16.5546C6.10607 18.0549 8.1409 18.8977 10.2626 18.8977C12.3844 18.8977 14.4192 18.0549 15.9195 16.5546C17.4198 15.0543 18.2626 13.0195 18.2626 10.8977ZM9.26263 13.8977C9.26263 14.1629 9.36799 14.4173 9.55553 14.6048C9.74306 14.7924 9.99742 14.8977 10.2626 14.8977C10.5279 14.8977 10.7822 14.7924 10.9697 14.6048C11.1573 14.4173 11.2626 14.1629 11.2626 13.8977V11.8977C11.2626 11.6325 11.1573 11.3781 10.9697 11.1906C10.7822 11.0031 10.5279 10.8977 10.2626 10.8977C9.99742 10.8977 9.74306 11.0031 9.55553 11.1906C9.36799 11.3781 9.26263 11.6325 9.26263 11.8977V13.8977ZM9.26263 7.89772C9.26263 8.16294 9.36799 8.41729 9.55553 8.60483C9.74306 8.79236 9.99742 8.89772 10.2626 8.89772C10.5279 8.89772 10.7822 8.79236 10.9697 8.60483C11.1573 8.41729 11.2626 8.16294 11.2626 7.89772C11.2626 7.6325 11.1573 7.37815 10.9697 7.19061C10.7822 7.00308 10.5279 6.89772 10.2626 6.89772C9.99742 6.89772 9.74306 7.00308 9.55553 7.19061C9.36799 7.37815 9.26263 7.6325 9.26263 7.89772Z"
						fill="#6D7175"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1_1848">
						<rect width="20" height="20" fill="white" transform="translate(0.262634 0.89772)" />
					</clipPath>
				</defs>
			</svg>
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<label for="product_category" class="text-sm text-[#202223]">Product category</label>
				<vSelect :options="options" class="text-sm" placeholder="Search product categories">
					<!-- <template v-slot:no-options="{ search, searching }">
						<template v-if="searching">
							No results found for <em>{{ search }}</em
							>.
						</template>
						<em v-else style="opacity: 0.5">Start typing to search for a categor.</em>
					</template> -->
					<template #list-footer>
						<button class="text-sm text-[#0587FF] py-2 px-5 whitespace-nowrap" @click="showModal = !showModal">
							Add Another Category
						</button>
					</template>
				</vSelect>
			</div>
			<div class="flex flex-col gap-1">
				<label for="product_brand" class="text-sm text-[#202223]">Product Brand</label>
				<input
					type="text"
					name="product_brand"
					id="product_brand"
					class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
					placeholder="e.g., T-Shirt"
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label for="product_collections" class="text-sm text-[#202223]">Collections</label>
				<input
					type="text"
					name="product_collections"
					id="product_collections"
					class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
					placeholder=""
				/>
			</div>
			<div class="flex flex-col gap-1">
				<div class="inline-flex items-center justify-between gap-4">
					<label for="product_tags" class="text-sm text-[#202223]">Tags</label>
					<a href="#" class="text-[#2C6ECB] text-sm"> Manage </a>
				</div>
				<input
					type="text"
					name="product_tags"
					id="product_tags"
					class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
					placeholder="Find or create tags"
				/>
			</div>
		</div>
	</div>

  <ModalAddCategory v-if="showModal" v-model="showModal" @show-modal="showModal = !showModal" @fetch-product-categories="fetchProductCategories" />
</template>

<style>
	:root {
		--vs-border-color: #898f94;
		--vs-font-size: 14px;
	}
	.vs__search::placeholder {
		color: #6d7175;
	}

	.vs__dropdown-toggle {
		padding-top: 8px;
		padding-bottom: 8px;
		padding-right: 6px;
		padding-left: 5px;
	}
</style>
