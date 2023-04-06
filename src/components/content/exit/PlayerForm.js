import React from 'react';

export default function PlayerForm() {
  return (
    <form>
      <label htmlFor="playerName">Enter your name:</label>
      <input type="text" placeholder="Peter Parker" />
      <button type="submit" onClick={(event) => event.preventDefault()}>
        Submit
      </button>
    </form>
  );
}
