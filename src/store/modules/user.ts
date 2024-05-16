import { defineStore } from 'pinia'

interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}

interface UserProps {
  isLogin: boolean
  userName?: string
  templates: TemplateProps[]
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
    author: 'brandy',
    copiedCount: 1
  },
  {
    id: 2,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    author: 'brandy',
    copiedCount: 1
  },
  {
    id: 3,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-682056.png',
    author: 'brandy',
    copiedCount: 1
  },
  {
    id: 4,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    author: 'brandy',
    copiedCount: 1
  },
  {
    id: 5,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
    author: 'brandy',
    copiedCount: 1
  },
  {
    id: 6,
    title: '前端架构brandy',
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    author: 'brandy',
    copiedCount: 1
  }
]

export const useUserStore = defineStore('user', {
  state: (): UserProps => ({
    isLogin: false,
    userName: '章三',
    templates: testData
  }),
  actions: {
    increment() {
      this.isLogin = true
    }
  }
})
