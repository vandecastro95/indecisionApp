import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
  
    handleAddOption = (e) => {
      e.preventDefault();
      
  
      const option = e.target.elements.option.value.trim();
      e.target.elements.option.value = '';
      if(option) {
        this.props.handleAddtoOption(option)
      }
  
    }
    
    render () {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        </div>
      )
    }
  }