<template>
  <div>{{ test }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const { test } = defineProps(['test'])
</script>

<style></style>
