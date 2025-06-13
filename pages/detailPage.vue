<template>
    <div class="bg-gray-100">
       <UContainer>
    <div class="flex justify-center w-full">
      <div class="max-w-[550px] w-full">
        <div class="my-4">
           <UProgress v-model="value" color="primary" />
           <div class="flex justify-between py-2">
             <h4>Step 1 of 3</h4>
             <h4>33 % Complete</h4>
           </div>
        </div>
        
        <!-- Step1 -->
        <div class="bg-white my-4 p-4 rounded-[6px]">
            <AccountDetailInfo />
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
    </div>
  </UContainer>
    </div>
  
</template>

<script setup lang="ts">
const value = ref(0)

const updateProgress = (progress: number) => {
  value.value = progress
}
</script>
