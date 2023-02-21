# daliintegral
积分控件

## 协议

```json
{
  "type": "daliintegral",
  "code": "native-daliintegral-455456465",
  "name": "积分控件",
  "title": "积分控件",
  "hidden": "",
  "readonly": "",
  "eventlist": []
}
```


### flycode


### 积分二开控件取值
```json
// 达利积分协议 triggerConditions 为一维数组
[
  {
    "triggerConditions": [
      {
        "entityCode": "freezing_point_display",
        "attr": "number",
        "entityAttr": "freezing_point_display.number",
        "attrdesc": "冰点陈列牌面数量",
        "operation": ">",
        "compareValue": "3"
      },
      {
        "entityCode": "freezing_point_display",
        "attr": "number",
        "entityAttr": "freezing_point_display.number",
        "attrdesc": "冰点陈列牌面数量",
        "operation": "<",
        "compareValue": "5"
      }
    ],
    "description": "冰点陈列牌面数量>=3，按计算表达式计算",
    "integralExpression": "[\"(\",\"1\",\"+\",\"2\",\")\",\"*\",\"${xxxx}\",\"+\",\"10\"]",
    "ruleType": "3"
  }
]

// 智慧100V6.0新协议 triggerConditions 为二维数组
[
  {
    "triggerConditions": [
      [
        {
          "entityCode": "freezing_point_display",
          "attr": "number",
          "entityAttr": "freezing_point_display.number",
          "attrdesc": "冰点陈列牌面数量",
          "operation": ">",
          "compareValue": "3"
        },
        {
          "entityCode": "freezing_point_display",
          "attr": "number",
          "entityAttr": "freezing_point_display.number",
          "attrdesc": "冰点陈列牌面数量",
          "operation": "<",
          "compareValue": "5"
        }
      ],
      [
        {
          "entityCode": "freezing_point_display",
          "attr": "number",
          "entityAttr": "freezing_point_display.number",
          "attrdesc": "冰点陈列牌面数量",
          "operation": "=",
          "compareValue": "4"
        }
      ]
    ],
    "description": "冰点陈列牌面数量>=3，按计算表达式计算",
    "integralExpression": "[\"(\",\"1\",\"+\",\"2\",\")\",\"*\",\"${xxxx}\",\"+\",\"10\"]",
    "ruleType": "3"
  }
]
```
