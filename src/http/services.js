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

export function randomStepDetailUnSpec() {
  return GET('/api/HomeController/randomStepDetailUnSpec')
}

export function getStepDetail() {
  return GET('/api/HomeController/stepDetail')
}

export function createOrderBase() {
  return GET('/api/GbsPayController/createOrderBase?type=common_pay_type_1')
}

export function insertMsg(params) {
  return GET('api/HomeController/insertMsg', params)
}
