# Segment koda s upitima prema serveru i CORS

Primjer ilustrira važnost CORS za sigurnost preglednika i utjecaj pri razvoju React aplikacije koja komunicira sa serverom.

**[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) - Cross Origin Resource Sharing - je mehanizam koji omogućava preglednicima regulirati dohvat resursa s različitih domena.**

Pri razvoju React aplikacija koje komuniciraju sa pozadinskim serverima, važno je definirati koje će sve domene React aplikacija imati (ovisno o okruženjima gdje se izvode: lokalno na uređaju, npr. razvojna ili testna okolina).
Tu informaciju važno je podijeliti onom tko održava pozadinski server, kojeg treba konfigurirati tako nek dozvoli pristup upravo klijentskim aplikacijama s danih domena.

U primjeru, React aplikacija se vrti uz pomoć vite na lokalnom računalu, a domena React aplikacije je http://localhost:5173, stoga je server konfiguriran nek prihvaća upite s te domene (vidjeti `backend/index.js`):
```javascript
//...
const app = express();
function corsPostavke(req, callback) {
  callback(null, { origin: 'http://localhost:5173' });//domena React aplikacije
}
app.use(cors(corsPostavke));
//...
```

## Otvorite u StackBlitz editoru

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/split-edu/snip-cors-very-important)

## License

- [GNU AGPL Version 3](./LICENSE)
