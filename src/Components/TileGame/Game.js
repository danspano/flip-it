import React, { Component } from 'react';
import TileGameBoard from '../GameBoard/TileGameBoard';

class Game extends Component {

  allTilesAreMatched() {

    return this.props.tiles.filter(t => {
      return t.matched
    }).length === this.props.tiles.length;

  }

  gameIsFinished() {
    return this.props.tiles.length && this.allTilesAreMatched();
  }

  render() {

    let winMessage = () => {
      if (this.gameIsFinished())
        return <p>You won!</p>
    }


    if (!this.props.tiles.length || this.gameIsFinished())
      return (
        <div className="header">
          <div className="title">FlipIt</div>
          {winMessage()}
          <div className="playButton" onClick={this.props.onStartGameClick}>Play</div>
        </div>
      );


    return (
      <TileGameBoard tiles={this.props.tiles}></TileGameBoard>
    );


  }
}

export default Game;