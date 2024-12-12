import React, { Component } from 'react'
import About from './components/classes/About'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count:0,
      color:"red"
    }
  }
  // useEffect(()=>{
  //   //logic
  // },[])
  // componentDidMount(){
  //   //logic
  //   console.log("Component did mount")
  // }

  // // useEffect(() => {
  // //   //logic 
  // // })
  
  componentDidUpdate(){
    console.log("Component did update")
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextState)
    if(nextState.count > 10){
      return false
    }
    return true
  }
  handleClick=()=>{
    this.setState({count:this.state.count+1})
  }
  render() {
    console.log("render")
    return (
      <div>
        <About name="ADfar" age="27"/>
        <h1 style={{color:this.state.color}}>{this.state.count}</h1>
        <button onClick={()=>this.handleClick()}>Increment</button>
        <button onClick={()=>this.setState({color:"blue"})}>Blue</button>
      </div>
    )
  }
}
