import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CepTable from "./components/CepTable";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [cepToSearch, setCepToSearch] = useState("");
  const [lastCep, setlastCep] = useState("");
  const [adressList] = useState([]);

  async function handleSearch() {
    const requestResult = await fetchCep(cepToSearch);
    if (requestResult.error) {
      alert("Não foi possível encontrar este CEP formato incorreto");
    } else if (requestResult.cep) {
      if (checkCepDuplicate(requestResult)) {
        alert(`O CEP ${requestResult.cep} já se encontra na listagem`);
      } else {
        adressList.push(requestResult);
        setCepToSearch("");
        updateLastCepString();
      }
    } else {
      alert("Nenhuma cidade corresponde a este CEP");
    }
  }

  function checkCepDuplicate(object) {
    return adressList.some((item) => item.cep == object.cep);
  }

  async function fetchCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log("error", error);
      return {
        error: true,
      };
    }
  }

  function updateLastCepString() {
    if (adressList.length > 0) {
      const lastCepObject = adressList[adressList.length - 1];
      const lastCepString = `${lastCepObject.logradouro}, ${lastCepObject.bairro}, ${lastCepObject.localidade}/${lastCepObject.uf} CEP: ${lastCepObject.cep}`;
      setlastCep(lastCepString);
    } else {
      setlastCep("");
    }
  }

  return (
    <div className="App">
      <Container>
        <SearchForm
          lastCep={lastCep}
          cepToSearch={cepToSearch}
          setCepToSearch={setCepToSearch}
          handleSearch={handleSearch}
        />
      </Container>
      <Container>
        <CepTable adressList={adressList} />
      </Container>
    </div>
  );
}

export default App;
