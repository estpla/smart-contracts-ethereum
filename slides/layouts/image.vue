<script>
import { computed } from 'vue'
import omit from 'lodash-es/omit'
import props from '../utils/props'
import Default from './default.vue'
export default {
  inheritAttrs: false,
  props: {
    ...props,
    image: String,
  },
  components: {
    Default,
  },
  setup(props, { attrs }) {
    const defaultProps = computed(() => ({
      ...omit(props, 'image'),
      ...attrs,
    }))

    return {
      defaultProps,
    }
  },
}
</script>
<template>
  <Default v-bind="defaultProps">
    <div class="h-[240px]">
      <slot />
      <img :src="image" class="w-full min-h-[220px]" />
    </div>
  </Default>
</template>