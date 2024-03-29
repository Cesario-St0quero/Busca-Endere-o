import {useState} from 'react'
import {FiSearch} from 'react-icons/fi';
import './style.css';
import api from './services/api';

function App() {
  const [input,setInput] = useState('')
  const [cep, setCep] = useState({});
 
  async function handleSearch(){ 
    if(input === ''){
        alert("Preencha um cep!")
        return;
    }
    try{
      const response = await api.get(`${input}/json`);
      console.log(response)
      setCep(response.data)
      setInput("")
    }catch{
      alert("Erro ao buscar Cep!")
    }
  }
  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.logradouro}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>

      </main>
    </div>
  );
}

export default App;

