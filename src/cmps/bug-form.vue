<template>
  <form class="bug-form" @submit.prevent="sendBug">
    <input class="user-id-input" type="text" v-model.number="bugToSend.userId" placeholder="User id" />

    <textarea class="problem-description-input" v-model="bugToSend.problemDescription" placeholder="Tell us your problem..." rows="4" cols="50"></textarea>

    <input class="serial-number-input" type="text" v-model="bugToSend.serialNumber" placeholder="Device serial number:" />
    <h2>Indicators status:</h2>
    <h3>First indicator</h3>
    <div class="btn-container">
      <input type="radio" value="On" v-model="bugToSend.indicators[0]" />
      <label>On</label>
      <input type="radio" value="Off" v-model="bugToSend.indicators[0]" />
      <label>Off</label>
      <input type="radio" value="Blinking" v-model="bugToSend.indicators[0]" />
      <label>Blinking</label>
    </div>

    <h3>Second indicator</h3>
    <div class="btn-container">
      <input type="radio" value="On" v-model="bugToSend.indicators[1]" />
      <label>On</label>
      <input type="radio" value="Off" v-model="bugToSend.indicators[1]" />
      <label>Off</label>
      <input type="radio" value="Blinking" v-model="bugToSend.indicators[1]" />
      <label>Blinking</label>
    </div>

    <h3>Third indicator</h3>
    <div class="btn-container">
      <input type="radio" value="On" v-model="bugToSend.indicators[2]" />
      <label>On</label>
      <input type="radio" value="Off" v-model="bugToSend.indicators[2]" />
      <label>Off</label>
      <input type="radio" value="Blinking" v-model="bugToSend.indicators[2]" />
      <label>Blinking</label>
    </div>

    <button>send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      bugToSend: {
        userId: '',
        problemDescription: '',
        serialNumber: '',
        indicators: ['', '', ''],
      },
    }
  },
  methods: {
    async sendBug() {
      console.log('bugToSend', this.bugToSend)
      this.$emit('sendBug', this.bugToSend)
    },
  },
}
</script>

<style></style>
