<script setup lang="ts">
import { useConsoleStore } from '../stores/console';

const store = useConsoleStore();
</script>

<template>
  <div class="console h-full">
    <pre><output><span v-for="message in store.messages">{{ message }}<br/></span></output></pre>
  </div>
</template>

<style scoped>
.console {
  background-color: black;
  background-image: radial-gradient(rgba(0, 150, 0, 0.75), black 120%);
  margin: 0;
  overflow: hidden;
  padding: 2rem;
  color: white;
  font: 0.5rem Inconsolata, monospace;
  text-shadow: 0 0 5px #c8c8c8;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba(black, 0.15),
      rgba(black, 0.15) 1px,
      transparent 1px,
      transparent 2px
    );
    pointer-events: none;
  }
}
pre {
  margin: 0;
}
</style>
