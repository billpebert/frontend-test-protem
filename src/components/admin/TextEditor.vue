<script setup>
import { ref, watch } from "vue";
import { component as CKEditor } from "@ckeditor/ckeditor5-vue";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Bold, Italic, Underline } from "@ckeditor/ckeditor5-basic-styles";
import { Link } from "@ckeditor/ckeditor5-link";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { List } from "@ckeditor/ckeditor5-list";
import { Alignment } from "@ckeditor/ckeditor5-alignment";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
	modelValue: String,
});

const editorData = ref(props.modelValue);
const editorConfig = ref({
	plugins: [Essentials, Bold, Italic, Underline, Link, Heading, BlockQuote, List, Paragraph, Alignment],
	toolbar: [
		"heading",
		"|",
		"bold",
		"italic",
		"underline",
		"|",
		"alignment",
		"|",
		"link",
		"bulletedList",
		"numberedList",
		"blockQuote",
	],
	heading: {
		options: [
			{ model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
			{ model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
			{ model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
		],
	},
	alignment: {
		options: [
			{ name: "left", className: "my-align-left" },
			{ name: "right", className: "my-align-right" },
		],
	},
});

watch(editorData, () => {
	emit("update:modelValue", editorData.value);
});
</script>

<template>
	<CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></CKEditor>
</template>

<style>
:root {
	--ck-border-radius: 4px;
}

.ck-editor__editable {
	min-height: 160px;
}
</style>
