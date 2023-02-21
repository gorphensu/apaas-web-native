<template>
  <div class="xt-calculator">
    <div class="xt-calculator-top" @click="showHandle" :class="{ 'xt-calculator-top-readonly': readonly }">
      <!-- <i class="xt-calculator-express" v-for="(item, index) in express" :key="index">
        {{ item }}
      </i> -->
      {{ expressText }}
    </div>
    <div class="xt-calculator-con" v-show="showCon">
      <div class="xt-calculator-cal">
        <div class="xt-calculator-cal-item" :class="{ 'xt-calculator-cal-item-symbol': item.type === 'symbol', 'xt-calculator-cal-item-0': item.key === '0' }" v-for="(item, index) in calArr" :key="index" @click="symbolClick(item)">
          {{ item.key }}
        </div>
      </div>
      <div class="xt-calculator-r">
        <div class="xt-calculator-r-top">
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
        <el-button type="info" style="color:#fff;background-color:#f3b007;border-color:#f6c039;margin-left: 12px" class="confirmBtn" size="small" @click="showHandle()">确定</el-button>
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
.xt-calculator-top{
  /* background-color: #fcfdff; */
  border: 1px solid #bfcbd9;
  padding: 10px;
  height: 70px;
  font-size: 14px;
  /* font-weight: bold; */
  cursor: pointer;
  overflow: auto;
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
.xt-calculator-r-top {
  line-height: 20px;
  font-weight: bold;
  margin: 10px 10px 0;
  font-size: 14px;
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
      if (newValue !== oldValue) {
        this.express = this.value ? JSON.parse(this.value) : []
      }
    },
    express (newValue, oldValue) {
      console.log('watch express', newValue, oldValue)
      this.$emit('input', JSON.stringify(this.express))
    }
  },
  computed: {
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
  methods: {
    showHandle () {
      if (this.readonly) {
        return
      }
      this.showCon = !this.showCon
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
          msg = this.expressText + ' 该表达式不合法，请重新输入。'
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
