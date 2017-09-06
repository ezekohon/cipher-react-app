import React from 'react';
import firebase from '../js/firebase';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class DataBase extends React.Component{
	constructor(){
		super();
		this.state = {
			items: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
	  const itemsRef = firebase.database().ref('text');
	  itemsRef.on('value', (snapshot) => {
	    let items = snapshot.val();
	    let newState = [];
	    for (let item in items) {
	      newState.push({
	        id: item,
	        input: items[item].input,
	        encrypted: items[item].encrypted
	      });
	    }
	    this.setState({
	      items: newState
	    });
	  });
	}
	

	handleClick(e, item){
		//me falta tirar un alert con el input
		e.preventDefault();
		alert(item.input);
	}
	
	render(){
		return(
			<div>
			<h2>Mensages a decriptar</h2>

			<section className='display-item'>
			  <div className="wrapper">
			    <ul>
			      {this.state.items.map((item) => {
			        return (
			          <div className="divs" key={item.id}>
			            <span>{item.encrypted}</span> 
						
			            <Button className="decBtn" bsStyle="success" onClick={(e) => this.handleClick(e, item)}>Decriptar</Button>

			          </div>
			        )
			      })}
			    </ul>
				<LinkContainer to='/'>
				<Button bsStyle="primary">Volver</Button>
				</LinkContainer>
			  </div>
			</section>
			</div>

			)
	}
}

export default DataBase;