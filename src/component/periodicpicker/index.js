/**
# periodicpicker 周期选择

用于选择一个时间周期，例如：每月1号，每年10月3日早上8点，每天早上8:30等等

## UI 示例

根据 combinedunit 所包含单位数量增减选择列

![](images/periodicpicker.png)

## 协议说明

```json
{
    "type": "periodicdicker",
    "combinedunit": "day-minute"
}
```

### combinedunit

支持选择的最小时间单位和最大时间单位，目前支持的单位组合有

| 值    | 标题    | 取值范围 | 取值示例 | 显示示例 |
| ----- | ---- | ---- | ----- | ----- |
| hour | 时 | 0 - 23 | 16 | 每天下午4点 |
| day   | 日期 | 1 - 28 | 16 | 每月16号 |
| month | 月 | 1 - 12 | 10 | 每年10月 |
| hour-minute | 时-分 | hour：0 - 23，minute：0 - 59 | 8:30 | 每天早上8点30 |
| day-minute | 天-分 | day, hour, minute 取值范围同上 | 10 8:30 | 每月10号早上8点30 |
| month-minute | 月-分 | month,day, hour, minute 取值范围同上 | 1-1 23:59 | 每年1月1号晚上11点59分 |
 */
import XtWeb from 'xtion-web'
import PeriodicPicker from './PeriodicPicker.vue'
export default {
  name: 'periodicpicker',
  mixins: [XtWeb.Engine.UI.View],
  render (h) {
    return h(PeriodicPicker)
  }
}
