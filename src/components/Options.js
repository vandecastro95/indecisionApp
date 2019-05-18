import React from 'react';
import Option from './Option'

const Options = (props) => (
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

  export default Options;