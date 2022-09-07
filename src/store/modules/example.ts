import { defineStore } from 'pinia'

export interface ExampleState {
  count: number
}

const useExampleStore = defineStore('example', {
  state: (): ExampleState => {
    return {
      count: 0,
    }
  },
  getters: {
    /**
     * Get double count
     * @param state
     */
    DoubleCount (state) {
      // @TODO: Add return default language if there is no language.
      return state.count * 2
    },
  },
  actions: {
    /**
     * Set the count
     * @param count
     */
    setCount (count: number) {
      this.count = count
    },
    /**
     * Increase count
     */
    increaseCount () {
      this.count += 1
    },
    /**
     * Decrease count
     */
    decreaseCount () {
      this.count -= 1
    },
  }
})


export default useExampleStore
