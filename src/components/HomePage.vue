<template>
  <h1 class="text-6xl font-bold text-center mt-20">Hello {{ UserName }}, Welcome Onboard !</h1>

  <div class="mx-auto max-w-7xl relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Restaurant</th>
          <th scope="col" class="px-6 py-3">Contact</th>
          <th scope="col" class="px-6 py-3">Address</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="restaurant in restaurants"
          :key="restaurant"
          class="text-lg odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ restaurant.id }}
          </th>
          <td class="px-6 py-4">{{ restaurant.name }}</td>
          <td class="px-6 py-4">{{ restaurant.contact }}</td>
          <td class="px-6 py-4">{{ restaurant.address }}</td>
          <td class="px-6 py-4">
            <router-link
              :to="'/edit-restaurant/' + restaurant.id"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Update
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import axios from 'axios'

  const router = useRouter()
  const restaurants = ref([])

  if (!localStorage.getItem('User Infos')) {
    router.push({ name: 'SignUp' })
  }

  let user = localStorage.getItem('User Infos')
  let UserName = JSON.parse(user).name

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:3000/restaurants')
      console.log(response.data)

      // Push the entire response data array into the restaurants array
      restaurants.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
</script>
