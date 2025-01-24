import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import { getUsinas, getData } from './services/usinas.js';

function App() {
  const [usinas, setUsinas] = useState([]);
  const [dataAtualizacao, setDataAtualizacao] = useState([]);

  //Renderização:
  useEffect(() => {
    fetchUsinas();
  }, []);

  //Buscar Usinas API:
  async function fetchUsinas() {
    const usinasAPI = await getUsinas();
    const dataAPI = await getData();
    setUsinas(usinasAPI.usinas);
    setDataAtualizacao(dataAPI.dataAtualizacao[0].data);
  }

  return (
    <div className="App">
      <Header />
      <div className="content-usinas">
        <h2 className="texto-usinas">
          Ranking das 5 maiores usinas, por Potência Instalada (kW):
        </h2>
        <ul className="lista-usinas">
          {usinas.map((usina, index) => (
            <li className="usina">
              <b>
                #{index + 1} - {usina.SigTipoGeracao} {usina.NomEmpreendimento}
              </b>
              : {usina.MdaPotenciaOutorgadaKw} [kW]
            </li>
          ))}
        </ul>
      </div>
      <Footer dataAtualizacao={dataAtualizacao} />
    </div>
  );
}

export default App;
