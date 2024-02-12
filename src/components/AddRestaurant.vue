<template>
  <h1 class="text-6xl font-bold text-center mt-20">
    Hello, You can a add a new restaurant on this page !
  </h1>

  <form class="max-w-md mx-auto mt-20" autocomplete="off">
    <h1 class="mb-10 text-2xl">Fill the Form to register your restaurant</h1>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_name"
        id="floating_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="name"
        required
      />
      <label
        for="floating_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Name
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="number"
        id="floating_repeat_passwordnumber"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="contact"
        required
      />
      <label
        for="floating_number"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Contact
      </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input
        type="text"
        name="floating_address"
        id="floating_address"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        v-model="address"
        required
      />
      <label
        for="floating_address"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Address
      </label>
    </div>

    <button
      type="submit"
      v-on:click="addRestaurant"
      class="text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      + Add Restaurant
    </button>
  </form>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import axios from 'axios'

  const name = ref('')
  const contact = ref()
  const address = ref('')

  const router = useRouter()

  if (!localStorage.getItem('User Infos')) {
    router.push({ name: 'SignUp' })
  }

  const addRestaurant = async () => {
    const newRestaurant = {
      name: name.value,
      contact: contact.value,
      address: address.value,
    }
    const response = await axios.post('http://localhost:3000/restaurants', newRestaurant)
    console.log(response.status)

    router.push({ name: 'Home' })

    name.value = ''
    contact.value = ''
    address.value = ''
  }
</script>
