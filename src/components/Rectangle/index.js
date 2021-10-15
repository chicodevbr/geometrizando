import React from 'react';

class Rectangle extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div
          style={{
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
          }}
          className="rectangle"
        ></div>
      </div>
    );
  }
}

export default Rectangle;
