<script setup>
import { ref, onMounted } from 'vue';

const users = ref([{ id: 1, name: 'No users' }])

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:8181/users')
    users.value = await res.json()
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <main>
    <h1>Docker avancé</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style>
main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>