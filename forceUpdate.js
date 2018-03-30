import * as React from 'react'

import * as ReactDom from 'react-dom'

var obj={text:1}
class ForceUpdate extends React.Component {
    constructor(props, content) {
        super(props)
        window.t=this
        console.log('ForceUpdate component constructor')
        this.state = {
            text:1
        }
    }
    componentWillReceiveProps(){
        console.log(arguments.length,'ForceUpdate componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log(arguments.length, 'ForceUpdate shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log(arguments.length, 'ForceUpdate componentWillUpdate')
    }
    componentDidUpdate(){
        console.log(arguments.length, 'ForceUpdate componentDidUpdate')
    }
    componentWillMount() {
        console.log('ForceUpdate component will mount')
    }
    render() {
        console.log("ForceUpdate component render")
        return (<h1>props:{this.props.text}||state:{this.state.text}||other:{obj.text}</h1>)
    }
    componentDidMount() {
        console.log('ForceUpdate component did mount')
    }
    componentWillUnmount() {
        console.log('ForceUpdate component will unmount')
    }
}

class Div extends React.Component {
    constructor(props, content) {
        super(props)
        console.log('component constructor')
        this.state = {
            text: 1,
            show: true
        }
    }
    componentWillReceiveProps() {
        console.log(arguments.length, 'componentWillReceiveProps')
    }
    shouldComponentUpdate() {
        console.log(arguments.length, 'shouldComponentUpdate')
        return true
    }
    componentWillUpdate() {
        console.log(arguments.length, 'componentWillUpdate')
    }
    componentDidUpdate() {
        console.log(arguments.length, 'componentDidUpdate')
    }
    componentWillMount() {
        console.log('component will mount')
    }
    render() {
        console.log("component render")
        return (
            <div>
                <h3>{obj.text}</h3>
                {this.state.show&&<ForceUpdate text="p"/>}
            </div>
        )
    }
    componentDidMount() {
        console.log('component did mount')
    }
    componentWillUnmount() {
        console.log('Div component will unmount')
    }
}
// 创建虚拟Dom
window.React=React
var demo = ReactDom.render(<Div text={obj.text}/>, document.getElementById('main'),function(){
    console.log('ReactDom render')
})
setTimeout(() => {
    obj={text:100}
    demo.setState({
        show: false
    })
    setTimeout(() => {
        obj = { text: 1000 }
        demo.setState({
            show: true
        })
    },3000)
    return
    // ReactDom.render(<Div text={obj.text} />, document.getElementById('main'), function () {
    //     console.timeEnd('forceUpdate')
    // })
    // return
    demo.forceUpdate(function(){
        console.timeEnd('forceUpdate')
    })
}, 3000);