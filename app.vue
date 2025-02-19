<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  </Html>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
useHead({
  title: 'WOGA',
  meta: [
    { name: 'description', content: 'Woga is the ideal platform that is dedicated to connect F & B sector suppliers and business owners in all their fields such as restaurants , cafes , hotels , and all those involved in trading food in the retail sector. Woga platform is made to assist F & B business owners in finding the best source for their needs in order to maximize their profits. On the other hand ,Woga is a one stop network for all the operations that help the clients to use and manage their inventory , accounting and sales through invoicing or retail POS. Also, our ERP system ensures that everyone stays connected and informed no matter where they are. Don\'t be hesitate to Join Woga community !' }
  ]
})
</script>