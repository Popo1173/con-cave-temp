<template>
  <div>
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name</label>
        <input type="text" v-modal="form.name" id="name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" v-modal="form.email" id="email" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea v-modal="form.message" id="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    <p vi-if="successMessage">{{ successMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (response.ok) {
      successMessage.value = 'Your message has been sent!'
      form.value = {
        name: '',
        email: '',
        message: '',
      }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    console.error(error)
    alert('An error occurred. Please try again later.')
  }
}
</script>
<style lang="scss" scoped></style>
