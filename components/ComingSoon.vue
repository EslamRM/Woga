<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @click="closeIt">
        <div class="relative">
            <button @click="closeModal" class="absolute m-4 text-gray-500">
                <div class="w-5 h-5 bg-black flex justify-center items-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-5 h-5 text-white">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
            <NuxtImg format="webp" src="/images/pos2.png" class="w-[400px]" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean
        }
    },
    methods: {
        closeIt(event) {
            if (event.target === this.$el) {
                this.closeModal()
            }
        },
        closeModal() {
            this.$emit('close');
        },
    }
}
</script>