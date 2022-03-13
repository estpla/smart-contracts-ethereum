<script setup lang="ts">
import { useWalletStore } from "../stores/wallet";

const store = useWalletStore();
</script>

<template>
  <div v-if="store.connected">
    <slot />
  </div>
</template>