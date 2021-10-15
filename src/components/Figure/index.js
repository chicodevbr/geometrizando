import React from 'react';
import Circle from '../Circle';
import Rectangle from '../Rectangle';

import Square from '../Square';
import Triangule from '../Triangule';

class Figure extends React.Component {
  render() {
    if (this.props.type === 'square') {
      return <Square color={this.props.color} title={this.props.title} />;
    } else if (this.props.type === 'circle') {
      return (
        <Circle
          color={this.props.color}
          width={this.props.width}
          height={this.props.height}
          title={this.props.title}
        />
      );
    } else if (this.props.type === 'triangule') {
      return <Triangule color={this.props.color} title={this.props.title} />;
    } else if (this.props.type === 'rectangle') {
      return (
        <Rectangle
          color={this.props.color}
          width={this.props.width}
          height={this.props.height}
          title={this.props.title}
        />
      );
    } else {
      <h2>Choose a figure</h2>;
    }

    return <div />;
  }
}

export default Figure;
