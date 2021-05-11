import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

import './index.css';
import App from './App';
import Theme from './styles/Theme';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle></GlobalStyle>
		<ThemeProvider theme={Theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
