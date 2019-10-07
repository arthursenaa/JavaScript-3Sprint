import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      marcas: [],
      codigo: ""
    };
  }

  Axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
      .then(resposta => resposta.json())
      .then(data => ListaDeMarca(data)),
      .catch(erro => console.log(erro));
  };




  onload = function () {

    let url = '';

    fetch(url)
      .then(resposta => resposta.json())
      .then(data => ListaDeMarca(data))
      .catch(erro => console.log(erro));

    var Nome
    ListaDeMarca(marcas){
      marcas.forEach(element => {
        //console.log(element.nome);

        const elemento = document.createElement('option');
        elemento.textContent = element.nome;
        elemento.value = element.codigo;
        CodigoDaTabela = element.codigo;

        NomeMarca.appendChild(elemento);
      })
    }
  }

  render() {
    return (
      <body>
        <main>
          <label for="Carro"> Escolha Uma Marca</label>
          <select name="Marca" id="Marcas" onchange="TabelaDeMarca()">
          </select>
        </main>
      </body>
    );
  }
}

export default App;
