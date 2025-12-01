import './App.css'
import { Activity, useEffect, useMemo, useState } from "react";
import axios from "axios";

const dohvatiFilmove = async () => ((await axios.get('http://localhost:3000/api/movies')).data);

function App() {
  const [filmovi, postaviFilmove] = useState([]);
  const prikazFilmova = useMemo(() => filmovi.length > 0 ? 'visible' : 'hidden', [filmovi]);
  const prikazPoruke = useMemo(() => filmovi.length === 0 ? 'visible' : 'hidden', [filmovi]);
  useEffect(() => {
    dohvatiFilmove().then(filmovi => postaviFilmove(filmovi));
  }, []);
  return (
    <>
      <Activity mode={prikazPoruke}>
        <div className="m-2 text-2xl">Loading...</div>
      </Activity>
      <Activity mode={prikazFilmova}>
        <div className="flex flex-col">
          {filmovi.map(film => (
            <div className="mx-2 my-1 bg-teal-500 rounded-xl p-4 hover:bg-teal-400 hover:shadow-lg/30 hover:cursor-pointer" key={film.id}>
              <h1 className="text-4xl text-white">{ film.name }</h1>
              <h4 className="text-xl text-white">{ film.description }</h4>
            </div>
          ))}
        </div>
      </Activity>
    </>
  )
}

export default App
