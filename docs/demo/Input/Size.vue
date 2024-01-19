<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <div class="size-holder">
    <Input v-model="test" placeholder="大的 Input" size="large">
    </Input>
    <Input v-model="test" placeholder="普通的 Input">
    </Input>
    <Input v-model="test" placeholder="小的 Input" size="small">
    </Input>
  </div>
</template>
<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>