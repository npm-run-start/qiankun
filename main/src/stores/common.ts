import { defineStore } from 'pinia'

/**
 * @param { 组合式 }
 */
export const commonStore = defineStore('common', {
  state: () => ({
    collapse: false,
  }),
  actions: {
    submitCollapse(val: boolean) {
      this.collapse = val
    },
  },
})
