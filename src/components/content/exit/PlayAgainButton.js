import React from 'react';

// Displays the play again button on the final page that reloads the game
export default function PlayAgainButton() {
  return (
    <button type="button" onClick={() => location.reload()}>
      Play Again
    </button>
  );
}
