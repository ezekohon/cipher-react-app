import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';
import firebase from '../js/firebase';
import { LinkContainer } from 'react-router-bootstrap';

class UserInput extends React.Component {
	constructor() {
    super();
    this.state = {
      value: '',
      shift: 3,
      encrypted: 'dss',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleEncryptedChange = this.handleEncryptedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  convertCypher(shift) {
    const cypher = (encodedStr) => {

      //if (!encodedStr) encodedStr = 'Enter a word or phrase to encode';

      //const shift = 13;
      const codeArr = encodedStr.split('');

      return codeArr.map(letter => {
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        	return String.fromCharCode((letter.charCodeAt() - 65 + shift) % 26 + 65);
        	return '';
        } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
        	return String.fromCharCode((letter.charCodeAt() - 97 + shift) % 26 + 97);
        	return '';
        }
        return letter;
      }).join('');
    };

    return cypher(this.state.value);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      encrypted: this.convertCypher(this.state.shift),
    });
  }

  handleKeyChange(event) {
  	this.setState({
  		shift: parseInt(event.target.value)
  	})
  }

  handleEncryptedChange(event) {
  	this.setState({
			encrypted: this.convertCypher(this.state.shift),
  	})
  }

  handleSubmit(e) {
  	e.preventDefault();
  	const textRef = firebase.database().ref('text');
  	const text = {
    input: this.state.value,
    encrypted: this.state.encrypted
  	}
  	textRef.push(text);
  	this.setState({
  		value: '',
      shift: 3,
      encrypted: '',
  	})
  }


	render(){
		return(
			<div className="parent">
        <div className="">
          <h3 className="text-center">Texto a encriptar</h3>
          <textarea 
          type="text" 
          className="md-input"
          placeholder={this.state.value}
          onChange={this.handleChange.bind(this)} />
        </div>
        <div className="verticalParent">
          <h3 className="text-center">Clave</h3>
          <h5>(Entre 1 y 25)</h5>
          <input 
          type="text" 
          className="input"
          placeholder={this.state.keyValue}
          onChange={this.handleKeyChange.bind(this)} />
          <div className="buttons">
	          		<Button bsStyle="success"  className="btn" onClick={this.handleSubmit}> Guardar Encriptacion</Button>
	          		<LinkContainer to='/db' > 
	          			<Button bsStyle="primary" className="btn"> Elegir texto a decriptar</Button>
	          		</LinkContainer>		
          </div>
        </div>
        <div className="verticalParent">
						<h3 className="text-center">Resultado</h3>
          <span className="md-input">
          {this.convertCypher(this.state.shift)}
          </span>
        </div>
      </div>


			)
	}
}

export default UserInput;