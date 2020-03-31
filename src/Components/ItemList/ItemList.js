import './ItemList.css';
import React from 'react'
const ItemList=(props)=>{
    var {Items,deleteitem}=props;
    if(Items.length>0){

        var  List=Items.map(item=>{
            return(
                <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.id}</span>
                <span onClick={()=>deleteitem(item.id)}>&times;</span>
                </div>
                
            )
        })
    }else{
        var List=<div>no items</div>
    }
  
    
    return(
        <div>{List}</div>
    )
}

export default ItemList;