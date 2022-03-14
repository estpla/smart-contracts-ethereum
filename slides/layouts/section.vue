<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';

const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
});

const style = computed(() => handleBackground(props.background, true));
console.log(style);
</script>

<template>
  <div class="slidev-layout section" :style="style">
    <div class="flex flex-col justify-center items-center h-full z-2">
      <slot />
    </div>
  </div>
</template>
<style lang="postcss">
.section-enter-from {
  transform: rotate(1deg);
  /* opacity: .2; */
}
.section-enter-active {
  transition: all 0.3s ease-out;
  transform-origin: bottom right;
}
.section-enter-to {
  transform: rotate(0);
}

.slidev-layout.section {
  h1 {
    @apply text-5xl light:text-white font-bold;
  }
}
</style>
