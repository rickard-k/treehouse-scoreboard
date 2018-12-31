import React from 'react';
import { Consumer } from './Context'
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      { ({ players }) => {
        return (
          <>
            {players.map( (player, index) =>
              <Player 
                key={player.id.toString()} 
                index={index}       
              />
            )}
          </>
        );
      } }
    </Consumer>
  );
}

export default PlayerList;