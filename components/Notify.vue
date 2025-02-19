<template>
    <div v-if="show" :class="['notification', color]">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            show: false,
            timeout: null
        };
    },
    props: {
        title: String,
        description: String,
        color: String,
        duration: {
            type: Number,
            default: 3000 // 3 seconds
        }
    },
    methods: {
        showNotification() {
            this.show = true;
            this.timeout = setTimeout(() => {
                this.hideNotification();
            }, this.duration);
        },
        hideNotification() {
            clearTimeout(this.timeout);
            this.show = false;
        }
    },
    mounted() {
        this.showNotification();
    },
    beforeDestroy() {
        clearTimeout(this.timeout);
    }
};
</script>
  
<style scoped>
.notification {
    z-index: 9999;
    border-radius:0  20px 20px 0;
    position: fixed;
    top: 20px;
    left: 0px;
    padding: 15px;
    color: white;
    text-align: left;
}

.error {
    @apply bg-red-500;
}

.success {
    @apply bg-green-600;
}
</style>
  