import { $fetch } from 'ohmyfetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'
import type { IListResponse, ISubject, IUser, PageResult } from '~~/typings'

const cache = new LRU({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})

function _fetchCWG(url: string, params: Record<string, string | number | undefined> = {}, method: 'POST' | 'GET' = 'GET') {
  const param = method === 'POST' ? { body: params } : { ...params }
  const { $getAuth } = useNuxtApp()
  console.log($getAuth())
  const headers = { Authorization: `Bearer ${$getAuth()}` }
  return $fetch(url, {
    baseURL: 'http://127.0.0.1:7001',
    method,
    headers,
    ...param,
  })
}

export function fetchCWG(url: string, params: Record<string, string | number | undefined> = {}, method: 'POST' | 'GET' = 'GET'): Promise<any> {
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(
      hash,
      _fetchCWG(url, params, method)
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

export function login(params = {}): Promise<PageResult<string>> {
  return fetchCWG('/api/user/login', params, 'POST')
}

export function reg(params = {}) {
  return fetchCWG('/api/user/add', params, 'POST')
}

export function logout(): Promise<PageResult<boolean>> {
  return fetchCWG('/api/user/logout', {}, 'POST')
}

export function captcha() {
  return fetchCWG(`/api/captcha/init?v=${Math.random()}`)
}

export function getUserInfo(): Promise<PageResult<IUser>> {
  return fetchCWG('/api/user/info')
}
