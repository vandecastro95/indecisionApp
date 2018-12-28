
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }


  handleToggleVisibility() {
    this.setState((prevState) => {
      return{
        visibility: !prevState.visibility
      }
    })
  }
  
  render () {
    return (
      <div>
           <h1>Visibility Toggle</h1>
             <button onClick={this.handleToggleVisibility}>
               {this.state.visibility ? "Hide details" : "Show details"}
             </button>
             {this.state.visibility && (
                       <div>
                         <p>Hey. you can see these </p>
                       </div>
                     )}
           </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));



// let options = ["Show details", "Hide details"];
// let x = 0;

// let visibility = false;
// toggleVisibility = () => {
//   visibility = !visibility;
// };
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onCLick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. you can see these </p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
