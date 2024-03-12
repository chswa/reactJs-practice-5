// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state={
    isSubscribed:true,text:"subscribe"
  }

  render() {
    
  const {isSubscribed,text}=this.state
    
    if (isSubscribed===true){
      this.setState((prevState) => ({ isSubscribed:false,text:"subscribed" }))
      
       
    }else{
      this.setState((prevState) => ({ isSubscribed:true,text:"subscribe" }))
      
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" onClick={this.subscribeButton}>{text}e</button>
      </div>
    )
  }
}

export default Welcome
