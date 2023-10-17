<template>
<div class="modal-background">
	<div v-if="storeModal.isModalDisplayed" ref="target" class="modal">
		<button @click="storeModal.switchModal()" class="close-btn">
			<font-awesome-icon icon="fa-solid fa-xmark" />
		</button>
		<div class="content-wrapper">
			<main class="content-main-wrapper">
				<div class="content-main">
					<slot name="content-main"></slot>
				</div>
			</main>
		</div>
		<button @click="storeModal.saveModalChanges()" class="save-btn">
			<font-awesome-icon icon="fa-solid fa-check" />
		</button>
		<button @click="storeTime.$reset(); storeModal.$reset()" class="reset-default-btn">Reset default</button>
	</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import {useModalStore} from '@/stores/store.js'
import {useTimeStore} from '@/stores/time.js'

const storeModal = useModalStore()
const storeTime = useTimeStore()

const target = ref(null)

onClickOutside(target, () => {
	storeModal.switchModal()
});
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
		width: 270px;
		height: 280px;
		color: white;
		background-color: black;
		border-radius: 15px;

		.content-wrapper {
			.content-main-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 30px;
			}
		}

		.save-btn {
			position: absolute;
			bottom: 10px;
			right: 10px;
			font-size: 30px;
			color: white;
			border: 0;
			background-color: transparent;
			cursor: pointer;
		}

		.close-btn {
			position: absolute;
			top: 10px;
			right: 10px;
			background-color: transparent;
			border: 0;
			color: white;
			font-size: 30px;
			cursor: pointer;
		}
		.reset-default-btn {
			position: absolute;
			bottom: 16px;
			right: 60px;
			background-color: transparent;
			border: 1px solid white;
			border-radius: 10px;
			color: white;
			padding: 5px 10px;
			cursor: pointer;
		}
	}
}

</style>