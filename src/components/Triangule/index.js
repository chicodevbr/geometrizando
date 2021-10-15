import React from 'react';

class Triangule extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div
          style={{ borderBottomColor: this.props.color }}
          className="triangule"
        ></div>
      </div>
    );
  }
}

export default Triangule;
