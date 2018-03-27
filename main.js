import React from 'react'

import ReactDom from 'react-dom'

class StateExample extends React.Component{
    constructor(){
        super()
        this.state={
            text: 'i like it'
        }
    }
    render(){
        return (<div><h3>{
            this.state.text
        }</h3>
        <p>3秒之后会刷新状态</p>
        </div>)
    }
}

var t=ReactDom.render(<StateExample />,document.getElementById("main"))
console.log(t)//把挂载的组件打印控制台
// 设置定时器设定三秒之后更新组件状态
setTimeout(() => {
    t.setState({
        text: 'i dont like it'
    })
}, 3000);