<template>
    <div>
        <Tickets />
    </div>
</template>
<script>
import { mapState } from 'pinia';
import { authStore } from '~/store/auth';

export default {
    computed: {
        ...mapState(authStore, [
            'isAuthenticated'
        ])
    },
    mounted() {
        if (!this.isAuthenticated) {
            this.$router.push('login')
        }
    }
}
</script>