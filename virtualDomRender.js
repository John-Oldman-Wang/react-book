import * as React from 'react'

import * as ReactDom from 'react-dom'

class Demo extends React.Component {
    constructor(props,content){
        super(props)
        console.log('component constructor')
        this.state={}
    }
    componentWillMount(){
        console.log('component will mount')
    }
    render(){
        console.log("component render")
        return (<h1>hello react</h1>)
    }
    componentDidMount(){
        console.log('component did mount')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
}
// 创建虚拟Dom
var virtualDom = React.createElement(Demo,null)

//挂载组件，也就是渲染视图 获得组件
var demo = ReactDom.render(virtualDom,document.getElementById('main'))

//设置三秒后销毁组件
setTimeout(() => {
    ReactDom.unmountComponentAtNode(document.getElementById('main'))
}, 3000);