<template>
  <div class="xt-daliintegral" :style="viewStyle">
    <div v-for="(item, index) in ruleList" :key="index">
      <div class="xt-daliintegral-block">
        <div class="xt-daliintegral-section">
          <span class="xt-daliintegral-section-title" style="text-align: left;font-size: 16px">规则 {{ index + 1 }}</span>
          <div class="xt-daliintegral-section-con" style="text-align: right;">
            <el-button type="info" size="small" icon="plus" @click="addRule()" :disabled="readonly">新增规则</el-button>
            <el-button type="danger" size="small" icon="delete" v-if="index > 0" @click="delRule(index)"
              :disabled="readonly">删除规则</el-button>
          </div>
        </div>

        <div class="xt-daliintegral-line"></div>

        <div class="xt-daliintegral-trigger" v-for="(triggerItem, triggerIndex) in item.triggerConditions"
          :key="triggerIndex">
          <div class="xt-daliintegral-filter">
            <div class="xt-daliintegral-trigger-del">
              <el-button type="danger" size="small" icon="minus" @click="delTrigger(index, triggerIndex)"
                :disabled="readonly"></el-button>
            </div>
            <div class="xt-daliintegral-filter-relation">
              <div class="xt-daliintegral-filter-relation-top"></div>
              <el-button size="small" round class="xt-daliintegral-filter-relation-txt" @click="filterTypeChange(item)"
                :disabled="readonly">{{ item.typeId === 'OR' ? '或(OR)' : '且(AND)' }}
              </el-button>
              <div class="xt-daliintegral-filter-relation-bottom"></div>
            </div>
            <div class="xt-daliintegral-filter-content">
              <!--  :key="filterIndex" -->
              <div v-for="(filterItem, filterIndex) in triggerItem" :key="filterIndex"
                class="xt-daliintegral-filter-item">

                <el-select v-model="filterItem.entityAttr" placeholder="请选择" size="small" filterable
                  @change="entityChange($event, index, triggerIndex, filterIndex)" style="width: 40%;"
                  :disabled="readonly">
                  <el-option v-for="(optionsItem, optionsIndex) in entityOptions" :key="optionsIndex"
                    :label="optionsItem.text" :value="optionsItem.key"></el-option>
                </el-select>

                <el-select v-model="filterItem.operation" placeholder="请选择" size="small" filterable style="width: 20%;"
                  :disabled="readonly">
                  <el-option v-for="(itemOperation, operationIndex) in filterItem.operationOptions"
                    :key="operationIndex" :label="itemOperation.text" :value="itemOperation.key" />
                </el-select>

                <el-input v-if="filterItem.compareType === '1' || filterItem.compareType === ''"
                  v-model="filterItem.compareValue" placeholder="请输入" size="small" style="width: 30%;"
                  :disabled="readonly" />
                <el-select v-if="filterItem.compareType === '2'" clearable v-model="filterItem.compareValue"
                  placeholder="请选择" size="small" filterable style="width: 30%;" :disabled="readonly">
                  <el-option v-for="(itemCompare, compareIndex) in filterItem.compareOptions" :key="compareIndex"
                    :label="itemCompare.text" :value="itemCompare.key" />
                </el-select>
                <!-- {{ filterItem.compareType }} -->

                <el-button v-if="filterIndex > 0" size="small" type="text" icon="delete"
                  @click="delFilter(index, triggerIndex, filterIndex)" :disabled="readonly">删除
                </el-button>
              </div>
              <div class="xt-daliintegral-filter-item">
                <el-button type="info" size="small" icon="plus" @click="addFilter(index, triggerIndex)"
                  :disabled="readonly"></el-button>
              </div>
            </div>
          </div>
          <div class="xt-daliintegral-trigger-divid" v-if="triggerIndex < item.triggerConditions.length - 1">
            <span class="xt-daliintegral-trigger-divid-text">或(OR)</span>
          </div>
          <div class="xt-daliintegral-trigger-add" v-if="triggerIndex === item.triggerConditions.length - 1">
            <el-button type="info" size="small" icon="plus" @click="addTrigger(index)" :disabled="readonly">新增触发条件
            </el-button>
          </div>
        </div>

        <div class="xt-daliintegral-section">
          <span class="xt-daliintegral-section-title"><span style="color: red">*</span>规则简述：</span>
          <div class="xt-daliintegral-section-con">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="item.description" size="small"
              style="width: 100%;" :disabled="readonly"></el-input>
          </div>
        </div>

        <div class="xt-daliintegral-section">
          <span class="xt-daliintegral-section-title"><span style="color: red">*</span>获得积分：</span>
          <div class="xt-daliintegral-section-con">
            <xt-daliintegral-calculator v-model="item.integralExpression" :valArr="variableOptions" ref="calculator"
              :readonly="readonly"></xt-daliintegral-calculator>
          </div>
        </div>
      </div>

      <div class="xt-daliintegral-divid" v-if="index < ruleList.length - 1">
        <!-- <span class="xt-daliintegral-divid-text">或(OR)</span> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.xt-daliintegral {
  padding: 30px;
  background-color: #FFF;
}
.xt-daliintegral-block {
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}
.xt-daliintegral-section {
  margin: 10px 0;
  display: flex;
}
.xt-daliintegral-section-title {
  align-self: center;
  flex: none;
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  width: 110px;
  text-align: right;
  margin-right: 10px;
  line-height: 30px;
  color: #333;
  vertical-align: top;
}
.xt-daliintegral-section-con {
  flex: 1;
}
.xt-daliintegral-section-textarea {
  display: block;
  resize: vertical;
  padding: 5px 7px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  color: #1f2d3d;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
}
.xt-daliintegral-section-textarea::placeholder{
  color: #97a8be;
}
.xt-daliintegral-section-textarea:hover {
  border-color: #8391a5;
}
.xt-daliintegral-section-textarea:focus {
  outline: 0;
  border-color: #20a0ff;
}

.xt-daliintegral-line {
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}
.xt-daliintegral-divid {
  text-align: center;
  position: relative;
  line-height: 20px;
  height: 20px;
  margin: 20px 0;
}
.xt-daliintegral-divid:before {
  content: "";
  display: block;
  position: relative;
  top: 10px;
  background-color: #ddd;
  height: 1px;
}
.xt-daliintegral-divid-text {
  background-color: #FFF;
  padding: 0 10px;
  position: relative;
}

.xt-daliintegral-trigger {
  margin: 20px;
}
.xt-daliintegral-trigger-del {
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xt-daliintegral-trigger-divid {
  text-align: center;
  position: relative;
  line-height: 20px;
  height: 20px;
  margin: 20px 0;
}
.xt-daliintegral-trigger-divid:before {
  content: "";
  display: block;
  position: relative;
  top: 10px;
  background-color: #ddd;
  height: 1px;
}
.xt-daliintegral-trigger-divid-text {
  background-color: #FFF;
  padding: 0 10px;
  position: relative;
}

.xt-daliintegral-filter {
  display: flex;
  align-items: stretch;
  /* margin-left: 20px;
  padding-left: 10px; */
  border-left: 3px solid #608fe9;
  margin-bottom: 20px;
}
.xt-daliintegral-filter-relation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
}
.xt-daliintegral-filter-relation-txt {
  flex: none;
  align-self: center;
  width: 70px;
}
.xt-daliintegral-filter-relation-top {
  flex: 1;
  margin-left: 40px;
  margin-top: 20px;
  width: 45px;
  border-top: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
}
.xt-daliintegral-filter-relation-bottom {
  flex: 1;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 45px;
  border-bottom: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
}

.xt-daliintegral-filter-content {
  flex: 1;
}
.xt-daliintegral-filter-item {
  /* background-color: #f60; */
  padding: 5px 0;
}
</style>

<script>
/* eslint-disable no-template-curly-in-string */
import { cloneDeep, get } from 'lodash-es'
import u from './util'
import XtWeb from 'xtion-web'
import calculator from './calculator.vue'
// import dayjs from 'dayjs'

// console.error(XtWeb)

export default {
  name: 'daliintegral',
  mixins: [XtWeb.Engine.UI.View],
  components: {
    'xt-daliintegral-calculator': calculator
  },
  data () {
    return {
      ruleList: [
        cloneDeep(u.oneRule)
      ],
      entityOptions: [],
      variableOptions: [
        // {
        //   key: '${xxxx}',
        //   text: '${xxxx}'
        // },
        // {
        //   key: '${number}',
        //   text: '${数量}'
        // },
        // {
        //   key: '${amount}',
        //   text: '${金额}'
        // }
      ],
      ruleType: ''
    }
  },
  computed: {
    readonly () {
      return this.logicExpression(this.viewRule).readonly
      // return false
    }
  },
  watch: {},
  methods: {
    findSelectEntity (key) {
      const selectItem = this.entityOptions.find((item) => {
        return item.key === key
      })
      return cloneDeep(selectItem)
    },
    getView (type, getter) {
      // console.log(type, getter)
      // debugger
      const ruleList = cloneDeep(this.ruleList)
      // console.log(ruleList)
      ruleList.forEach((item) => {
        delete item.variable
        item.ruleType = this.ruleType
        item.triggerConditions.forEach((item2) => {
          item2.forEach((item3) => {
            delete item3.operationOptions
            delete item3.compareOptions
            delete item3.compareType
          })
        })
      })
      console.log(ruleList)
      return JSON.stringify(ruleList)
    },
    setView (data, type, setter) {
      console.log(data, type, setter)
      if (setter) {
        const component = get(setter, 'ctrl.component', 'value')
        type = component
      }
      if (type === 'value' || !type) {
        let value = data ? JSON.parse(data) : [
          cloneDeep(u.oneRule)
        ]
        // 兼容triggerConditions旧一维数组
        value.forEach((item) => {
          const firstItem = get(item, 'triggerConditions[0]')
          if (!Array.isArray(firstItem)) {
            item.triggerConditions = [
              cloneDeep(item.triggerConditions)
            ]
          }
        })
        this.ruleList = value
      } else if (type === 'entityOptions') {
        // this.entityOptions = data
        this.setEntityOptions(data)
      } else if (type === 'variableOptions') {
        this.variableOptions = data
      } else if (type === 'ruleType') {
        this.ruleType = data
      }
    },
    async setEntityOptions (newValue) {
      // console.log(newValue, this.entityOptions)
      for (let i = 0, len = newValue.length; i < len; i++) {
        if (newValue[i].modelLogicCode && !newValue[i].compareOptions) {
          newValue[i].compareOptions = await this.loadCompareOptions(newValue[i].modelLogicCode)
        } else {
          newValue[i].compareOptions = newValue[i].compareOptions || []
        }
      }
      // console.log(newValue)
      // debugger
      // debugger
      if (this.entityOptions.length !== 0 && JSON.stringify(newValue) !== JSON.stringify(this.entityOptions)) {
        this.ruleList = [
          cloneDeep(u.oneRule)
        ]
        this.entityOptions = newValue
      } else {
        this.entityOptions = newValue
        this.ruleList.forEach((item) => {
          item.triggerConditions.forEach((item2) => {
            item2.forEach((item3) => {
              const slectEntity = newValue.find((item4) => {
                return item4.key === item3.entityAttr
              })
              if (slectEntity) {
                item3.operationOptions = slectEntity.operationOptions
                item3.modelLogicCode = slectEntity.modelLogicCode || ''
                item3.compareOptions = slectEntity.compareOptions || []
                item3.compareType = slectEntity.compareType
                item3.inputType = slectEntity.inputType
              } else {
                item3.operationOptions = []
                item3.modelLogicCode = ''
                item3.compareOptions = []
                item3.compareType = ''
                item3.inputType = ''
              }
            })
          })
        })
      }
    },
    loadCompareOptions (modelLogicCode) {
      // debugger
      return this.$http.post(`/api/teapi/dy-biz/${modelLogicCode}`, {}).then(res => {
        console.log(res)
        let data = get(res, 'data.resp_data.data', [])
        data = data.map((item) => {
          return {
            key: item.key,
            text: item.text
          }
        })
        return data
      }).catch(error => {
        console.error(error)
      })
    },
    addRule () {
      this.ruleList.push(cloneDeep(u.oneRule))
    },
    delRule (index) {
      this.ruleList.splice(index, 1)
    },
    addTrigger (index) {
      this.ruleList[index].triggerConditions.push(cloneDeep(u.oneTrigger))
    },
    delTrigger (index, index2) {
      if (this.ruleList[index].triggerConditions.length > 1) {
        this.ruleList[index].triggerConditions.splice(index2, 1)
      } else {
        this.$message.error('至少保留一个触发条件。')
      }
    },
    addFilter (index, index2) {
      this.ruleList[index].triggerConditions[index2].push(cloneDeep(u.oneFilter))
    },
    delFilter (index, index2, index3) {
      this.ruleList[index].triggerConditions[index2].splice(index3, 1)
    },
    filterTypeChange (item) {
      // console.log('filterTypeChange', item)
      // if (item.typeId === 'AND') {
      //   item.typeId = 'OR'
      // } else if (item.typeId === 'OR') {
      //   item.typeId = 'AND'
      // }
    },
    entityChange (e, index, index2, index3) {
      console.log(e, index, index2, index3)
      // debugger
      const filterItem = this.ruleList[index].triggerConditions[index2][index3]
      if (e) {
        const selectEntity = this.findSelectEntity(e)
        if (selectEntity) {
          filterItem.operationOptions = cloneDeep(selectEntity.operationOptions)
          filterItem.compareOptions = cloneDeep(selectEntity.compareOptions || [])
          filterItem.compareType = selectEntity.compareType
          filterItem.inputType = selectEntity.inputType
          filterItem.entityCode = selectEntity.entityCode
          filterItem.attr = selectEntity.attr
          filterItem.attrdesc = selectEntity.attrname

          if (!filterItem.operationOptions.find(item => item.key === filterItem.operation)) {
            filterItem.operation = ''
          }

          if (!filterItem.compareOptions.find(item => item.key === filterItem.compareValue)) {
            filterItem.compareValue = ''
          }
        }
      } else {
        filterItem.operationOptions = []
        filterItem.entityCode = ''
        filterItem.attr = ''
        filterItem.attrdesc = ''
        filterItem.operation = ''
        filterItem.compareType = ''
        filterItem.inputType = ''
        filterItem.compareOptions = []
        filterItem.compareValue = ''
      }
      this.$forceUpdate()
      console.log(this.ruleList)
    },
    isNumber (value) {
      return value ? (Number(value) === +Number(value)) : false
    },
    validata () {
      console.log(this.ruleList)
      let msg = ''
      for (let i = 0, len = this.ruleList.length; i < len; i++) {
        const ruleItem = this.ruleList[i]
        for (let m = 0, leng = ruleItem.triggerConditions.length; m < leng; m++) {
          const triggerItem = ruleItem.triggerConditions[m]
          for (let n = 0, len = triggerItem.length; n < len; n++) {
            if (!triggerItem[n].entityAttr || !triggerItem[n].operation || !triggerItem[n].compareValue) {
              msg = '请完善触发条件'
              break
            } else if (!this.isNumber(triggerItem[n].compareValue)) {
              msg = '对比值必须是数字'
              break
            }
          }
        }
        if (!msg) {
          if (!ruleItem.description || !ruleItem.integralExpression) {
            msg = '请完善规则'
            break
          }
        } else {
          break
        }
      }
      if (!msg) {
        const ref = this.$refs.calculator
        // console.log(ref)
        for (let i = 0, len = ref.length; i < len; i++) {
          msg = ref[i].validata(false)
          if (msg) {
            break
          }
        }
      }
      if (msg) {
        this.$message.error(msg)
        return false
      } else {
        return true
      }
    }
  }
}
</script>
