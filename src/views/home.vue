<template>
  <section class="home-container">
    <section class="home text-center">
      <h1>BUG</h1>
      <bug-form @sendBug="sendBug"></bug-form>
      <solution :solution="bug.solution" v-if="bug.solution"></solution>
    </section>
  </section>
</template>

<script>
import bugForm from './../cmps/bug-form.vue'
import solution from './../cmps/solution.vue'

export default {
  name: 'home',
  data() {
    return {}
  },

  created() {
    this.$store.dispatch({ type: 'loadBugs' })
  },

  computed: {
    bug() {
      return this.$store.getters.bug
    },
  },

  methods: {
    sendBug(bug) {
      this.$store.dispatch({ type: 'sendBug', bug })
    },
  },

  components: {
    bugForm,
    solution,
  },
}
</script>
