import './App.css';
import React, { useEffect, useState } from "react";
import DropdownList from "react-widgets/DropdownList";

let colors = ['Orange', 'Red', 'Blue', 'Purple'];

function Example() {
  const [value, setValue] = useState('orange')

  return (
    <div className="App-header">
        <DropdownList
        data={colors}
        value={value}
        onChange={value => setValue(value)}
        />
    </div>
  )
}

<Example/>;

export default Example;