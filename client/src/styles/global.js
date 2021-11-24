import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	box-sizing: inherit;
	font-family: 'Poppins', sans-serif;
}
html {
	font-size: 62.5%;
	line-height: 1.25;
	min-height: 100%;
	scroll-behavior: smooth;
}
body {
	overflow-x: hidden;
	height: 100%;
	box-sizing: border-box; 
	background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.font};
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
}
`;

export default GlobalStyles;
