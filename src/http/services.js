import { GET } from './request'

/**
 * 测试接口
 * @returns {Promise<any>}
 */
export function test() {
  return GET('https://jsonplaceholder.typicode.com/todos/1')
}