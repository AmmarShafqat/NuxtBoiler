<template>
  <div class="container mx-auto">
    <h2>Account Page</h2>
    <span>Enter your details</span>

    <!-- Stepper -->
    <div class="w-full">
      <UStepper ref="stepper" :items="items">
        <template #content="{ item }">
          <Placeholder class="aspect-video">
            <!-- {{ item.title }} -->
            <!-- Render component dynamically based on step -->
            <component :is="getComponentForStep(item?.title || '')" />
          </Placeholder>
        </template>
      </UStepper>

      <div class="flex gap-2 justify-between mt-4">
        <UButton
          leading-icon="i-lucide-arrow-left"
          :disabled="!stepper?.hasPrev"
          @click="stepper?.prev()"
        >
          Prev
        </UButton>

        <UButton
          trailing-icon="i-lucide-arrow-right"
          :disabled="!stepper?.hasNext"
          @click="stepper?.next()"
        >
          Next
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { StepperItem } from '@nuxt/ui'



// Import your step components

import AddressForm from '../components/AddressForm.vue';
import ShippingMethod from '../components/ShippingMethod.vue'
import CheckoutReview from '../components/CheckoutReview.vue'

const items: StepperItem[] = [
  {
    title: 'Address',
    description: 'Add your address here',
    icon: 'i-lucide-house'
  },
  {
    title: 'Shipping',
    description: 'Set your preferred shipping method',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Checkout',
    description: 'Confirm your order'
  }
]

const stepper = useTemplateRef('stepper')

// Define a method to return the corresponding component for each step
const getComponentForStep = (stepTitle: string) => {
  switch (stepTitle) {
    case 'Address':
      return AddressForm
    case 'Shipping':
      return ShippingMethod
    case 'Checkout':
      return CheckoutReview
    default:
      return null
  }
}
</script>
