import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IFeed } from '~~/typings'

export const useFeedStore = defineStore('feed', () => {
  const feedData = ref<IFeed>()
  const feedList = ref<IFeed[]>()
  async function feed(id: string) {
    const { data } = await getFeed(id)
    if (data)
      feedData.value = data
  }

  async function list(params = {}) {
    const { data } = await getFeedList(params)
    if (data)
      feedList.value = data.list
  }

  return {
    feedData,
    feedList,
    feed,
    list,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFeedStore, import.meta.hot))
