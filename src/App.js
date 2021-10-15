import React from 'react';
import './App.css';
import Art from './components/Art';

import Figure from './components/Figure';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1 className="title">Geometrizando</h1>
        <Art>
          <Figure type="circle" color="DarkBlue" width="12px" height="12px" />
          <Figure type="rectangle" color="#83580b" width="7px" height="40px" />
          <Figure type="triangule" color="#35d0ba" />
          <Figure type="square" color="#bc2525" />
          <Figure type="circle" color="#66bfbf" />
          <Figure type="rectangle" color="SlateBlue" />
          <Figure type="circle" color="PeachPuff" />
          <Figure type="square" color="#f76b8a" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="rectangle" color="SlateBlue" />
          <Figure type="circle" color="PeachPuff" width="25px" height="25px" />
          <Figure type="square" color="Goldenrod" />
          <Figure
            type="rectangle"
            color="#ffb5b5"
            width="20px"
            height="100px"
          />
          <Figure type="circle" color="#247291" width="11px" height="11px" />
          <Figure type="rectangle" color="#ff5722" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />

          <Figure type="square" color="Goldenrod" />
          <Figure type="circle" color="#f8da5b" width="21px" height="21px" />
        </Art>
        <Art>
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
        </Art>
        <Art>
          <Figure type="circle" color="DarkBlue" width="12px" height="12px" />
          <Figure type="rectangle" color="#83580b" width="7px" height="40px" />
          <Figure type="triangule" color="#35d0ba" />
          <Figure type="square" color="#bc2525" />
          <Figure type="circle" color="DarkBlue" width="12px" height="12px" />
          <Figure type="rectangle" color="#83580b" width="7px" height="40px" />
          <Figure type="triangule" color="#35d0ba" />
          <Figure type="square" color="#bc2525" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="circle" color="DarkBlue" width="12px" height="12px" />
          <Figure type="rectangle" color="#83580b" width="7px" height="40px" />
          <Figure type="triangule" color="#35d0ba" />
          <Figure type="square" color="#bc2525" />
        </Art>
        <Art>
          <Figure type="square" color="#f76b8a" />
          <Figure type="triangule" color="DarkViolet" />
          <Figure type="rectangle" color="SlateBlue" />
          <Figure type="square" color="Goldenrod" />
          <Figure
            type="rectangle"
            color="#ffb5b5"
            width="20px"
            height="100px"
          />
          <Figure type="circle" color="#247291" width="11px" height="11px" />
          <Figure type="circle" color="DarkBlue" width="33px" height="33px" />
          <Figure type="circle" color="DarkBlue" width="33px" height="33px" />
          <Figure type="circle" color="DarkBlue" width="33px" height="33px" />
          <Figure type="circle" color="DarkBlue" width="33px" height="33px" />
          <Figure type="circle" color="#247291" width="11px" height="11px" />
          <Figure type="rectangle" color="#ff5722" />
          <Figure type="circle" color="gray" width="11px" height="11px" />
          <Figure type="circle" color="#247291" width="11px" height="11px" />
          <Figure type="rectangle" color="#ff5722" />
          <Figure type="rectangle" color="blue" />
          <Figure type="circle" color="#ff0000" width="50px" height="50px" />
          <Figure type="triangule" color="#35d0ba" />
          <Figure type="rectangle" color="purple" width="30px" height="5px" />
          <Figure type="circle" color="Chartreuse" width="7px" height="7px" />
          <Figure type="circle" color="Chartreuse" width="7px" height="7px" />
        </Art>
      </div>
    );
  }
}

export default App;
