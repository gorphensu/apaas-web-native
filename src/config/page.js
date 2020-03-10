/* eslint-disable */
export default {
  "pageinfo": {
    "marktype": "1",
    "status": "1",
    "clientcategorycode": "1",
    "pagetemplatecode": "200",
    "type": "200",
    "code": "000000000000001",
    "title": "periodicpicker test",
    "pagedescr": "periodicpicker test",
    "directorytypecode": "000000000",
    "versionnum": "2.0"
  },
  "view": {
    "body": {
      "type": "layout",
      "code": "layout-6254247148842803",
      "eventlist": [],
      "flex": "1",
      "flexshrink": "1",
      "content": [{
        "type": "periodicpicker",
        "code": "native-periodicpicker-1",
        "width": "300",
        "placeholder": "placeholder",
        "title": "标题"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-2",
        "width": "300",
        "title": "hour",
        "combinedunit": "hour",
        "required": "1",
        "value": "14"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-3",
        "width": "300",
        "title": "day",
        "combinedunit": "day"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-4",
        "width": "300",
        "title": "month",
        "combinedunit": "month"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-5",
        "width": "300",
        "title": "hour-minute",
        "combinedunit": "hour-minute"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-6",
        "width": "300",
        "title": "day-minute",
        "combinedunit": "day-minute"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-7",
        "width": "300",
        "title": "month-minute",
        "combinedunit": "month-minute"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-8",
        "width": "300",
        "title": "month-minute",
        "combinedunit": "month-minute",
        "readonly": "1",
        "placeholder": "readonly",
        "value": "12-09 09:09"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-9",
        "width": "300",
        "title": "month-minute",
        "combinedunit": "month-minute",
        "hidden": "1",
        "placeholder": "hidden"
      }, {
        "type": "periodicpicker",
        "code": "native-periodicpicker-10",
        "width": "",
        "title": "month-minute",
        "combinedunit": "month-minute",
        "placeholder": "默认宽度"
      }, {
        "type": "button",
        "code": "button-1",
        "text": "添加数据",
        "title": "添加数据",
        "displaytype": "success",
        "eventlist": [{
          "trigger": "onclicked",
          "handler": "add"
        }]
      }, {
        "type": "table",
        "code": "table-1",
        "name": "table",
        "height": "200",
        "eventlist": [{
          "trigger": "onload",
          "handler": ""
        }],
        "rows": {
          "code": "table-row",
          "type": "row",
          "flex": "1",
          "columnitems": [{
            "type": "text",
            "code": "text-table-index",
            "eventlist": [],
            "name": "index",
            "title": "序号",
            "width": "0"
          }, {
            "type": "periodicpicker",
            "code": "periodicpicker-table-1",
            "eventlist": [],
            "name": "periodicpicker",
            "title": "周期",
            "combinedunit": "hour-minute"
          }]
        }
      }]
    }
  },
  "presenter": {
    "initial": [],
    "interface": [],
    "handlers": [{
      "code": "add",
      "actions": [{
        "code": "add-action-1",
        "type": "flycode",
        "script": `
        debugger;
        const datas = [{
          index: 1,
          periodicpicker: '19'
        }]
        Page.getArrayCtrl('table').setValue(datas)
        `
      }]
    }]
  }
}