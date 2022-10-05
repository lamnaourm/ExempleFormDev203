import React, { Component } from "react";

class ExmpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      prenom: "",
      coche: true,
      choix: "c1",
      filiere:'CG'
    };
  }

  handleOnchange = (e) => {
        const name= e.target.name;
        const value= e.target.value;
        const type= e.target.type;

        this.setState({[name]: type==="checkbox" ? e.target.checked :value});
  }
  handleOnsubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnsubmit}>
          Nom :{" "}
          <input
            type="text"
            name='nom'
            value={this.state.nom}
            onChange={this.handleOnchange}
          />
          <br />
          Prenom :{" "}
          <input
            type="text"
            name='prenom'
            value={this.state.prenom}
            onChange={this.handleOnchange}
          />
          <br />
          Coche :{" "}
          <input
            type="checkbox"
            name='coche'
            checked={this.state.coche}
            onChange={this.handleOnchange}
          />
          <br />
          Radio buttons
          <input
            type="radio"
            name="choix"
            checked={this.state.choix === "c1"}
            value="c1"
            onChange={this.handleOnchange}
          />{" "}
          choix 1
          <input
            type="radio"
            name="choix"
            checked={this.state.choix === "c2"}
            value="c2"
            onChange={this.handleOnchange}
          />{" "}
          choix 2
          <input
            type="radio"
            name="choix"
            checked={this.state.choix === "c3"}
            value="c3"
            onChange={this.handleOnchange}
          />{" "}
          choix 3
          <input
            type="radio"
            name="choix"
            checked={this.state.choix === "c4"}
            value="c4"
            onChange={this.handleOnchange}
          />{" "}
          choix 4 <br />
          <select name="filiere" value={this.state.filiere} onChange={this.handleOnchange}>
            <option value="DI">Developpement informatique</option>
            <option value="RI">Reseaux informatique</option>
            <option value="GE">Gestion des entreprise</option>
            <option value="CO">Comptabilite</option>
            <option value="CG">Controle de gestion</option>
          </select>
          <input type="submit" value="spumettre les donnees" />
        </form>
      </div>
    );
  }
}

export default ExmpleForm;
