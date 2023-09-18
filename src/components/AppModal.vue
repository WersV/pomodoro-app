<template>
<div class="modal-background">
	<div ref="target" class="modal">
		<button @click="$emit('handleConfiguration')">x</button>
		<div class="content-wrapper">
			<main class="options">
				<slot name="options"></slot>
			</main>
		</div>
	</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core';

const target = ref(null);


onClickOutside(target, () => {
	emit('handleConfiguration')
});

const emit = defineEmits(['handleConfiguration']);

</script>

<style lang="scss" scoped>
.modal-background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0,0,0,0.6);
	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100px;
		height: 100px;
		background-color: brown;
	}
}
</style>