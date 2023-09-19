<script setup>
	import { onMounted, ref } from "vue"
	import { useForm } from "vee-validate"
	import * as yup from "yup"
	import TextEditor from "@/components/admin/TextEditor.vue"
	import ProductOrganization from "@/components/admin/ProductOrganization.vue"

	const trackQty = ref(false)
	const skuCheck = ref(false)
	const editorContent = ref("")
</script>

<template>
	<div class="bg-[#202123]">
		<div class="flex items-center justify-between max-w-screen-xl gap-5 px-4 py-3 mx-auto">
			<p class="text-[#E3E5E7] font-semibold text-base">Unsaved product</p>
			<div class="inline-flex gap-2">
				<a
					href="#"
					class="py-[10px] px-4 inline-flex justify-center items-center bg-[#202123] border border-[#C9CCCF] text-[#E3E5E7] text-sm rounded font-semibold"
				>
					Discard
				</a>
				<a
					href="#"
					class="py-[10px] px-4 inline-flex justify-center items-center bg-[#008060] border-[#C9CCCF] text-white text-sm rounded font-semibold bottom-stroke"
				>
					Save
				</a>
			</div>
		</div>
	</div>

	<div class="bg-[#f6f6f7] min-h-screen pb-20">
		<div class="flex flex-col w-full max-w-screen-xl gap-5 p-4 mx-auto md:grid md:grid-cols-12">
			<div class="flex flex-col order-2 gap-5 md:col-span-8 md:order-1">
				<div class="flex flex-col gap-4 p-5 bg-white rounded-lg shadow">
					<div class="flex flex-col gap-1">
						<label for="title" class="text-sm text-[#202223]">Title</label>
						<input
							type="text"
							name="title"
							id="title"
							placeholder="Short sleeve t-shirt"
							class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="description" class="text-sm text-[#202223]">Description</label>
						<TextEditor v-model="editorContent" />
					</div>
				</div>

				<div class="flex flex-col gap-4 bg-white rounded-lg shadow">
					<div class="p-5 pb-0">
						<h6 class="text-base text-[#202223] font-semibold mb-5">Inventory</h6>
						<div class="flex items-center pb-4 border-b border-[#E1E3E5]">
							<input
								id="default-checkbox"
								type="checkbox"
								name="quantity"
								v-model="trackQty"
								@click="trackQty = !trackQty"
								class="w-[18px] h-[18px] bg-white border-[#8C9196] rounded text-[#2C6ECB] focus:ring-[#2C6ECB] focus:ring focus:ring-offset-1 cursor-pointer"
							/>
							<label for="default-checkbox" class="ml-2 text-sm text-[#202223] cursor-pointer"
								>Track quantity</label
							>
						</div>

						<div class="flex items-center justify-between mt-5">
							<h6 class="text-sm text-[#202223] font-semibold">Quantity</h6>
							<p class="text-sm text-[#6D7175] w-[46px]" v-if="!trackQty">Not tracked</p>
							<input
								type="number"
								name="quantityNum"
								id="quantityNum"
								class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
								min="0"
								value="5"
								v-if="trackQty"
							/>
						</div>
						<div class="flex items-center justify-between mt-5" v-if="trackQty">
							<h6 class="text-sm text-[#202223] font-semibold">Low Quantity Warning</h6>
							<input
								type="number"
								name="lowQuantityNum"
								id="lowQuantityNum"
								class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
								min="0"
								value="3"
								v-if="trackQty"
							/>
						</div>
					</div>

					<div class="p-5 border-t border-t-[#E1E3E5]">
						<div class="flex items-center">
							<input
								id="sku"
								type="checkbox"
								name="sku"
								class="w-[18px] h-[18px] bg-white border-[#8C9196] rounded text-[#2C6ECB] focus:ring-[#2C6ECB] focus:ring focus:ring-offset-1 cursor-pointer"
								v-model="skuCheck"
								@click="skuCheck = !skuCheck"
							/>
							<label for="sku" class="ml-2 text-sm text-[#202223] cursor-pointer"
								>This product has a SKU or barcode</label
							>
						</div>

						<div class="grid items-center grid-cols-2 gap-5 mt-4" v-if="skuCheck">
							<div class="flex flex-col gap-1">
								<label for="stock_keeping_unit" class="text-sm text-[#202223]"
									>SKU (Stock Keeping Unit)</label
								>
								<input
									type="text"
									name="stock_keeping_unit"
									id="stock_keeping_unit"
									class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
								/>
							</div>
							<div class="flex flex-col gap-1">
								<label for="barcode" class="text-sm text-[#202223]"
									>Barcode (ISBN, UPC, GTIN, etc.)</label
								>
								<input
									type="text"
									name="barcode"
									id="barcode"
									class="py-2 px-3 border border-[#898F94] rounded text-sm placeholder:text-[#6d7175]"
								/>
							</div>
						</div>
					</div>
				</div>

				<a
					href="#"
					class="py-[10px] px-4 inline-flex justify-center items-center bg-[#008060] border-[#C9CCCF] text-white text-sm rounded font-semibold bottom-stroke w-max ms-auto mt-10"
				>
					Save
				</a>
			</div>
			<div class="order-1 md:col-span-4 md:order-2">
				<ProductOrganization/>
			</div>
		</div>
	</div>
</template>

<style>
	.bottom-stroke {
		box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.05);
	}
</style>
