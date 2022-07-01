

// TODO 引入样式文件，注意左右样式文件引用必需全部放入这里进行管理，引擎会自动根据二开控件所需的样式文件进行shadow处理
import 'element-ui/lib/theme-chalk/index.css'
// 负责渲染的vue控件
import Render from './render'
// 创建shadowView
export default XtWeb.Engine.UI.createShadowView(Render)