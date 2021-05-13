import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

import './index.css';
import App from './App';
import Theme from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/index';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle></GlobalStyle>
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
