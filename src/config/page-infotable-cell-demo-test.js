export default {
  'pageinfo': {
    'marktype': '2',
    'status': '1',
    'clientcategorycode': '1',
    'pagetemplatecode': '200',
    'type': '200',
    'code': '1421038062321930338',
    'title': 'page-infotable-cell-demo-test',
    'pagedescr': 'page-infotable-cell-demo-test',
    'directorytypecode': '1260039295155179619',
    'versionnum': '2.0',
    'eventlist': [
      {
        'trigger': 'onload',
        'handler': ''
      },
      {
        'trigger': 'onunload',
        'handler': ''
      }
    ],
    'reportdesclist': []
  },
  'view': {
    'body': {
      'type': 'layout',
      'code': 'layout-3418585664439057',
      'flex': '1',
      'paddingtop': '10',
      'paddingbottom': '10',
      'paddingleft': '10',
      'paddingright': '10',
      'content': [
        {
          'type': 'infotable',
          'code': 'infotable-465465346546546545',
          'name': 'infotable表格',
          'onsort': '',
          'oncheck': 'handler_checkedchanged',
          'flex': '1',
          'title': 'infotable表格',
          'checkable': '1',
          'hasheaderbar': '0',
          'defpagesize': '10',
          'hasrowcheck': '1',
          'cellheight': '50',
          'cols': [
            {
              'type': 'infotable-cell-demo',
              'code': 'tablecell-01',
              'name': 'productname',
              'title': 'infotable-cell-demo', // 通用属性:标题
              'sort': '1', // 通用属性:列排序
              'hidden': '0', // 通用属性:隐藏列
              'eventlist': [{
                'trigger': 'onclicked', // 注册事件
                'handler': 'handler_clicked_test'
              }],
              'width': '300' // 通用属性:列宽度
            },
            {
              'type': 'tablecell',
              'code': 'tablecell-02',
              'name': 'retailprice',
              'title': '价格【数字】',
              'style': 'number',
              'options': [],
              'eventlist': []
            },
            {
              'type': 'tablecell',
              'code': 'tablecell-03',
              'name': 'createtime',
              'title': '创建日期',
              'style': 'date',
              'options': [],
              'eventlist': []
            },
            {
              'type': 'tablecell',
              'code': 'tablecell-04',
              'name': 'updatetime',
              'title': '更新时间',
              'style': 'datetime',
              'options': [],
              'eventlist': []
            }
          ],
          'datastructure': {
            'id': 'id'
          },
          'guidecols': {
            'frozen': '0',
            'merged': '',
            'cols': []
          },
          'groupcols': [],
          'operations': [],
          'rowoperations': [],
          'dynamiccols': [],
          'eventlist': [
            {
              'trigger': 'onload',
              'handler': '1293426407740936286'
            },
            {
              'trigger': 'onrefresh',
              'handler': '1293426407740936286'
            },
            {
              'trigger': 'onloadmore',
              'handler': '1293426407740936286'
            },
            {
              'trigger': 'onsort',
              'handler': '1293426407740936286'
            },
            {
              'trigger': 'ondoubleclicked',
              'handler': ''
            },
            {
              'trigger': 'onchecked',
              'handler': ''
            }
          ]
        }
      ],
      'eventlist': []
    },
    'subviews': []
  },
  'presenter': {
    'initial': [],
    'interface': [
      {
        'code': 'interface_refreshlist',
        'desc': '刷新列表监听事件',
        'name': '',
        'successhint': '',
        'notice': '',
        'key': 'refreshlist',
        'condition': '',
        'remark': '',
        '_rel_export_info': '',
        'actions': [
          {
            'code': 'interface_refreshlist_action',
            'type': 'eventlink',
            'desc': '刷新列表',
            'condition': '',
            'key': '',
            'handler': 'handler_refreshlist',
            'param': ''
          }
        ]
      }
    ],
    'handlers': [
      {
        'code': 'handler_refreshlist',
        'desc': '列表-刷新',
        'name': '',
        'successhint': '',
        'notice': '',
        'key': '',
        'condition': '',
        'remark': '',
        '_rel_export_info': '',
        'actions': [
          {
            'code': 'handler_refreshlist_action',
            'type': 'ctrlevent',
            'desc': '刷新列表',
            'condition': '',
            'ctrlcode': 'infotable-465465346546546545',
            'trigger': 'onload'
          }
        ]
      },
      {
        'code': '1293426407740936286',
        'desc': '列表查询',
        'name': '',
        'successhint': '',
        'notice': '',
        'key': '',
        'condition': '',
        'remark': '',
        '_rel_export_info': '',
        'actions': [
          {
            'code': '1293426407740936287',
            'type': 'datarequest',
            'desc': '数据请求',
            'condition': '',
            'logiccode': '894807236843540572',
            'mode': '1',
            'queue': '',
            'pagesize': '20',
            'pagesource': 'infotable-465465346546546545',
            'hasextraparams': '',
            'sorter': 'infotable-465465346546546545',
            'lazyload': '',
            'getter': [
              {
                'name': 'kx_kq_product',
                'datatype': '0',
                'ctrl': {
                  'code': '',
                  'scope': ''
                },
                'properties': [
                  {
                    'name': 'productcode',
                    'value': '',
                    'ctrl': {
                      'code': 'dropdownbox-4460696998523336',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productname',
                    'value': '',
                    'ctrl': {
                      'code': 'textinput-954259048415498338',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productbrand',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productbrand__keypath',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productcategory',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productcategory__keypath',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'iskeyproduct',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'status',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'isnew',
                    'value': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  }
                ]
              }
            ],
            'setter': [
              {
                'name': 'kx_kq_product',
                'datatype': '1',
                'ctrlcode': 'infotable-465465346546546545',
                'properties': [
                  {
                    'name': 'id',
                    'alias': 'alias_id',
                    'ctrl': {
                      'code': 'tablecell-6948246669852521',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productcode',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productname',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'shortname',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productbrand',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productbrand__dicvalue',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productcategory',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productcategory__dicvalue',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'distributionunit',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'distributionunit__dicvalue',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'singleunit',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'singleunit__dicvalue',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'boxweight',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'unitconverrate',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'distributionnorm',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'singlenorm',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'boxfactor',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'distributionbarcode',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'singlebarcode',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'retailprice',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productpackag',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'shelflife',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'iskeyproduct',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'validityperiod',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'status',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'productimage',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'seq',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'channeltype',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'channeltype__channeltypeid',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'channeltype__channeltypeid__dicvalue',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'createtime',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  },
                  {
                    'name': 'updatetime',
                    'alias': '',
                    'ctrl': {
                      'code': '',
                      'component': ''
                    }
                  }
                ]
              }
            ]
          },
          {
            'code': '1343832831251583015',
            'type': 'attributeevaluate',
            'desc': '属性表达式行为',
            'condition': '',
            'ctrlcode': '1343832831251583016',
            'attribute': 'disabled',
            'expression': 'le:{__eventparam.totalnumber}==0'
          }
        ]
      },
      {
        'code': 'handler_clicked_test',
        'desc': '二开控件点击事件测试',
        'name': 'handler_clicked_test',
        'successhint': '',
        'notice': '',
        'key': 'handler_clicked_test',
        'condition': '',
        'remark': '',
        '_rel_export_info': '',
        'actions': [
          {
            'code': '1263387935370252387',
            'type': 'flycode',
            'desc': 'flycode',
            'condition': '',
            'script': `var ctrl = Page.getArrayCtrl('infotable表格')
                        var focus = ctrl.getFocusRow()
                        
                        if (focus) {
                            var focusProductnameCtrl = focus.getCtrl('productname')
                            console.log("点击了二开控件", focusProductnameCtrl.value)
                        } else {
                            console.log("点击了二开控件")
                        }
                      `
          }
        ]
      }
    ]
  },
  'businessmodel': [
    {
      'modellogicname': '产品列表查询',
      'execmode': '1',
      'status': 1,
      'actiontype': '1',
      'modelcode': '894807236843540573',
      'actioncategory': '1',
      'usedatarule': '1',
      'functionname': '',
      'modellogiccode': '894807236843540572',
      'marktype': '3',
      'input': [
        {
          'name': 'kx_kq_product',
          'objectcode': '893288512944738326',
          'objectname': '产品',
          'datatype': '0',
          'properties': [
            {
              'name': 'productcode',
              'propertyname': '产品编号',
              'propertytypecode': '2',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738324',
              'marktype': '1'
            },
            {
              'name': 'productname',
              'propertyname': '产品名称',
              'propertytypecode': '2',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738323',
              'marktype': '1'
            },
            {
              'name': 'productbrand',
              'propertyname': '产品品牌',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738321',
              'marktype': '1'
            },
            {
              'name': 'productbrand__keypath',
              'propertyname': 'key路径值',
              'propertytypecode': '4',
              'objectcode': '893288512944738381',
              'propertycode': '893300677118398475',
              'marktype': '1'
            },
            {
              'name': 'productcategory',
              'propertyname': '产品品类',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738320',
              'marktype': '1'
            },
            {
              'name': 'productcategory__keypath',
              'propertyname': 'key路径值',
              'propertytypecode': '4',
              'objectcode': '893288512944738380',
              'propertycode': '893300868403826699',
              'marktype': '1'
            },
            {
              'name': 'iskeyproduct',
              'propertyname': '是否重点产品',
              'propertytypecode': '18',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738307',
              'marktype': '1'
            },
            {
              'name': 'status',
              'propertyname': '状态',
              'propertytypecode': '18',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738305',
              'marktype': '1'
            },
            {
              'name': 'isnew',
              'propertyname': '是否新品',
              'propertytypecode': '18',
              'objectcode': '',
              'propertycode': '',
              'marktype': '1'
            }
          ],
          'marktype': '1'
        }
      ],
      'output': [
        {
          'name': 'kx_kq_product',
          'objectcode': '893288512944738326',
          'objectname': '产品',
          'datatype': '1',
          'marktype': '1',
          'properties': [
            {
              'name': 'id',
              'propertyname': '产品id',
              'propertytypecode': '1',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738325',
              'marktype': '1'
            },
            {
              'name': 'productcode',
              'propertyname': '产品编号',
              'propertytypecode': '2',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738324',
              'marktype': '1'
            },
            {
              'name': 'productname',
              'propertyname': '产品名称',
              'propertytypecode': '2',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738323',
              'marktype': '1'
            },
            {
              'name': 'shortname',
              'propertyname': '产品简称',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738322',
              'marktype': '1'
            },
            {
              'name': 'productbrand',
              'propertyname': '产品品牌',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738321',
              'marktype': '1'
            },
            {
              'name': 'productbrand__dicvalue',
              'propertyname': '字典值',
              'propertytypecode': '3',
              'objectcode': '893288512944738381',
              'propertycode': '893300677118398469',
              'marktype': '1'
            },
            {
              'name': 'productcategory',
              'propertyname': '产品品类',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738320',
              'marktype': '1'
            },
            {
              'name': 'productcategory__dicvalue',
              'propertyname': '字典值',
              'propertytypecode': '3',
              'objectcode': '893288512944738380',
              'propertycode': '893300868403826693',
              'marktype': '1'
            },
            {
              'name': 'distributionunit',
              'propertyname': '分销单位',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738319',
              'marktype': '1'
            },
            {
              'name': 'distributionunit__dicvalue',
              'propertyname': '字典值',
              'propertytypecode': '3',
              'objectcode': '893405830819483747',
              'propertycode': '893406252552556549',
              'marktype': '1'
            },
            {
              'name': 'singleunit',
              'propertyname': '单品单位',
              'propertytypecode': '10000000000',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738318',
              'marktype': '1'
            },
            {
              'name': 'singleunit__dicvalue',
              'propertyname': '字典值',
              'propertytypecode': '3',
              'objectcode': '893288512944738304',
              'propertycode': '893405942023065605',
              'marktype': '1'
            },
            {
              'name': 'boxweight',
              'propertyname': '箱重',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738317',
              'marktype': '1'
            },
            {
              'name': 'unitconverrate',
              'propertyname': '单位转换率',
              'propertytypecode': '5',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738316',
              'marktype': '1'
            },
            {
              'name': 'distributionnorm',
              'propertyname': '分销规格',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738315',
              'marktype': '1'
            },
            {
              'name': 'singlenorm',
              'propertyname': '单品规格',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738314',
              'marktype': '1'
            },
            {
              'name': 'boxfactor',
              'propertyname': '标箱系数',
              'propertytypecode': '10',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738313',
              'marktype': '1'
            },
            {
              'name': 'distributionbarcode',
              'propertyname': '分销条码',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738312',
              'marktype': '1'
            },
            {
              'name': 'singlebarcode',
              'propertyname': '单品条码',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738311',
              'marktype': '1'
            },
            {
              'name': 'retailprice',
              'propertyname': '建议零售价',
              'propertytypecode': '10',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738310',
              'marktype': '1'
            },
            {
              'name': 'productpackag',
              'propertyname': '产品包装',
              'propertytypecode': '3',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738309',
              'marktype': '1'
            },
            {
              'name': 'shelflife',
              'propertyname': '保质时长',
              'propertytypecode': '5',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738308',
              'marktype': '1'
            },
            {
              'name': 'iskeyproduct',
              'propertyname': '是否重点产品',
              'propertytypecode': '18',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738307',
              'marktype': '1'
            },
            {
              'name': 'validityperiod',
              'propertyname': '新品有效期',
              'propertytypecode': '29',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738306',
              'marktype': '1'
            },
            {
              'name': 'status',
              'propertyname': '状态',
              'propertytypecode': '18',
              'objectcode': '893288512944738326',
              'propertycode': '893288512944738305',
              'marktype': '1'
            },
            {
              'name': 'productimage',
              'propertyname': '产品图片',
              'propertytypecode': '16',
              'objectcode': '893288512944738326',
              'propertycode': '895491165871280227',
              'marktype': '1'
            },
            {
              'name': 'seq',
              'propertyname': '序号',
              'propertytypecode': '6',
              'objectcode': '893288512944738326',
              'propertycode': '896252769617449050',
              'marktype': '1'
            },
            {
              'name': 'channeltype',
              'propertyname': '渠道类型',
              'propertytypecode': '200000000000',
              'objectcode': '893288512944738326',
              'propertycode': '899872980413321315',
              'marktype': '1'
            },
            {
              'name': 'channeltype__channeltypeid',
              'propertyname': '渠道类型id',
              'propertytypecode': '100000000000',
              'objectcode': '899538955417030750',
              'propertycode': '899538955417030747',
              'marktype': '1'
            },
            {
              'name': 'channeltype__channeltypeid__dicvalue',
              'propertyname': '字典值',
              'propertytypecode': '3',
              'objectcode': '893288512944738328',
              'propertycode': '893395216315322373',
              'marktype': '1'
            },
            {
              'name': 'createtime',
              'propertyname': '创建时间',
              'propertytypecode': '7',
              'objectcode': '893288512944738326',
              'propertycode': '924804840436142156',
              'marktype': '2'
            },
            {
              'name': 'updatetime',
              'propertyname': '修改时间',
              'propertytypecode': '7',
              'objectcode': '893288512944738326',
              'propertycode': '924804840436142154',
              'marktype': '2'
            }
          ]
        }
      ]
    }
  ],
  'message': '#nobackup#'
}
