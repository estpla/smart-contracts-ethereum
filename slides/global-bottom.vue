<!-- hide the footer from Page 4 -->
<template>
  <footer
    v-if="![1,3,6].includes($slidev.nav.currentPage)"
    class="flex absolute w-full bottom-0 p-8 text-center items-center justify-center text-black"
  >
    <img src="/minilogo_teralco.png" class="w-9 h-6" />
    <span class="font-sans text-xs">Teralco Group 2022 | #InsideTeralco</span>
  </footer>
</template>