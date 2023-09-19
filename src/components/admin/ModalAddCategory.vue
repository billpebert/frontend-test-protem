<script setup>
  import {ref} from 'vue'
	import { useForm } from "vee-validate"
	import * as yup from "yup"
	import axios from "axios"

	const emit = defineEmits(["fetchProductCategories", "showModal"])

	const schema = {
		validationSchema: yup.object({
			name: yup.string().required("Category name tidak boleh kosong"),
			parent_category: yup.string(),
			banner: yup.string(),
			icon: yup.string(),
		}),
	}
	const { errors, handleSubmit, defineInputBinds } = useForm(schema)
  const isSubmit = ref(false)
	const onSubmit = handleSubmit((values) => {
		// console.log(values)
    isSubmit.value = !isSubmit.value
		if (values.parent_category == undefined) values.parent_category = "new parent category"
		axios
			.post(`https://summo.id/api/category`, {
				...values,
				banner: "banner.png",
				icon: "icon.png",
			})
			.then((response) => {
				console.log(response)
        isSubmit.value = !isSubmit.value
				emit("fetchProductCategories")
				emit("showModal")
			})
			.catch(function (error) {
				console.log(error)
			})
	})

	const name = defineInputBinds("name")
	const parent_category = defineInputBinds("parent_category")
</script>

<template>
	<div
		id="modalAddCategory"
		tabindex="-1"
		aria-hidden="true"
		class="fixed top-0 left-0 right-0 z-[9999] bg-grey bg-opacity-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full"
	>
		<div class="relative w-full max-w-2xl max-h-full -translate-x-1/2 left-1/2">
			<!-- Modal content -->
			<div class="relative p-5 bg-white rounded-lg shadow">
				<!-- Modal header -->
				<div class="flex items-start justify-between pb-4 rounded-t">
					<h6 class="text-base text-[#202223] font-semibold">Add Category</h6>
				</div>
				<!-- Modal body -->
				<form class="flex flex-col gap-4 px-3" @submit.prevent="onSubmit">
					<div class="flex flex-col gap-1">
						<label for="category_name" class="text-sm text-[#202223]">Category Name</label>
						<input
							type="text"
							name="category_name"
							id="category_name"
							v-bind="name"
							class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
						/>
						<em class="text-xs text-red-500" v-if="errors">{{ errors.name }}</em>
					</div>
					<div class="flex flex-col gap-1">
						<label for="parent_category" class="text-sm text-[#202223]">Parent Category</label>
						<input
							type="text"
							name="parent_category"
							id="parent_category"
							v-bind="parent_category"
							class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
						/>
					</div>
					<div class="flex flex-col gap-[10px]">
						<p class="text-sm text-[#202223]">Category Banner (200 x 200)</p>
						<div
							class="min-h-[120px] py-[35px] border border-dashed border-[#BABFC3] w-full rounded flex justify-center items-center flex-col gap-2"
						>
							<div class="inline-flex gap-[11px] items-center">
								<button class="py-1 px-[6px] text-xs text-[#1F5199] bg-[#E5EFFD] rounded font-semibold">
									Add Files
								</button>
								<a href="#" class="underline text-[#2C6ECB] font-semibold text-xs">Add from URL</a>
							</div>
							<p class="text-xs text-[#6D7175]">Accepts images, videos, or 3D models</p>
						</div>
					</div>
					<div class="flex flex-col gap-[10px]">
						<p class="text-sm text-[#202223]">Category Icon (32 x 32)</p>
						<div
							class="min-h-[120px] py-[35px] border border-dashed border-[#BABFC3] w-full rounded flex justify-center items-center flex-col gap-2"
						>
							<div class="inline-flex gap-[11px] items-center">
								<button class="py-1 px-[6px] text-xs text-[#1F5199] bg-[#E5EFFD] rounded font-semibold">
									Add Files
								</button>
								<a href="#" class="underline text-[#2C6ECB] font-semibold text-xs">Add from URL</a>
							</div>
							<p class="text-xs text-[#6D7175]">Accepts images, videos, or 3D models</p>
						</div>
					</div>
					<div class="inline-flex justify-end gap-2">
						<button
							type="button"
							@click="$emit('showModal')"
							class="py-[10px] px-4 inline-flex justify-center items-center bg-transparent border border-[#C9CCCF] text-[#202223] text-sm rounded font-semibold"
						>
							Cancel
						</button>
						<button
							type="submit"
							class="py-[10px] px-4 inline-flex justify-center items-center bg-[#008060] border-[#C9CCCF] text-white text-sm rounded font-semibold bottom-stroke disabled:bg-opacity-50"
              :disabled="isSubmit"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
