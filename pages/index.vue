<template>
    <div>
        <div class="">
            <Banner />
            <Section1 :head="head" />
            <Section2 :head="head" />
            <Section3 :head="head" />
            <Section4 :head="head" />
            <Section5 :head="head" />
            <Section6 :head="head" />
            <Section7 :head="head" />
            <Section8 :head="head" />
            <Section9 :head="head" />
        </div>
    </div>
</template>
<script setup>
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})
</script>