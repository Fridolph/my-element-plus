<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <Input v-model="test" placeholder="密码文本框，可以切换" type="password"/>
</template>