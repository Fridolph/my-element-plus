<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'
const test = ref('')
const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const remoteFilter = (query) => {
  return new Promise((resolve) => {
    if (query) {
      setTimeout(() => {
        const options = states.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        }).map(label => {
          return { label, value: label }
        })
        resolve(options)
      }, 500)
    } else {
      resolve([])
    }
  })
}
const handleFetch = (query) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
  .then(res => res.json())
  .then(( { items }) => {
    return items.slice(0, 10).map(item => ({ label: item.name, value: item.node_id }))
  })
}
</script>
<template>
  <Select 
    v-model="test" 
    placeholder="remoteFilter"
    filterable
    remote
    :remote-method="remoteFilter"
  />

  <Select 
    v-model="test" 
    placeholder="搜索远程结果"
    filterable
    remote
    :remote-method="handleFetch"
  />
</template>