import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {ChromePicker} from 'react-color'
import './App.css';

function App() {
  const [color,setcolor]=useState('#fff')
 
  const [showpicker,setshowpicker]=useState(false)
  return (
    <div className="App"style={{backgroundColor:`${color}`}}>
     <Button variant="dark"onClick={()=>setshowpicker(showpicker=>!showpicker)}>
        {showpicker? 'Close Color Picker':'Pick A Bg-Color'}
        </Button>
        {showpicker &&
            <ChromePicker
                color={color}
                   onChange={updatedcolor=>setcolor(updatedcolor.hex)}/>}
              {/* <h2>You Picked {color}</h2> */}
    </div>
  );
}

export default App;
