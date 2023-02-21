import { cloneDeep } from 'lodash-es'

const oneFilter = {
  entityAttr: '',
  operation: '',
  operationOptions: [],
  compareType: '',
  inputType: '',
  compareOptions: [],
  compareValue: '',
  entityCode: '',
  attr: '',
  attrdesc: ''
}

const oneTrigger = [cloneDeep(oneFilter)]

const oneRule = {
  triggerConditions: [
    oneTrigger
  ],
  description: '',
  // integralExpression: '["(","1","+","2",")","*","${xxxx}","+","100"]',
  integralExpression: '[]',
  ruleType: '',
  variable: ''
}

// 请求数据
async function request (content, url, body) {
  let result = null
  try {
    result = await content.$http.post(url, body)
    result = result.body.resp_data
  } catch (error) {
    let msg = (error.body && error.body.error_code) || error.statusText || error
    content.$message.error(msg)
  }
  return result
}

export default {
  oneTrigger,
  oneFilter,
  oneRule,
  request
}
