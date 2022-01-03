<template>
  <div class="solution">{{ solution }}</div>
</template>

<script>
export default {
  props: {
    solution: {
      type: String,
      default: '',
    },
  },
}
</script>
