import React from 'react';

export default function PlayAgainButton() {
  return (
    <button type="button" onClick={() => location.reload()}>
      Play Again
    </button>
  );
}
