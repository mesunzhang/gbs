import { GET } from './request'

/**
 *
 * @returns {Promise<any>}
 */
export function commonStepListV3() {
  return GET(
    '/api/HomeController/commonStepListV3?changeType=0&_=1680314620694'
  )
}

export function needReOauth() {
  return GET('/api/HomeController/needReOauth')
}

export function getUserInfo() {
  return GET('/api/HomeController/userInfoV2')
}
