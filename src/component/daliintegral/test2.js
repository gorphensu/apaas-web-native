/* eslint-disable */
export default {
	"pageinfo": {
		"clientcategorycode": "1",
		"pagetemplatecode": "200",
		"type": "200",
		"title": "积分规则设置",
		"pagedescr": "积分规则设置",
		"directorytypecode": "1371652957392736355",
		"marktype": "2",
		"versionnum": "2.0",
		"status": "1",
		"ref": "",
		"code": "1447741425969139811",
		"ctrltitlewidth": "",
		"ctrllayout": "",
		"remark": "",
		"reportdesclist": []
	},
	"view": {
		"body": {
			"type": "layout",
			"code": "layout-1447741425969139810",
			"title": "布局",
			"display": "flex",
			"flexdirection": "vertical",
			"flex": "1",
			"shape": "rect",
			"bordercolor": "lightgray",
			"bordersides": "",
			"overflowy": "",
			"content": [
				{
					"type": "filter",
					"code": "filter-1447741425969139809",
					"title": "搜索栏",
					"display": "flex",
					"flexdirection": "",
					"flex": "",
					"shape": "rect",
					"overflowy": "",
					"flexwrap": "wrap",
					"marginleft": "5",
					"marginright": "5",
					"bindcallbtn": "1",
					"width": "",
					"searchcondition": {
						"basic": [
							{
								"type": "filtertextinput",
								"code": "textinput-1447741425969139808",
								"titlewidth": "110",
								"titleflex": "",
								"title": "规则名称",
								"placeholder": "规则名称",
								"name": "",
								"verificationrule": "",
								"width": "200",
								"eventlist": []
							},
							{
								"type": "dropdownbox",
								"code": "dropdownbox-1447741425969139807",
								"titlewidth": "110",
								"titleflex": "",
								"title": "规则类型",
								"placeholder": "规则类型",
								"name": "",
								"hiddenclearbtn": "0",
								"searchable": "1",
								"options": [
									{
										"key": "1",
										"text": "单次",
										"isselected": "0"
									},
									{
										"key": "2",
										"text": "累计",
										"isselected": "0"
									}
								],
								"width": "200",
								"eventlist": []
							},
							{
								"type": "dropdownbox",
								"code": "dropdownbox-5198339588676207",
								"titlewidth": "60",
								"titleflex": "",
								"title": "状态",
								"placeholder": "状态",
								"name": "",
								"hiddenclearbtn": "0",
								"options": [
									{
										"key": "1",
										"text": "启用",
										"isselected": "1"
									},
									{
										"key": "2",
										"text": "停用",
										"isselected": "0"
									}
								],
								"width": "130",
								"eventlist": []
							}
						],
						"advanced": []
					},
					"sortcondition": {
						"basic": [],
						"advanced": []
					},
					"eventlist": [
						{
							"trigger": "onvaluechange",
							"handler": "1448168775596773397"
						}
					]
				},
				{
					"type": "layout",
					"code": "layout-1447741425969139806",
					"flexdirection": "horizontal",
					"justifycontent": "spacebetween",
					"alignitems": "center",
					"bordersides": "",
					"content": [
						{
							"type": "layout",
							"code": "layout-1447741425969139805",
							"flexdirection": "horizontal",
							"alignitems": "center",
							"bordersides": "",
							"content": [
								{
									"type": "button",
									"code": "button-1447741425969139804",
									"name": "",
									"marktype": "1",
									"status": "1",
									"text": "新增",
									"customicon": "c-add",
									"displaytype": "default",
									"marginright": "",
									"marginleft": "5",
									"hidden": "0",
									"_type_ctrlarea": "func_area",
									"_ide_componenttype": "button",
									"title": "新增",
									"backgroundcolor": "",
									"bordervisible": "1",
									"disabled": "",
									"value": "",
									"readonly": "0",
									"required": "0",
									"_ide_spancol": "",
									"width": "",
									"height": "",
									"flex": "",
									"titlewidth": "",
									"titleflex": "",
									"color": "",
									"textalign": "",
									"fontsize": "",
									"fontweight": "",
									"margintop": "5",
									"marginbottom": "5",
									"marginhorizontal": "",
									"functioncode": "1451709792723800159",
									"eventlist": [
										{
											"trigger": "onclicked",
											"handler": "1447746960516845646"
										}
									]
								},
								{
									"type": "button",
									"code": "button-1447746960516845664",
									"marktype": "1",
									"_ide_propertytypecode": "",
									"_ide_componenttype": "button",
									"_ide_name": "",
									"_type_ctrlarea": "",
									"status": "1",
									"text": "编辑",
									"title": "编辑",
									"icon": "edit",
									"customicon": "c-edit",
									"displaytype": "default",
									"bordervisible": "1",
									"required": "",
									"readonly": "",
									"hidden": "",
									"titlewidth": "",
									"width": "",
									"flex": "",
									"titleflex": "",
									"backgroundcolor": "",
									"disabled": "",
									"name": "",
									"value": "",
									"_ide_spancol": "",
									"height": "",
									"color": "",
									"textalign": "",
									"fontsize": "",
									"fontweight": "",
									"marginright": "",
									"marginleft": "5",
									"marginbottom": "5",
									"margintop": "5",
									"functioncode": "1451709792723800157",
									"eventlist": [
										{
											"trigger": "onclicked",
											"handler": "1449906719172989026"
										}
									]
								},
								{
									"type": "button",
									"code": "button-1447741425969139802",
									"name": "",
									"marktype": "1",
									"status": "1",
									"text": "启用",
									"customicon": "c-enable",
									"displaytype": "default",
									"bordervisible": "1",
									"hidden": "0",
									"disabled": "1",
									"_type_ctrlarea": "func_area",
									"_ide_componenttype": "button",
									"title": "启用",
									"backgroundcolor": "",
									"value": "",
									"readonly": "0",
									"required": "0",
									"_ide_spancol": "",
									"width": "",
									"height": "",
									"flex": "",
									"titlewidth": "",
									"titleflex": "",
									"color": "",
									"textalign": "",
									"fontsize": "",
									"fontweight": "",
									"marginleft": "5",
									"marginright": "",
									"margintop": "5",
									"marginbottom": "5",
									"functioncode": "1451709792723800155",
									"eventlist": [
										{
											"trigger": "onclicked",
											"handler": "1450274343178342457"
										}
									]
								},
								{
									"type": "button",
									"code": "button-1447746960516845665",
									"name": "",
									"marktype": "1",
									"status": "1",
									"text": "停用",
									"customicon": "c-disable",
									"displaytype": "default",
									"bordervisible": "1",
									"hidden": "0",
									"disabled": "1",
									"_type_ctrlarea": "func_area",
									"_ide_componenttype": "button",
									"title": "停用",
									"backgroundcolor": "",
									"value": "",
									"readonly": "0",
									"required": "0",
									"_ide_spancol": "",
									"width": "",
									"height": "",
									"flex": "",
									"titlewidth": "",
									"titleflex": "",
									"color": "",
									"textalign": "",
									"fontsize": "",
									"fontweight": "",
									"marginleft": "5",
									"marginright": "",
									"margintop": "5",
									"marginbottom": "5",
									"functioncode": "1451709792723800153",
									"eventlist": [
										{
											"trigger": "onclicked",
											"handler": "1450274343178342464"
										}
									]
								}
							],
							"eventlist": []
						}
					],
					"eventlist": []
				},
				{
					"type": "table",
					"code": "table-1450274343178342492",
					"name": "表格列表",
					"title": "表格列表",
					"pageable": "1",
					"checkable": "1",
					"isradio": "0",
					"sortable": "0",
					"hiddenheader": "0",
					"isrefreshable": "0",
					"editable": "0",
					"indexable": "0",
					"freezecol": "0",
					"personalizable": "0",
					"resizable": "0",
					"optimize": "0",
					"flex": "1",
					"mergeablecol": "",
					"style": "default",
					"rows": {
						"type": "row",
						"code": "row-1450274343178342491",
						"display": "flex",
						"flex": "",
						"content": [],
						"columnitems": [
							{
								"type": "button",
								"code": "1456052876249010273",
								"title": "规则编码",
								"name": "规则编码",
								"text": "规则编码",
								"displaytype": "",
								"bordervisible": "1",
								"width": "150",
								"eventlist": [
									{
										"trigger": "onclicked",
										"handler": "1456052876249010272"
									}
								]
							},
							{
								"type": "text",
								"code": "text-1450274343178342487",
								"title": "规则名称",
								"linenumber": "",
								"name": "",
								"value": "",
								"width": "150",
								"eventlist": []
							},
							{
								"type": "dynamictext",
								"code": "dynamictext-3833001248032078",
								"name": "ruletype",
								"linenumber": "",
								"value": "",
								"options": [
									{
										"key": "1",
										"text": "单次"
									},
									{
										"key": "2",
										"text": "累计"
									}
								],
								"title": "规则类型",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342473",
								"title": "积分指标",
								"linenumber": "",
								"name": "",
								"value": "",
								"width": "110",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342474",
								"title": "积分对象",
								"linenumber": "",
								"name": "",
								"value": "",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342475",
								"title": "应用组织",
								"linenumber": "",
								"name": "",
								"value": "",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342476",
								"title": "规则简述",
								"linenumber": "",
								"name": "",
								"value": "",
								"width": "300",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342477",
								"title": "获得积分",
								"linenumber": "",
								"name": "",
								"value": "",
								"hidden": "1",
								"eventlist": []
							},
							{
								"type": "dynamictext",
								"code": "dynamictext-1450274343178342471",
								"linenumber": "",
								"name": "",
								"value": "",
								"options": [
									{
										"key": "1",
										"text": "启用"
									},
									{
										"key": "2",
										"text": "停用"
									}
								],
								"title": "状态",
								"eventlist": []
							},
							{
								"type": "date",
								"code": "date-1450274343178342465",
								"titlewidth": "110",
								"title": "更新时间",
								"unit": "minute",
								"value": "",
								"hiddenclearbtn": "0",
								"customoptions": [],
								"format": "yyyy-MM-dd HH:mm:ss",
								"readonly": "1",
								"width": "150",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1450274343178342479",
								"title": "更新人",
								"linenumber": "",
								"name": "",
								"value": "",
								"eventlist": []
							},
							{
								"type": "text",
								"code": "text-1774206705718476",
								"name": "是否被方案引用",
								"linenumber": "",
								"value": "文字",
								"title": "是否被方案引用",
								"hidden": "1",
								"eventlist": []
							}
						],
						"eventlist": []
					},
					"statisticsrow": [],
					"eventlist": [
						{
							"trigger": "onload",
							"handler": "1448168775596773397"
						},
						{
							"trigger": "onloadmore",
							"handler": "1448168775596773397"
						},
						{
							"trigger": "onrefresh",
							"handler": "1448168775596773397"
						},
						{
							"trigger": "onchecked",
							"handler": "1448105285506961501"
						}
					]
				}
			],
			"eventlist": []
		}
	},
	"presenter": {
		"initial": [],
		"interface": [
			{
				"code": "1448105285506961505",
				"desc": "刷新列表监听事件",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "refreshlist",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1448105285506961504",
						"type": "eventlink",
						"desc": "事件监听",
						"condition": "",
						"key": "",
						"handler": "1448105285506961503",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrlcode": "",
							"properties": [
								{
									"name": "__pagestatus",
									"paramtype": "1",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			}
		],
		"handlers": [
			{
				"code": "1448168775596773397",
				"desc": "加载数据",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1448168775596773398",
						"type": "datarequest",
						"desc": "数据请求",
						"condition": "",
						"logiccode": "1449993440547967054",
						"mode": "1",
						"queue": "0",
						"pagesize": "",
						"pagesource": "",
						"hasextraparams": "",
						"sorter": "",
						"lazyload": "",
						"getter": [
							{
								"name": "integral_rule",
								"datatype": "0",
								"ctrl": {
									"code": "filter-1447741425969139809",
									"scope": ""
								},
								"properties": [
									{
										"name": "rulename",
										"value": "",
										"ctrl": {
											"code": "textinput-1447741425969139808",
											"component": ""
										}
									},
									{
										"name": "ruletype",
										"value": "",
										"ctrl": {
											"code": "dropdownbox-1447741425969139807",
											"component": ""
										}
									},
									{
										"name": "status",
										"value": "",
										"ctrl": {
											"code": "dropdownbox-5198339588676207",
											"component": ""
										}
									}
								]
							}
						],
						"setter": [
							{
								"name": "integral_rule",
								"datatype": "1",
								"ctrlcode": "table-1450274343178342492",
								"properties": [
									{
										"name": "id",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									},
									{
										"name": "rulecode",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "1456052876249010273",
											"component": ""
										}
									},
									{
										"name": "rulename",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342487",
											"component": ""
										}
									},
									{
										"name": "ruletype",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "dynamictext-3833001248032078",
											"component": ""
										}
									},
									{
										"name": "saleareaid",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									},
									{
										"name": "saleareaid__orgname",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342475",
											"component": ""
										}
									},
									{
										"name": "metricsid",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									},
									{
										"name": "metricsid__metricsname",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342473",
											"component": ""
										}
									},
									{
										"name": "classifycode",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									},
									{
										"name": "ruleconfig",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342476",
											"component": ""
										}
									},
									{
										"name": "status",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "dynamictext-1450274343178342471",
											"component": ""
										}
									},
									{
										"name": "updateop",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									},
									{
										"name": "updatetime",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "date-1450274343178342465",
											"component": ""
										}
									},
									{
										"name": "updatepeople",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342479",
											"component": ""
										}
									},
									{
										"name": "attrname",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1450274343178342474",
											"component": ""
										}
									},
									{
										"name": "isreference",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "text-1774206705718476",
											"component": ""
										}
									}
								],
								"dynamicproperties": []
							}
						]
					}
				]
			},
			{
				"code": "1447746960516845646",
				"desc": "新增",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1447746960516845645",
						"type": "link",
						"desc": "链接",
						"condition": "",
						"title": "积分类型",
						"pagecode": "1447806590781624414",
						"mode": "popup",
						"closeicon": "1",
						"closewindowicon": "1",
						"pagesize": {
							"width": "700",
							"height": "300"
						},
						"pagesizeWidth": "",
						"pagesizeHeight": "300",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrl": {
								"code": "",
								"scope": ""
							},
							"properties": [
								{
									"name": "__pagestatus",
									"value": "1",
									"paramtype": "1",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			},
			{
				"code": "1448105285506961503",
				"desc": "列表刷新触发事件",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1448105285506961502",
						"type": "ctrlevent",
						"desc": "刷新列表",
						"condition": "",
						"ctrlcode": "table-1450274343178342492",
						"trigger": "onload"
					}
				]
			},
			{
				"code": "1448105285506961501",
				"desc": "列表勾选变更事件",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1448105285506961500",
						"type": "attributeevaluate",
						"desc": "编辑",
						"condition": "",
						"ctrlcode": "button-1447746960516845664",
						"attribute": "disabled",
						"expression": "le:{__eventparam.checkednumber}!=1"
					},
					{
						"code": "1448105285506961499",
						"type": "attributeevaluate",
						"desc": "删除",
						"condition": "",
						"ctrlcode": "",
						"attribute": "disabled",
						"expression": "le:{__eventparam.checkednumber}==0"
					},
					{
						"code": "1448105285506961498",
						"type": "attributeevaluate",
						"desc": "启用",
						"condition": "",
						"ctrlcode": "button-1447741425969139802",
						"attribute": "disabled",
						"expression": "le:{__eventparam.checkednumber}==0"
					},
					{
						"code": "1448105285506961497",
						"type": "attributeevaluate",
						"desc": "停用",
						"condition": "",
						"ctrlcode": "button-1447746960516845665",
						"attribute": "disabled",
						"expression": "le:{__eventparam.checkednumber}==0"
					}
				]
			},
			{
				"code": "1456052876249010272",
				"desc": "查看详情",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1456052876249010270",
						"type": "flycode",
						"desc": "flycode",
						"condition": "",
						"script": "var checkedRowData = Page.getArrayCtrl('表格列表').getFocusRow().getValues();\r\nif(checkedRowData != null){\r\nconsole.log('规则类型'+checkedRowData.ruletype);\r\nconsole.log('id'+checkedRowData.id);\r\n\r\n if (checkedRowData.ruletype == '2') {\r\n        //链接页面、传参\r\n        Page.link('1448094554405343331', {\r\n            '__pagestatus': '3',\r\n            'id': checkedRowData.id\r\n        }, 'popup', {\r\n            'width': '1000',\r\n            'height': ''\r\n        }, '累计积分')\r\n    } else {\r\n            Page.link('1447470642944413776', {\r\n            '__pagestatus': '3',\r\n            'id': checkedRowData.id\r\n        }, 'popup', {\r\n            'width': '1000',\r\n            'height': ''\r\n        }, '单次积分')\r\n    }\r\n}\r\n"
					}
				]
			},
			{
				"code": "1449906719172989026",
				"desc": "链接-编辑界面",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1449906719172989027",
						"type": "flycode",
						"desc": "flycode",
						"condition": "",
						"script": "var checkedRowData = Page.getArrayCtrl('表格列表').getCheckedRows()[0].getValues();\nconsole.log('规则类型'+checkedRowData.ruletype);\nvar isreference = checkedRowData.isreference;\nif(Number(isreference) > 0){\n  Page.alert('error', '该规则已被待生效/进行中的方案引用，不可编辑！');\n}else{\nif (checkedRowData.ruletype == '2') {\n    Page.runEvent('链接-累计积分界面');\n} else {\n   Page.runEvent('链接-单次积分界面');\n}\n}"
					}
				]
			},
			{
				"code": "1449906719172989023",
				"desc": "链接-单次积分界面",
				"name": "链接-单次积分界面",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1449906719172989024",
						"type": "link",
						"desc": "链接",
						"condition": "",
						"title": "单次积分-编辑",
						"pagecode": "1447470642944413776",
						"mode": "popup",
						"closeicon": "1",
						"closewindowicon": "",
						"pagesize": {
							"width": "1000",
							"height": ""
						},
						"pagesizeWidth": "1000",
						"pagesizeHeight": "",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrl": {
								"code": "table-1450274343178342492",
								"scope": "checked"
							},
							"properties": [
								{
									"name": "__pagestatus",
									"paramtype": "1",
									"value": "2",
									"ctrl": {
										"code": "",
										"component": ""
									}
								},
								{
									"name": "id",
									"paramtype": "2",
									"value": "",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			},
			{
				"code": "1449906719172989021",
				"desc": "链接-累计积分界面",
				"name": "链接-累计积分界面",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1449906719172989022",
						"type": "link",
						"desc": "链接-累计积分界面",
						"condition": "",
						"title": "",
						"pagecode": "1448094554405343331",
						"mode": "popup",
						"closeicon": "1",
						"closewindowicon": "",
						"pagesize": {
							"width": "1000",
							"height": ""
						},
						"pagesizeWidth": "",
						"pagesizeHeight": "",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrl": {
								"code": "table-1450274343178342492",
								"scope": "checked"
							},
							"properties": [
								{
									"name": "__pagestatus",
									"paramtype": "1",
									"value": "2",
									"ctrl": {
										"code": "",
										"component": ""
									}
								},
								{
									"name": "id",
									"paramtype": "2",
									"value": "",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			},
			{
				"code": "1450274343178342464",
				"desc": "停用",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1450274343178342463",
						"type": "alert",
						"desc": "提示弹窗",
						"condition": "",
						"noticestyle": "warning",
						"message": "确认要停用所选积分规则？",
						"buttons": "",
						"choices": [
							{
								"title": "确定",
								"handler": "",
								"spekey": "463099543531975797"
							},
							{
								"title": "取消",
								"handler": "",
								"spekey": "463099543527244357"
							}
						]
					},
					{
						"code": "1450274343178342462",
						"type": "datasubmit",
						"desc": "确认提交",
						"condition": "",
						"logiccode": "1450274343178342461",
						"queue": "0",
						"mode": "1",
						"getter": [
							{
								"name": "integral_rule",
								"datatype": "1",
								"ctrl": {
									"code": "table-1450274343178342492",
									"scope": "checked"
								},
								"properties": [
									{
										"name": "id",
										"propertyname": "ID",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									}
								]
							}
						],
						"setter": []
					},
					{
						"code": "1450274343178342459",
						"type": "eventlink",
						"desc": "事件监听",
						"condition": "",
						"key": "",
						"handler": "1448105285506961503",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrlcode": "",
							"properties": [
								{
									"name": "__pagestatus",
									"paramtype": "1",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			},
			{
				"code": "1450274343178342457",
				"desc": "启用",
				"name": "",
				"successhint": "",
				"notice": "",
				"key": "",
				"condition": "",
				"remark": "",
				"_rel_export_info": "",
				"actions": [
					{
						"code": "1450274343178342456",
						"type": "alert",
						"desc": "确认行为",
						"condition": "",
						"noticestyle": "warning",
						"message": "确认要启用所选积分规则？",
						"buttons": "",
						"choices": [
							{
								"title": "确定",
								"handler": "",
								"spekey": "463100312382851820"
							},
							{
								"title": "取消",
								"handler": "",
								"spekey": "463100312387070317"
							}
						]
					},
					{
						"code": "1450274343178342455",
						"type": "datasubmit",
						"desc": "数据提交",
						"condition": "",
						"logiccode": "1450274343178342458",
						"queue": "0",
						"mode": "1",
						"getter": [
							{
								"name": "integral_rule",
								"datatype": "1",
								"ctrl": {
									"code": "table-1450274343178342492",
									"scope": "checked"
								},
								"properties": [
									{
										"name": "id",
										"propertyname": "ID",
										"alias": "",
										"value": "",
										"ctrl": {
											"code": "",
											"component": ""
										}
									}
								]
							}
						],
						"setter": []
					},
					{
						"code": "1450274343178342454",
						"type": "eventlink",
						"desc": "事件监听",
						"condition": "",
						"key": "",
						"handler": "1448105285506961503",
						"param": {
							"name": "__linkparam",
							"datatype": "0",
							"ctrlcode": "",
							"properties": [
								{
									"name": "__pagestatus",
									"paramtype": "1",
									"ctrl": {
										"code": "",
										"component": ""
									}
								}
							]
						}
					}
				]
			}
		]
	},
	"businessmodel": [
		{
			"modellogicname": "积分规则-列表查询",
			"execmode": "1",
			"status": 1,
			"actiontype": "1",
			"modelcode": "1447470642944413780",
			"actioncategory": "1",
			"usedatarule": "1",
			"functionname": "",
			"tenantdbtype": "2",
			"operations": [
				{
					"templateref": "106",
					"modellogicstepname": "",
					"marktype": "2",
					"modellogiccode": "1449993440547967054",
					"modellogicstepcode": "1448168775596773399",
					"seq": 1,
					"status": "1",
					"templateparams": {
						"flycode": "var temp = SELECT\nirule.id,\nirule.rulecode,\nirule.rulename,\ncase when irule.ruletype = 1 or irule.ruletype = 3 then 1\n     when irule.ruletype = 2 then 2\nend as ruletype,\nimt.metricsname as metricsid__metricsname,\nisa.attrname,\npl.orgname as saleareaid__orgname,\n\nirule.ruleconfig,\n\nirule.status,\nirule.updatetime,\nmember.orgname as  updatepeople,\n//校验是否被的待生效或进行中的方案引用，引用中的不支持编辑；否则可以编辑所有内容\n(SELECT COUNT(1) FROM integral_re_grprule a \nLEFT JOIN integral_rule_group b \nON a.grpid = b.id \nwhere  irule.id = a.ruleid \nand (b.status = 1 or b.status = 2)) AS isreference\nFROM integral_rule irule\nLEFT JOIN pl_orgstruct pl ON pl.orgstructid = irule.saleareaid\nLEFT JOIN pl_orgstruct member ON member.orgstructid = irule.updateop\nLEFT JOIN integral_metrics_template imt ON imt.id = irule.metricsid\nLEFT JOIN integral_sys_assigntarget isa ON isa.id = irule.assigntarget\nWHERE 1 = 1\n{#if IN.integral_rule.rulename != null && IN.integral_rule.rulename != ''}\n   AND irule.rulename like {'%' + String.escapeLike( IN.integral_rule.rulename) + '%'}\n{#endif}\n//单次与单次异步都属于单次指标类型\n{#if IN.integral_rule.ruletype ==1}\n   AND irule.ruletype in(1,3)\n{#endif}\n{#if IN.integral_rule.ruletype ==2}\n   AND irule.ruletype ={IN.integral_rule.ruletype}\n{#endif}\n//状态\n{#if IN.integral_rule.status != null && IN.integral_rule.status != '' }\n   AND irule.status = {IN.integral_rule.status}\n{#endif}\norder by irule.updatetime DESC\nPAGING NORULE;\n\nvar descriptions = \"\";\n\nif(temp.length > 0){\n  for(var i = 0; i < temp.length; i++){\n    FLY.log('ruleconfig: ' + temp[i].ruleconfig);\n     var jsonStr = JSON.parse(temp[i].ruleconfig);\n    for (var j = 0; j < jsonStr.length; j++) {\n     var description = jsonStr[j]['description'];\n      FLY.log(\"规则简述：\"+description);\n      // descriptions.push(description);\n      descriptions += description;\n      descriptions += '\\n';\n    }\n    temp[i].ruleconfig = descriptions;\n    descriptions = \"\";\n    FLY.log(temp[i].ruleconfig);\n  }\n}\n//FLY.log(temp[0].ruleconfig)\n \n    OUT.integral_rule = temp;"
					}
				}
			],
			"modellogiccode": "1449993440547967054",
			"marktype": "2",
			"input": [
				{
					"name": "integral_rule",
					"objectcode": "1447399909975265322",
					"objectname": "积分规则-指标实例化表",
					"datatype": "0",
					"marktype": "2",
					"properties": [
						{
							"name": "rulename",
							"propertyname": "规则名称",
							"propertytypecode": "3",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265319",
							"marktype": "2"
						},
						{
							"name": "ruletype",
							"propertyname": "规则类型",
							"propertytypecode": "18",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265318",
							"marktype": "2"
						},
						{
							"name": "status",
							"propertyname": "状态",
							"propertytypecode": "18",
							"objectcode": "1447399909975265322",
							"propertycode": "1448103714488455265",
							"marktype": "2"
						}
					]
				}
			],
			"output": [
				{
					"name": "integral_rule",
					"objectcode": "1447399909975265322",
					"objectname": "积分规则-指标实例化表",
					"datatype": "1",
					"marktype": "2",
					"properties": [
						{
							"name": "id",
							"propertyname": "ID",
							"propertytypecode": "1",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265321",
							"marktype": "2"
						},
						{
							"name": "rulecode",
							"propertyname": "规则编码",
							"propertytypecode": "3",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265320",
							"marktype": "2"
						},
						{
							"name": "rulename",
							"propertyname": "规则名称",
							"propertytypecode": "3",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265319",
							"marktype": "2"
						},
						{
							"name": "ruletype",
							"propertyname": "规则类型",
							"propertytypecode": "18",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265318",
							"marktype": "2"
						},
						{
							"name": "saleareaid",
							"propertyname": "适用组织",
							"propertytypecode": "100000000000",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265316",
							"marktype": "2"
						},
						{
							"name": "saleareaid__orgname",
							"propertyname": "营销组织名称",
							"propertytypecode": "2",
							"objectcode": "800000000000000000",
							"propertycode": "209609839761000003",
							"marktype": "2"
						},
						{
							"name": "metricsid",
							"propertyname": "积分指标",
							"propertytypecode": "100000000000",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265315",
							"marktype": "2"
						},
						{
							"name": "metricsid__metricsname",
							"propertyname": "指标名称",
							"propertytypecode": "3",
							"objectcode": "1447399909975265366",
							"propertycode": "1447399909975265362",
							"marktype": "2"
						},
						{
							"name": "classifycode",
							"propertyname": "积分指标分类",
							"propertytypecode": "3",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265313",
							"marktype": "2"
						},
						{
							"name": "ruleconfig",
							"propertyname": "规则配置",
							"propertytypecode": "4",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265312",
							"marktype": "2"
						},
						{
							"name": "status",
							"propertyname": "状态",
							"propertytypecode": "18",
							"objectcode": "1447399909975265322",
							"propertycode": "1448103714488455265",
							"marktype": "2"
						},
						{
							"name": "updateop",
							"propertyname": "修改人",
							"propertytypecode": "9",
							"objectcode": "1447399909975265322",
							"propertycode": "1448168775596773404",
							"marktype": "2"
						},
						{
							"name": "updatetime",
							"propertyname": "修改时间",
							"propertytypecode": "12",
							"objectcode": "1447399909975265322",
							"propertycode": "1448168775596773403",
							"marktype": "2"
						},
						{
							"name": "updatepeople",
							"propertyname": "更新人",
							"propertytypecode": "3",
							"objectcode": "",
							"propertycode": "",
							"marktype": "2"
						},
						{
							"name": "attrname",
							"propertyname": "积分对象",
							"propertytypecode": "3",
							"objectcode": "",
							"propertycode": "",
							"marktype": "2"
						},
						{
							"name": "isreference",
							"propertyname": "是否被方案引用",
							"propertytypecode": "3",
							"objectcode": "",
							"propertycode": "",
							"marktype": "2"
						}
					]
				}
			],
			"logicscript": "",
			"uilogicscript": ""
		},
		{
			"modellogicname": "积分规则-停用",
			"execmode": "1",
			"status": 1,
			"actiontype": "3",
			"modelcode": "1447470642944413780",
			"actioncategory": "1",
			"usedatarule": "1",
			"functionname": "",
			"tenantdbtype": "2",
			"operations": [
				{
					"templateref": "106",
					"modellogicstepname": "",
					"marktype": "2",
					"modellogiccode": "1450274343178342461",
					"modellogicstepcode": "1450274343178342460",
					"seq": 1,
					"status": "1",
					"templateparams": {
						"flycode": "var ids = [];\nif(IN.integral_rule.length > 0){\n\tfor(var i = 0;i < IN.integral_rule.length ; i++){\n\t\tids.push(IN.integral_rule[i].id);\n  }\n}\n\nvar rule = select id,status,rulename from integral_rule where id in ({ids});\n\nif(rule .length > 0){\n  for(var i = 0;i < rule.length ; i++){\n    rule[i].status = 0 ;\n    rule[i].updateop = SESSION.mbcode;\n  \trule[i].updatetime = NOW.time();\n  }    \n  DB.update(rule);\n  //重新遍历，插入操作日志\n  for(var i = 0;i < rule.length ; i++){\n  \tLOG.recordLog(\"积分规则\", \"启用\", \"规则名称为\"+rule[i].rulename + \"的规则\"); \n  }\n}else{\n  throw new ERROR(\"数据不存在！\");\n}\nFLY.info(\"停用成功!\");"
					}
				}
			],
			"modellogiccode": "1450274343178342461",
			"marktype": "2",
			"input": [
				{
					"name": "integral_rule",
					"objectcode": "1447399909975265322",
					"objectname": "积分规则-指标实例化表",
					"datatype": "1",
					"marktype": "2",
					"properties": [
						{
							"name": "id",
							"propertyname": "ID",
							"propertytypecode": "1",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265321",
							"marktype": "2"
						}
					]
				}
			],
			"output": [],
			"logicscript": "",
			"uilogicscript": ""
		},
		{
			"modellogicname": "积分规则-启用",
			"execmode": "1",
			"status": 1,
			"actiontype": "3",
			"modelcode": "1447470642944413780",
			"actioncategory": "1",
			"usedatarule": "1",
			"functionname": "",
			"tenantdbtype": "2",
			"operations": [
				{
					"templateref": "106",
					"modellogicstepname": "",
					"marktype": "2",
					"modellogiccode": "1450274343178342458",
					"modellogicstepcode": "1450274343178342460",
					"seq": 1,
					"status": "1",
					"templateparams": {
						"flycode": "var ids = [];\nif(IN.integral_rule.length > 0){\n\tfor(var i = 0;i < IN.integral_rule.length ; i++){\n\t\tids.push(IN.integral_rule[i].id);\n  }\n}\n\nvar rule = select id,status,rulename from integral_rule where id in ({ids});\n\nif(rule.length > 0){\n  for(var i = 0;i < rule.length ; i++){\n    rule[i].status = 1 ;\n    rule[i].updateop = SESSION.mbcode;\n  \trule[i].updatetime = NOW.time();\n  }    \n  DB.update(rule);\n  //重新遍历，插入操作日志\n  for(var i = 0;i < rule.length ; i++){\n  \tLOG.recordLog(\"积分规则\", \"启用\", \"规则名称为\"+rule[i].rulename + \"的规则\"); \n  }\n}else{\n  throw new ERROR(\"数据不存在！\");\n}\nFLY.info(\"启用成功!\");"
					}
				}
			],
			"modellogiccode": "1450274343178342458",
			"marktype": "2",
			"input": [
				{
					"name": "integral_rule",
					"objectcode": "1447399909975265322",
					"objectname": "积分规则-指标实例化表",
					"datatype": "1",
					"marktype": "2",
					"properties": [
						{
							"name": "id",
							"propertyname": "ID",
							"propertytypecode": "1",
							"objectcode": "1447399909975265322",
							"propertycode": "1447399909975265321",
							"marktype": "2"
						}
					]
				}
			],
			"output": [],
			"logicscript": "",
			"uilogicscript": ""
		}
	]
}
