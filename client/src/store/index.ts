import { defineStore } from 'pinia'
import { getListApi } from '../api'
import type { RootObject } from './type'

export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        list: <RootObject>{}
    }),
    actions: {
       async getList() {
        const result = await getListApi()
        this.list = result.data
        // console.log(result)
        }
    }
})