import Vue from 'vue'

import { 
    Row,
    Col,
    Button, 
    Progress,
    Input,
    Message,
    Pagination,
    Radio,
    Checkbox,
    InputNumber,
    MessageBox,
    Empty,
    Tabs,
    TabPane,
    Avatar,
    Carousel,
    CarouselItem
  } from 'element-ui'
  
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(InputNumber)
Vue.use(Empty)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Avatar)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox

