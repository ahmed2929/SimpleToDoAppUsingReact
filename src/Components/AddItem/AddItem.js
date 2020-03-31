import React ,{Component} from 'react';
import './AddItem.css'
class AddItem extends Component{

state={
    name:'',
    age:'',
}
handleChange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
})
}

handleSbmit=(e)=>{
    e.preventDefault();
    
  this.props.addItem(this.state)
  this.setState({
      name:'',
      age:''
  })

}

render(){

    return(
       <div>
        
       <form onSubmit={this.handleSbmit} >
        <input type="text" id="name" onChange={this.handleChange} value={this.state.name}></input>
        <input type="number" id="age" onChange={this.handleChange} value={this.state.age}></input>
        <input type="submit" value="add"></input>
        
       </form>
       
       </div>
    )

}

}

export default AddItem;