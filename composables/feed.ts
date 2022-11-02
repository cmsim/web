import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IDigg, IFeed } from '~~/typings'

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

  async function onDigg(params: IDigg & { index: number }) {
    const { index } = params
    console.log(index, 'index')
    const res = await addDigg(params)
    if (res.data) {
      if (feedList.value && feedList.value?.[0])
        feedList.value[index].up = feedList.value[index].up + 1
    }
    return res
  }

  return {
    feedData,
    feedList,
    feed,
    list,
    onDigg,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFeedStore, import.meta.hot))
