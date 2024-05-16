<template>
  <div class="templat-list-wrapper">
    <a-row :gutter="[24, 24]">
      <a-col
        class="gutter-row"
        :span="6"
        v-for="template in templates"
        :key="template.id"
      >
        <a-card hoverable style="width: 380px">
          <template #cover>
            <img style="height: 650px" alt="example" :src="template.coverImg" />
          </template>
          <a-card-meta :title="template.author">
            <template #description>{{ template.title }}</template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { templates } = storeToRefs(userStore)
</script>

<style>
.templat-list-wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>
