import { $fetch } from 'ohmyfetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'
import type { IListResponse, ISubject, PageResult } from '~~/typings'

const cache = new LRU({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})

function _fetchCWG(url: string, params: Record<string, string | number | undefined> = {}) {
  return $fetch(url, {
    baseURL: 'http://127.0.0.1:7001',
    params,
  })
}

export function fetchCWG(url: string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(
      hash,
      _fetchCWG(url, params)
        .catch((e) => {
          cache.delete(hash)
          throw e
        }),
    )
  }
  return cache.get(hash)!
}

export function getList(params = {}): Promise<IListResponse<ISubject>> {
  return fetchCWG('/api/subject/list', params)
}

export function getSubjectData(id: string): Promise<PageResult<ISubject>> {
  return fetchCWG(`/api/subject/${id}`)
}
