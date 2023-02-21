<template>
  <div class="xt-calculator">
    <div class="xt-calculator-top" :class="{ 'xt-calculator-top-readonly': readonly }" :contenteditable="!readonly" ref="editorRef" placeholder="请输入......">
    </div>
    <div class="xt-calculator-con" v-show="showCon || true">
      <div class="xt-calculator-tit aaa">
        插入变量2：
      </div>
      <div class="xt-calculator-cal">
        <div class="xt-calculator-cal-item" :class="{ 'xt-calculator-cal-item-symbol': item.type === 'symbol', 'xt-calculator-cal-item-0': item.key === '0' }" v-for="(item, index) in calArr" :key="index" @click="insertCont(item.key)">
          {{ item.key }}
        </div>
      </div>
      <div class="xt-calculator-r">
        <div class="xt-calculator-tit">
          插入变量：
        </div>
        <div class="xt-calculator-val">
          <div class="xt-calculator-val-item" v-for="(item, index) in valArr" :key="index" @click="valClick(item)">
            {{ item.text }}
          </div>
          <div class="xt-calculator-val-none" v-if="!valArr.length">暂无变量</div>
        </div>
      </div>
      <div class="xt-calculator-bottom">
        <el-button type="info" style="color:#fff;background-color:#f3b007;border-color:#f6c039;margin-left: 12px" class="confirmBtn" size="small" @click="test()">test</el-button>
        <el-button type="info" size="small" @click="validata()">校验表达式</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.xt-calculator {
  position: relative;
  user-select: none;
}
.xt-calculator-top {
  /* background-color: #fcfdff; */
  border: 3px solid #bfcbd9;
  padding: 10px;
  height: 70px;
  font-size: 14px;
  /* font-weight: bold; */
  cursor: pointer;
  overflow: auto;
  outline: none;
}
/* 设置提示文字 */
.xt-calculator-top:empty::before {
  content: attr(placeholder);
  color: #999;
}
.xt-calculator-top:focus::before {
  content: none;
}

.xt-calculator-top-readonly {
  background-color: #eef1f6;
  cursor: not-allowed;
}
.xt-calculator-top i {
  margin: 0;
  padding: 0;
}
.xt-calculator-con {
  overflow: hidden;
  position: absolute;
  background-color: #FFF;
  width: 100%;
  top: 70px;
  z-index: 9;
}
.xt-calculator-cal {
  float: left;
  border-left: 1px solid #bfcbd9;
  width: 250px;
}
.xt-calculator-cal-item {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  border-right: 1px solid #bfcbd9;
  border-bottom: 1px solid #bfcbd9;
  cursor: pointer;
}
.xt-calculator-cal-item-symbol {
  background-color: #f9f9f9;
}
.xt-calculator-cal-item-0 {
  width: 50%;
}
.xt-calculator-r {
  height: 130px;
  overflow: auto;
  border-right: 1px solid #bfcbd9;
  border-bottom: 1px solid #bfcbd9;
}
.xt-calculator-tit {
  line-height: 20px;
  font-weight: bold;
  margin: 10px 10px 0;
  font-size: 14px;
  color: red;
}
.xt-calculator-val {
  overflow: hidden;
  padding: 5px;
}
.xt-calculator-val-item {
  float: left;
  background-color: #f9f9f9;
  border: 1px solid #bfcbd9;
  border-radius: 3px;
  margin: 5px;
  font-size: 14px;
  padding: 0 3px;
  line-height: 20px;
  cursor: pointer;
}
.xt-calculator-val-none {
  text-align: center;
  color: #999;
  line-height: 80px;
}
.xt-calculator-bottom {
  width: 100%;
  padding: 10px;
  border: 1px solid #bfcbd9;
  border-top: 0px;
  display: flex;
  flex-direction: row-reverse;
}
.confirmBtn{
    color: #fff;
    background-color: #f3b007 !important;
    border-color: #f3b007 !important;
  }
</style>

<script>
export default {
  name: 'xt-calculator',
  props: [
    'value',
    'readonly',
    'valArr'
  ],
  data () {
    return {
      showCon: false,
      calArr: [
        {
          key: '(',
          type: 'symbol'
        },
        {
          key: ')',
          type: 'symbol'
        },
        {
          key: '%',
          type: 'symbol'
        },
        {
          key: 'del',
          type: 'symbol'
        },
        {
          key: '7',
          type: 'number'
        },
        {
          key: '8',
          type: 'number'
        },
        {
          key: '9',
          type: 'number'
        },
        {
          key: '/',
          type: 'symbol'
        },
        {
          key: '4',
          type: 'number'
        },
        {
          key: '5',
          type: 'number'
        },
        {
          key: '6',
          type: 'number'
        },
        {
          key: '*',
          type: 'symbol'
        },
        {
          key: '1',
          type: 'number'
        },
        {
          key: '2',
          type: 'number'
        },
        {
          key: '3',
          type: 'number'
        },
        {
          key: '-',
          type: 'symbol'
        },
        {
          key: '0',
          type: 'number'
        },
        // {
        //   key: '00',
        //   type: ''
        // },
        {
          key: '.',
          type: 'number'
        },
        {
          key: '+',
          type: 'symbol'
        }
      ],
      express: [
        // '(',
        // '1',
        // '.',
        // '1',
        // '+',
        // '2',
        // ')',
        // '*',
        // '${number}',
        // '+',
        // '10'
      ]
      // valArr: [
      //   {
      //     key: '${xxxx}',
      //     text: '${xxxx}'
      //   },
      //   {
      //     key: '${number}',
      //     text: '${数量}'
      //   },
      //   {
      //     key: '${amount}',
      //     text: '${金额}'
      //   }
      // ]
    }
  },
  watch: {
    value (newValue, oldValue) {
      console.log('watch value', newValue, oldValue)
      if (newValue !== oldValue && newValue !== JSON.stringify(this.express)) {
        this.express = this.value ? JSON.parse(this.value) : []
        this.editorRef.innerText = this.createExpressText()
      }
    },
    express (newValue, oldValue) {
      console.log('watch express', newValue, oldValue)
      this.$emit('input', JSON.stringify(this.express))
    }
  },
  computed: {
    editorRef () {
      return this.$refs.editorRef
    },
    expressText () {
      const newExpressArr = this.express.map((item) => {
        const valItem = this.valArr.find((item2) => {
          return item2.key === item
        })
        if (valItem) {
          return valItem.text
        } else {
          return item
        }
      })
      return newExpressArr.join('')
    }
  },
  created () {
    this.express = this.value ? JSON.parse(this.value) : []
  },
  mounted () {
    this.editorRef.addEventListener('input', (e) => {
      console.log(e.target.innerText)
      this.express = e.target.innerText.split('')
    })
  },
  methods: {
    moveCursor (type = 'end') {
      if (!this.editorRef) return
      this.editorRef.focus()
      var range = window.getSelection() // 创建range
      range.selectAllChildren(this.editorRef) // 选择el子项
      if (type === 'start') {
        range.collapseToStart() // 光标移至开头
      } else if (type === 'end') {
        range.collapseToEnd() // 光标移至最后
      }
    },
    insertCont (html) {
      this.editorRef.focus()
      var sel = window.getSelection()
      if (sel.getRangeAt && sel.rangeCount) {
        var range = sel.getRangeAt(0)
        range.deleteContents()
        var div = document.createElement('div')
        div.innerHTML = html
        const frag = document.createDocumentFragment()
        let node
        let lastNode
        while ((node = div.firstChild)) {
          lastNode = frag.appendChild(node)
        }
        range.insertNode(frag)
        if (lastNode) {
          range = range.cloneRange()
          range.setStartAfter(lastNode)
          range.collapse(true)
          sel.removeAllRanges()
          sel.addRange(range)
        }
      }
    },
    createExpressText () {
      const newExpressArr = this.express.map((item) => {
        const valItem = this.valArr.find((item2) => {
          return item2.key === item
        })
        if (valItem) {
          return valItem.text
        } else {
          return item
        }
      })
      return newExpressArr.join('')
    },
    test () {
      // if (this.readonly) {
      //   return
      // }
      // this.showCon = !this.showCon
      console.log(this.editorRef.innerHTML)
      console.log(this.editorRef.innerText)
    },
    symbolClick (item) {
      if (item.key === 'del') {
        this.express.pop()
      } else {
        this.express.push(item.key)
      }
    },
    valClick (item) {
      this.express.push(item.key)
    },
    validata (isshowmsg = true) {
      const newExpressArr = this.express.map((item) => {
        if (item.indexOf('$') >= 0) {
          return 'Number(1)'
        } else {
          return item
        }
      })
      const newExpress = newExpressArr.join('')
      // console.log(newExpressArr)
      // console.log(newExpress)

      let msg = ''
      if (!newExpressArr.length) {
        msg = '请输入表达式。'
      } else {
        try {
          /* eslint-disable no-eval */
          eval(newExpress)
        } catch (err) {
          // console.error(err)
          msg = this.createExpressText() + ' 该表达式不合法，请重新输入。'
        }
      }

      if (msg) {
        if (isshowmsg) {
          this.$message.error(msg)
        }
      } else {
        if (isshowmsg) {
          this.$message.success('恭喜您，该表达式合法。')
        }
      }
      return msg
    }
  }
}
</script>
