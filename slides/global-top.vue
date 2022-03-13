<template>
  <header
    v-if="[23, 24, 25].includes($slidev.nav.currentPage)"
    class="absolute top-0 right-0 p-2"
  >
    <Wallet />
  </header>
</template>
