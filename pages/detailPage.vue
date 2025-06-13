<template>
  <UContainer>
    <div class="flex justify-center">
      <div class="w-full">
        <h2 class="">On Boarding</h2>
        <UProgress v-model="value" color="primary" />

        <!-- Step1 -->
        <h2>Name</h2>
        <input type="name" class="border" @input="updateProgress(33)" />

        <!-- Step2 -->
        <h2>Password</h2>
        <input type="password" class="border" @input="updateProgress(66)" />

        <!-- Step3 -->
        <h2>Email</h2>
        <input type="email" class="border" @input="updateProgress(100)" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const value = ref(0)

const updateProgress = (progress: number) => {
  value.value = progress
}
</script>
