import React, { Component } from 'react';
import '../Home/App.css';


import { Link } from "react-router-dom";
import Rodape from '../../components/Rodape/Rodape';
import Axios from 'axios';



class App extends Component {
  constructor() {
    super();
    this.state = {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      unidade: '',
      ibge: '',
      gia: '',
      erro: ""

    };
  }

  armazenarCep = (event) => {
    this.setState({ cep: event.target.value })
  }


  buscarPorCep = (event) => {
    event.preventDefault();

    // let url = ("viacep.com.br/ws/"+cep+"/json/")
    //console.log(url)

    Axios.get('http://viacep.com.br/ws/' + this.state.cep + '/json/')

      .then(response => {
        if (response.status === 200) {
          //console.log(response.data)
          // this.props.history.push('/viacep');
          this.setState({
            cep: response.cep,
            logradouro: response.logradouro,
            complemento: response.complemento,
            bairro: response.bairro,
            localidade: response.localidade,
            uf: response.uf,
            unidade: response.unidade,
            ibge: response.ibge,
            gia: response.data.gia,
          })
          console.log(this.state)
        } else {
          console.log("Erro")
        }
      })
      .catch(erro => {
        this.setState({ erro: "CEP Não Encontrado" });
        console.log(erro);
      });
    // Axios.get("viacep.com.br/ws//json/", {
    //   cep: this.state.cep
    // })
    //   .then(data => {
    //     if (data.status === 200) {
    //       localStorage.setItem("link");
    //       this.props.history.push('/Listar');
    //     } else {
    //       console.log("Erroooo")
    //     }
    //   })
    //   .catch(erro => {
    //     this.setState({ erro: "CEP Não Encontrado" });
    //     console.log(erro);
    //   })

    //   console.log(url)
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ textAlign: "center" }} >Enderecos</h1>

          <div className="item">
            <input
              placeholder="CEP"
              type="text"
              name="CEP"
              onChange={this.armazenarCep}
              value={this.state.cep}
            />
            <button onClick={this.buscarPorCep}>Enviar</button>
            <p
              style={{ color: "red", textAlign: "center" }}
            >
              {this.state.erro}
            </p>
          </div>
          {/* <main className="conteudoPrincipal"> */}
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Localidade</th>
                <th>UF</th>
                <th>Unidade</th>
                <th>IBGE</th>
                <th>GIA</th>
              </tr>
            </thead>

            {/* <tbody>
                {this.state.lista.map(element => {
                  // return (
                    <tr key={element.cep}>
                      <td>{element.logradouro}</td>
                      <td>{element.complemento}</td>
                      <td>{element.bairro}</td>
                      <td>{element.localidade}</td>
                      <td>{element.uf}</td>
                      <td>{element.unidade}</td>
                      <td>{element.ibge}</td>
                      <td>{element.gia}</td>
                    </tr>
                  // );
                })}
              </tbody> */}
          </table>
          {/* </main> */}
        </header>

        {/* <Rodape /> */}
      </div>
    );
  }
}

export default App;