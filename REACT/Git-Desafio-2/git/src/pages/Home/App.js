import React, { Component } from 'react';
import '../Home/App.css';

import Axios from 'axios';
import { thisExpression } from '@babel/types';


class App extends Component {
  constructor() {
    super();
    this.state = {
      repositorios: [],
      erro: '',
      usuario: '',
      id: '',
      descricao: '',
      nome: '',
      criacao: '',
      tamanho: ''
    };
  }

  componentDidMount() {
    this.listarCategoria();
  }

  armazenarUser = (event) => {
    this.setState({ usuario: event.target.value })
  }

  buscarRepositorio = (event) => {
    event.preventDefault();


    Axios.get('https://api.github.com/users/' + this.state.usuario + '/repos')
      .then(response => response.json())
      //   if (response.status === 200) {
      //     this.setState({
      //       id: response.data.id,
      //       nome: response.data.full_name,
      //       descricao: response.data.description,
      //       criacao: response.data.created_at,
      //       tamanho: response.data.size,
      //     })
      //   } else {
      //     console.log("Erro")
      //   }
      // })
      .then(data => this.setState({repositorios: data}))
      console.log(data)
      .catch(erro => {
        this.setState({ erro: "Usuario Não Encontrado" });
        console.log(erro);
      });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 style={{ textAlign: "center" }} >Buscar Repositorios</h1>

          <div className="item">
            <input
              placeholder="Nome De Usuario Git"
              type="text"
              name="Nome"
              onChange={this.armazenarUser}
              value={this.state.usuario}
            />
            <button onClick={this.buscarRepositorio}>Enviar</button>
            <p
              style={{ color: "red", textAlign: "center" }}
            >
              {this.state.erro}
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
