import React,{Component} from 'react';
import {Paper, TextField } from '@material-ui/core';

class SearchBar extends Component{
    state = {
        searchTerm: ''
    }
    submit = (e) => { 
       const {searchTerm} = this.state;
       this.props.onFormSubmit(searchTerm);
       e.preventDefault();
       this.setState({
           searchTerm:''
       });
    }
    change = (e) => {
         this.setState({
             searchTerm: e.target.value
         });
     }

   render(){
    return(
     <Paper elevation={6} style={{padding: "25px"}}>
      <form onSubmit={this.submit}>
          <TextField variant="outlined" fullWidth label="Search..." 
                   value={this.state.searchTerm} onChange={this.change} />
      </form>
     </Paper>
    )
  }
}

export default SearchBar;