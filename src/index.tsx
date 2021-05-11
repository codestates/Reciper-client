import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

import './index.css';
import App from './App';
import Theme from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle></GlobalStyle>
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
