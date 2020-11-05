
import React, { Component } from 'react'






 

class  SearchBar extends React.Component{
    state={term:''}
    onFormSubmit=(event)=>{
       event.preventDefault();
       this.props.onSubmit(this.state.term);
    }
    
    render(){
        return(
            <div >
                 <div className="ui segment ">
                    <form className="ui form"  onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Image search</label>
                            <input className="promt" type="text" placeholder="Search..."
                             value={this.state.term}
                            onChange={e => this.setState({ term:e.target.value})}/>
                           
                        </div>
                       
                    </form>
                    
                    
                </div>
               
               
             </div>
           
           
        )
    }
}


export default SearchBar;