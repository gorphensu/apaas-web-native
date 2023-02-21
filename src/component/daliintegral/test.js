/* eslint-disable */
export default {
  "pageinfo": {
    "clientcategorycode": "1",
    "pagetemplatecode": "200",
    "type": "200",
    "title": "积分控件",
    "pagedescr": "web-积分控件",
    "directorytypecode": "1438028254001893460",
    "marktype": "1",
    "versionnum": "2.0",
    "status": "1",
    "ref": "",
    "code": "1438028254001893459",
    "reportdesclist": [],
    "ctrltitlewidth": "",
    "ctrllayout": "",
    "remark": ""
  },
  "view": {
    "body": {
      "type": "layout",
      "code": "layout-1025248734174609",
      "display": "flex",
      "flexdirection": "vertical",
      "flex": "1",
      "bordersides": "",
      "bgcolor": "",
      "content": [
        {
          "type": "layout",
          "code": "layout-10254554174609",
          "display": "flex",
          "flexdirection": "horizontal",
          "flex": "",
          "content": [
            {
              "type": "button",
              "code": "button-20",
              "name": "",
              "text": "赋数据源",
              "displaytype": "default",
              "title": "赋数据源2",
              "customicon": "export",
              "bordervisible": "1",
              "eventlist": [
                {
                  "trigger": "onclicked",
                  "handler": "handle-set-options"
                }
              ]
            },
            {
              "type": "button",
              "code": "button-1",
              "name": "",
              "text": "取值",
              "displaytype": "default",
              "title": "取值",
              "customicon": "export",
              "bordervisible": "1",
              "eventlist": [
                {
                  "trigger": "onclicked",
                  "handler": "handle-get"
                }
              ]
            },
            {
              "type": "button",
              "code": "button-2",
              "name": "",
              "text": "赋值",
              "displaytype": "default",
              "title": "赋值",
              "customicon": "export",
              "bordervisible": "1",
              "eventlist": [
                {
                  "trigger": "onclicked",
                  "handler": "handle-set"
                }
              ]
            },
            {
              "type": "button",
              "code": "button-2",
              "name": "",
              "text": "只读",
              "displaytype": "default",
              "title": "只读",
              "customicon": "export",
              "bordervisible": "1",
              "eventlist": [
                {
                  "trigger": "onclicked",
                  "handler": "handle-readonly"
                }
              ]
            }
          ],
          "eventlist": []
        },
        {
          "type": "daliintegral",
          "code": "native-daliintegral-6449726614613660",
          "name": "积分控件",
          "title": "积分控件",
          "hidden": "0",
          "readonly": "",
          "eventlist": [],
          "isShadow": "1"
        }
      ],
      "eventlist": []
    }
  },
  "presenter": {
    "initial": [],
    "interface": [],
    "handlers": [
      {
        "code": "handle-get",
        "desc": "取值",
        "name": "",
        "successhint": "",
        "notice": "",
        "key": "",
        "condition": "",
        "remark": "",
        "_rel_export_info": "",
        "actions": [
          {
            "code": "1448121152881954913",
            "type": "flycode",
            "desc": "flycode",
            "condition": "",
            "script": `
              let a = Page.getCtrl('积分控件').value
              console.log(a)
            `
          }
        ]
      },
      {
        "code": "handle-set",
        "desc": "fly",
        "name": "",
        "successhint": "",
        "notice": "",
        "key": "",
        "condition": "",
        "remark": "",
        "_rel_export_info": "",
        "actions": [
          {
            "code": "1448121152881954913",
            "type": "flycode",
            "desc": "flycode",
            "condition": "",
            "script": `


              Page.getCtrl('积分控件').setValue(JSON.stringify([
                {
                  'triggerConditions': [
                    [
                      {
                        'entityCode': 'freezing_point_display',
                        'attr': 'number',
                        'entityAttr': 'freezing_point_display.number',
                        'attrdesc': '冰点陈列排面数量',
                        'operation': '>',
                        'compareValue': '1',
                        'inputType': 1
                      },
                      {
                        'entityCode': 'xxx_point_display',
                        'attr': 'number',
                        'entityAttr': 'xxx_point_display.number',
                        'attrdesc': 'xxx排面数量',
                        'operation': '=',
                        'compareValue': '1',
                        'inputType': 2
                      }
                    ],
                    [
                      {
                        'entityCode': 'freezing_point_display',
                        'attr': 'number',
                        'entityAttr': 'freezing_point_display.number',
                        'attrdesc': '冰点陈列排面数量',
                        'operation': '<',
                        'compareValue': '2',
                        'inputType': 1
                      }
                    ]
                  ],
                  'description': '冰点陈列牌面数量>=3，按计算表达式计算',
                  'integralExpression': JSON.stringify(['1', '+', '2']),
                  'ruleType': '3'
                }
              ]), CtrlValueSetter('value'))
            `
          }
        ]
      },
      {
        "code": "handle-set-options",
        "desc": "fly",
        "name": "",
        "successhint": "",
        "notice": "",
        "key": "",
        "condition": "",
        "remark": "",
        "_rel_export_info": "",
        "actions": [
          {
            "code": "1448121152881954913",
            "type": "flycode",
            "desc": "flycode",
            "condition": "",
            "script": `
              Page.getCtrl('积分控件').setValue([
                {
                  'entityCode': 'freezing_point_display',
                  'entityAttr': 'freezing_point_display.number',
                  'descrpition': '冰点陈列排面数量',
                  'attr': 'number',
                  'attrname': '冰点陈列排面数量',
                  'key': 'freezing_point_display.number',
                  'text': '冰点陈列排面数量',
                  'compareType': '2', // 1: 表示文本输入 2: 下拉框输入。
                  'inputType': 2,
                  'modelLogicCode': '921180695815131235/1575753261514887267', // V6.1版本 不输出 compareOptions 改为自行请求 modelLogicCode 需要做兼容
                  // 'compareOptions': [ // 当 compareType 为 2 时，下拉框数据源
                  //   {
                  //     'key': '1',
                  //     'text': '1'
                  //   },
                  //   {
                  //     'key': '2',
                  //     'text': '2'
                  //   }
                  // ],
                  'operationOptions': [
                    {
                      'key': '>',
                      'text': '大于'
                    },
                    {
                      'key': '<',
                      'text': '小于'
                    }
                  ]
                },
                {
                  'entityCode': 'xxx_point_display',
                  'entityAttr': 'xxx_point_display.number',
                  'descrpition': 'xxx排面数量',
                  'attr': 'number',
                  'attrname': 'xxx排面数量',
                  'key': 'xxx_point_display.number',
                  'text': 'xxx排面数量',
                  'compareType': '1', // 1: 表示文本输入 2: 下拉框输入。
                  'inputType': 1,
                  'modelLogicCode': '', // V6.1版本 不输出 compareOptions 改为自行请求 modelLogicCode 需要做兼容
                  // 'compareOptions': [], // 当 compareType 为 2 时，下拉框数据源
                  'operationOptions': [
                    {
                      'key': '=',
                      'text': '等于'
                    },
                    {
                      'key': '>',
                      'text': '大于'
                    },
                    {
                      'key': '<',
                      'text': '小于'
                    }
                  ]
                }
              ], CtrlValueSetter('entityOptions'))

              Page.getCtrl('积分控件').setValue([
                {
                  'key': '\${number}',
                  'text': '\${冰点陈列排面数量}'
                },
                {
                  'key': '\${number1}',
                  'text': '\${冰点陈列排面数量2}'
                }
              ], CtrlValueSetter('variableOptions'))

              Page.getCtrl('积分控件').setValue('3', CtrlValueSetter('ruleType'))


            `
          }
        ]
      },
      {
        "code": "handle-readonly",
        "desc": "fly",
        "name": "",
        "successhint": "",
        "notice": "",
        "key": "",
        "condition": "",
        "remark": "",
        "_rel_export_info": "",
        "actions": [
          {
            "code": "1448121154913",
            "type": "flycode",
            "desc": "flycode",
            "condition": "",
            "script": `
              Page.getCtrl('积分控件').readonly = true
            `
          }
        ]
      }
    ]
  },
  "businessmodel": []
}
