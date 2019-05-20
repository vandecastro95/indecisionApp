import React from 'react';
import AddOption from './AddOption.js'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

//stateless functional component

export default class IndecisionApp extends React.Component {

    state = {
      option: [],
      selectedOption: undefined
    }
  
    handleDeleteOptions = () => {
      this.setState(() => ({ option: [] }))
    }
  
    handleDeleteOption = (option) => {
      this.setState((prevState) => ({
        option: prevState.option.filter((x) => {
          return option.option !== x;
        })
      }))
    }

    handleAddtoOption = (option) => {
  
      if(!option) {
        return 'Enter valid value to add item';
      } else if (this.state.option.indexOf(option) > -1 ) {
        return 'This option already exists'
      }
  
      this.setState( prevState => ({ option: prevState.option.concat(option) }))
    }

    handleOkay = () => {
      this.setState({
        selectedOption: undefined
      })
    }

    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.option.length);
      const option = this.state.option[randomNum];
      this.setState({
        selectedOption: option
      })
    }
  
    componentDidMount () {
      try {
      const json = localStorage.getItem('options');
      const option = JSON.parse(json);
      console.log(option)
  
      if(option) {
      this.setState(() => ({option}) )
      }
  
      } catch (e) {
        //throw nothing at all
      }
    }
  
    componentDidUpdate (prevState) {
        const json = JSON.stringify(this.state.option);
        localStorage.setItem('options', json);
    }
  
    componentWillUnmount () {
      console.log('component unmounted!')
    }
  
    render() {
      const subtitle = "Put your life in the hands of a computer";
      return (
        <div>
          <Header 
          subtitle= {subtitle}
          />
          <div className="container">
          <Action 
          handlePick = {this.handlePick}
          hasOption = {this.state.option.length > 0}
          />
          <div className="widget">
          <Options 
          option= {this.state.option}
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOption 
          handleAddtoOption = {this.handleAddtoOption}
          />
          </div>
          </div>
          <OptionModal 
          selectedOption = {this.state.selectedOption}
          handleOkay = {this.handleOkay}
          />
        </div>
      )
    }
  }
  
  IndecisionApp.defaultProps = {
    option: []
  };