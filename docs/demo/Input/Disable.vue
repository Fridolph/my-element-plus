<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test = ref('some text')
</script>
<template>
  <Input v-model="test" disabled />
</template>