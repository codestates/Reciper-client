import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	button,
	input,
	textarea {
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}

	li {
		list-style: none;
	}
`;
