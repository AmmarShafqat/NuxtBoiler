<template>
    <div class="bg-[aqua]">
       <div class="container mx-auto">
         <div class="flex justify-between">
            <div>
                <h2>Logo</h2>
            </div>
            <ul class="flex gap-2">
                <li v-for="item in menuItems">{{item?.title}}</li>
            </ul>

         </div>
       </div>
    </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const menuItems = config?.public?.MENU_ITEMS
</script>