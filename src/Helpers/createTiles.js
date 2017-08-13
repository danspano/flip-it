import shuffle from './shuffle';

const createTiles = (amount) => {
  let tiles = [];
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'indigo', 'violet',
    'red', 'green', 'blue', 'orange', 'yellow', 'purple', 'indigo', 'violet'];

  while (tiles.length < amount)
    tiles.push({
      key: tiles.length,
      color: colors[tiles.length],
      selected: false,
      matched: false
    })

  shuffle(tiles)

  return tiles;
}

export default createTiles;