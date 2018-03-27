import React from 'react'

import ReactDom from 'react-dom'

class PropsExample extends React.Component {
    render() {
        return (<div><h3>{
            this.props.text
        }</h3>
            <p>3秒之后会更换props</p>
        </div>)
    }
}

var t=ReactDom.render(<PropsExample text={"第一次props"} />, document.getElementById("main"))
console.log(t)//把挂载的组件打印控制台
// 设置定时器设定三秒之后重新渲染
setTimeout(() => {
    ReactDom.render(<PropsExample text={"第二次props"} />, document.getElementById("main"))
}, 3000);