const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `folk`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `pop`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      artist: `Brian May`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Fill Kirkoryan`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Deacon`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Elton John`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `50 Cent`
      },
    ],
  },
];

