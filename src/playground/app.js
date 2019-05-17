//stateless functional component

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      option: props.option
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddtoOption = this.handleAddtoOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => ({ option: [] }))
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      option: prevState.option.filter((x) => {
        return option.option !== x;
      })
    }))
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

  handleAddtoOption(option) {

    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.option.indexOf(option) > -1 ) {
      return 'This option already exists'
    }

    this.setState( prevState => ({ option: prevState.option.concat(option) }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.option.length);
    const option = this.state.option[randomNum];
    alert(option);
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header 
        subtitle= {subtitle}
        />
        <Action 
        handlePick = {this.handlePick}
        hasOption = {this.state.option.length > 0}
        />
        <Options 
        option= {this.state.option}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption 
        handleAddtoOption = {this.handleAddtoOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  option: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2> }
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => {
  return (
    <div>
      <button
      disabled={!props.hasOption}
      onClick={props.handlePick}
      >
        What should i do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button
      onClick={props.handleDeleteOptions}
      >
      Remove All
      </button>
      {props.option.length === 0 && <p>Please add an option to get started!</p>}
      {props.option.map(element =>
      <Option 
      option={element} 
      key={element} 
      handleDeleteOption={props.handleDeleteOption}/>
        )}
      
    </div>
  )
}


const Option = (props) => {
  return (
    <div>
      {props.option}
      <button 
      onClick={(e) => {
        props.handleDeleteOption(props)
      }}
      >Remove</button>
    </div>
  )
}

class AddOption extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))