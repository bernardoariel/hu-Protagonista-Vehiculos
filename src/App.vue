<script setup lang="ts">
import VehiculosViews from '@/views/VehiculosViews.vue'

</script>
<template>
    <VehiculosViews />
</template>

<style scoped lang="scss">
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
.card {
        background: var(--surface-card);
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        width: 50em;
    }
</style>

