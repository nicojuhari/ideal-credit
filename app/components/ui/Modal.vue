<template>
    <div class="modal fixed z-20 flex items-end justify-center top-0 left-0 w-full h-screen p-4">
        <div class="modal-backdrop fixed min-h-screen w-full top-0 left-0 bg-black-600/50"></div>
        <div class="modal-container bg-gray-200 text-black rounded-lg z-10 m-auto w-full flex flex-col flex-1 max-h-full pb-4"
            :class="[{ 'to-close': toClose == true }, { 'max-w-sm': !large }, { 'max-w-2xl': large }]">
            <div class="modal-header flex justify-between items-center p-4">
                <div class="text-lg font-bold">{{ modalTitle }}</div>
                <div class="modal-close cursor-pointer hover:bg-opacity-10 transition-all p-1 rounded-full"
                    @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div class="py-2 text-bold italic" v-if="$slots.modalMessage">
                <slot name="modalMessage"></slot>
            </div>
            <div class="modal-content overflow-y-auto px-4 h-full flex-1">
                <div class="overflow-y-hidden">
                    <slot></slot>
                </div>
            </div>
            <slot name="modalFooter"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['close']);

defineProps({
    modalTitle: {
        default: '',
        type: String
    },
    large : {
        type: Boolean,
        default: false,
    }
})

document.body.classList.add('modal-open')

const toClose = ref(false)
const closeModal = () => {
    toClose.value = true
    setTimeout(() => {
        document.body.classList.remove('modal-open')
        emit('close');
    }, 500);
}
</script>