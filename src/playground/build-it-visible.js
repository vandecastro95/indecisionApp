let options = ["Show details", "Hide details"];
let x = 0;

let visibility = false;
toggleVisibility = () => {
  visibility = !visibility;
};
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onCLick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. you can see these </p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
