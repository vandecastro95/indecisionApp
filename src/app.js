// babel src/app.js --out-file=public/scripts/app.ks --presets=env,react --watch
class IndecisionApp extends React.Component {
  render() {
    const app = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: ["thing one", "thing two", "thing three", "thing four"]
    };
    
    return (
      <div>
        <Header app={app} />
        <Action />
        <Options options={app.options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.app.title}</h1>
        <h2>{this.props.app.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlepick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
