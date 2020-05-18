import React, { Component } from 'react';

class BasicInfo extends Component  {
    render(){
        return (
            <div> 
                <ul>
                    {this.props.persons.map((el) =>(
                        <li key = {el.name}>{el.name} , {el.number} , {el.DOB}</li>
                    ))}
                </ul>
             </div>
        )
    }
    
}




export default BasicInfo ; 