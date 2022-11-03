import { defineStore } from 'pinia'
import { getListApi } from '../api'
export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        list: {}
    }),
    actions: {
       async getList() {
        const result = await getListApi()
        console.log(result)
        }
    }
})