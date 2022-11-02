import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IDigg, IFeed } from '~~/typings'
import { sidName } from '~~/typings/enum'

export const useFeedStore = defineStore('feed', () => {
  const feedData = ref<IFeed>()
  const feedList = ref<(IFeed & { [key: string]: any })[]>()
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

  async function onDigg(params: IDigg) {
    const res = await addDigg(params)
    const sid = params?.sid as 1
    const s = sidName[sid]
    if (res.data) {
      feedList.value?.forEach((item, i) => {
        if (item[sidName[sid]].id === params?.aid) {
          if (feedList.value && feedList.value[i] && feedList.value[i][s])
            feedList.value[i][sidName[sid]].up = feedList.value[i][sidName[sid]].up + 1
        }
      })

      return res
    }
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
