// vi是该模块下模拟一系列功能的
import { expect, describe, test, vi, Mocked } from 'vitest'
import { testFn } from './utils/tools'
import axios from 'axios'
import { Get } from './utils/mock'

const mockAxios = axios as Mocked<typeof axios>
vi.mock('axios')

describe('测试函数', () => {
  test('传12 函数应被调用', () => {
    const cb = vi.fn()
    testFn(12, cb)
    expect(cb).toHaveBeenCalledWith(12)
  })

  test('getName: () => void / 被调用过', () => {
    const obj = {
      getName: () => 1,
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toHaveBeenCalled()
    obj.getName()
    expect(spy).toHaveBeenCalledTimes(2)
  })
})

describe('测试 Mock axios API', () => {
  test('test Get(), 应拿到正确结果', async () => {
    // mockAxios.get.mockImplementation(() => Promise.resolve({ res: { code: 0, data: []} }))
    // 这两种写法等价，下面的方法只是直接填结果
    mockAxios.get.mockResolvedValue({res: {code: 0, data: []}})
    // @ts-ignore-nextline
    const { res } = await Get('xxx')
    expect(res.code).toBe(0)
    expect(res.data).toEqual([])
  })
})
