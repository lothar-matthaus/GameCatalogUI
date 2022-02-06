import axios from "axios";
import { useEffect, useState } from "react";
import HomeList from "./components/HomeList";
import Navbar from "./components/Navbar";
import IGame from "./interfaces/IGame";

function App() {
  const [gameList, setGameList] = useState<IGame[]>([]);
  var route: string = 'Game';

  var button = document.getElementById('buttonSearch');

  if (button != null) {
    button.onclick = (event) => {
      var keyword: string = localStorage.getItem('keyword');

      const request = axios.create({ baseURL: 'https://localhost:5001/api' });

      if (keyword.length > 0) {
        request.get<IGame[]>(route + '/Search/' + keyword).then((response) => {
          if (response.status >= 200 && response.status <= 300)
            setGameList(response.data);
        });
      } else {
        request.get<IGame[]>(route).then((response) => {
          if (response.status >= 200 && response.status <= 300)
            setGameList(response.data);
        });
      }

    }
  }

  useEffect(() => {
    const request = axios.create({ baseURL: 'https://localhost:5001/api' });
    localStorage.clear();
    request.get<IGame[]>(route).then((response) => {
      setGameList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <HomeList gameList={gameList} />
      </header>
    </div>
  );
}

export default App;
