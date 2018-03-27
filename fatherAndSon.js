import * as React from 'react'

import * as ReactDom from 'react-dom'

class Father extends React.Component {
    constructor(props,content) {
        console.log(arguments)
        super(props)
        this.state = {
            text: this.props.text,
            sonWords:'',
            giveson:''
        }
    }
    render() {
        console.log("father render")
        return (<div><h3>父组件的状态：{
            this.state.text
        }</h3>
        <p>子组件传来的消息:<span>{this.state.sonWords}</span></p>
        < Son yourFather = {
            this
        }
        text = {
            this.state.giveson
        }
        />
        </div>)
    }
}
class Son extends React.Component {
    updateFather(){
        this.props.yourFather.setState({
            text: this.props.yourFather.state.text+1 
        })
    }
    giveWordsToFather(){
        //dom操作写法（不建议）
        /*
        var input = document.getElementById('inp')
        var words = 'value' in input?input.value:''
        this.props.yourFather.setState({
            sonWords: words
        },function(){
            input.value=''
        })*/
        var input = this.refs.inp
        this.props.yourFather.setState({
            sonWords: input.value
        }, function () {
            input.value = ''
        })
    }
    render() {
        console.log('son render')
        return (<div><h3>这里是子组件</h3>
            <p onClick={()=>{
                this.updateFather()
            }}>点一下跟新我父组件的状态</p>
            <input id='inp' ref="inp" type='text' /><button onClick={()=>{
                this.giveWordsToFather()
            }
            }>传给父组件</button>
        </div>)
    }
}
var f=new Father({text:1},null)
var jsx = f.render()
var c= <Father x={1}/>
console.log(c)
console.log(jsx)
ReactDom.render(c, document.getElementById("main"))
// ReactDom.crea//
return
window.f=(function(){
    var value=1
    function fn() {
        return value
    }
    fn.set=function(v){
        value=v
    }
    return fn

})()
var f=window.f
var t = ReactDom.render(<Father text={f()}/>, document.getElementById("main"))
window.t=t