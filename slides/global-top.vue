<template>
  <header
    v-if="[26, 27, 28].includes($slidev.nav.currentPage)"
    class="absolute top-0 right-0 p-6"
  >
    <Wallet />
  </header>
</template>
