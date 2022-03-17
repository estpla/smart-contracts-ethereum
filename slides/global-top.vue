<template>
  <header
    v-if="[28, 29, 30, 31].includes($slidev.nav.currentPage)"
    class="absolute top-0 right-0 p-6"
  >
    <Wallet />
  </header>
</template>
