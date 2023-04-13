import { GET } from './request'

/**
 *
 * @returns {Promise<any>}
 */
export function commonStepListV3() {
  return GET('/api/commonStepListV3?changeType=0&_=1680314620694')
}

export function needReOauth() {
  return GET('/api/needReOauth')
}

export function getUserInfo() {
  return GET('/api/userInfoV2')
}

export function randomStepDetailUnSpec() {
  return GET('/api/randomStepDetailUnSpec')
}

export function getStepDetail() {
  return GET('/api/stepDetail')
}

export function createOrderBase() {
  return GET('/api/createOrderBase?type=common_pay_type_1')
}

export function insertMsg(params) {
  return GET('api/insertMsg', params)
}
