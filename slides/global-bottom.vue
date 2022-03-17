<template>
  <footer
    v-if="[2, 4, 5, 7, 9, 12, 13, 14, 16, 19, 20, 21, 23, 24, 25, 28, 32].includes($slidev.nav.currentPage)"
    class="flex absolute w-full bottom-0 p-8 text-center items-center justify-center text-black"
  >
    <img src="/minilogo_teralco.png" class="w-9 h-6" />
    <span class="font-sans text-xs">Teralco Group 2022 | #InsideTeralco</span>
  </footer>
</template>