import React, { Component } from 'react';
import './GameTile.css';

class GameTile extends Component {
  render() {

    let flipperClass = 'flipper';
    let containerClass = 'container';

    if (this.props.tile.selected || this.props.tile.matched)
      flipperClass += ' flipped';

    if (this.props.tile.matched && !this.props.tile.selected)
      containerClass += ' matched';

    let tileSize = {
      width: this.props.size,
      height: this.props.size
    }

    return (
      <div className="GameTile" style={tileSize} onClick={this.props.onClick}>
        <div className={containerClass}>
          <div className={flipperClass}>
            <div className="front"></div>
            <div className="back" style={{ backgroundColor: this.props.tile.color }}></div>
          </div>
        </div>
      </div>
    );
  }
}


export default GameTile;
