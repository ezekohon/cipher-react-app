import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { BrowserRouter } from 'react-router-dom';



const Root = () => {
	return(
		<BrowserRouter>
			<App />
		</BrowserRouter>
		)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
