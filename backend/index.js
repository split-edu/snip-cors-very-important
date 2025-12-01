const express = require('express');
const cors = require('cors');

const app = express();

function corsPostavke(req, callback) {
  callback(null, { origin: 'http://localhost:5173' });
}

app.use(cors(corsPostavke));
app.use(express.json());

app.get('/api/movies', (req, res) => {
  res.send([
    {
      id: 101,
      name: 'Avatar: vatra i pepeo',
      genre: 'Znanstvena fantastika',
      description: 'Film će otkriti dosad neviđene dijelove Pandore, ovaj put gledatelji će upoznati misteriozni narod Ash People, ratobornu zajednicu koja živi u opasnim, vulkanskim krajevima planeta.'
    },
    {
      id: 102,
      name: 'Vječnost',
      genre: 'Drama',
      description: 'U zagrobnom životu, gdje svaka duša ima samo jedan tjedan za odluku gdje će provesti vječnost, Joan (Elizabeth Olsen) suočava se s nemogućim izborom: mora birati između muškarca (Miles Teller) s kojim je dijelila cijeli svoj život i svoje prve ljubavi (Callum Turner), koji je prerano umro i desetljećima čekao njezin dolazak.'
    },
    {
      id: 103,
      name: 'Pun gas',
      genre: 'Akcijski',
      description: 'Najtalentiranijih 10 vozača Europe natjecat će se u nevjerojatnoj utrci u kojoj mogu osvojiti i novčanu nagradu i sve automobile koji sudjeluju.'
    },
    {
      id: 104,
      name: 'Majstori iluzije 3: Sad me vidiš, sad me ne vidiš',
      genre: 'Triler',
      description: 'Treći nastavak hit-sage o vrhunskim iluzionistima briše crtu između stvarnosti i obmane – svaki trik nadmašuje onaj prethodni, a najveće iznenađenje nikada nije ono koje očekujete.'
    },
    {
      id: 105,
      name: 'Trkač',
      genre: 'Triler',
      description: 'U distopijskoj bliskoj budućnosti, najpopularniji televizijski show nije talent-natjecanje — već borba za goli život — okuplja Trkače, očajne kandidate koji 30 dana moraju preživjeti lov profesionalnih ubojica.'
    }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server sluša zahtjeve na portu ${PORT}`);
});
