<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import appHeader from './cmps/app-header'
import userMsg from './cmps/user-msg'

export default {
  components: {
    appHeader,
    userMsg,
  },
}
</script>
