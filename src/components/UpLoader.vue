<template>
  <div class="file-upload">
    <button @click="triggerUpload">点击上传</button>
    <input
      type="file"
      :style="{ display: 'none' }"
      ref="fileInput"
      @change="handleFileChange"
    />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { defineProps, ref } from 'vue'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
const props = defineProps({
  action: {
    type: String,
    required: true
  }
})
const fileInput = ref<HTMLInputElement | null>(null)
const fileStatus = ref<UploadStatus>('ready')

const triggerUpload = () => {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files
  if (files) {
    const uploadFile = files[0]
    const formData = new FormData()
    formData.append(uploadFile.name, uploadFile)
    axios
      .post(props.action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => console.log(res.data))
  }
}
</script>

<style></style>
