import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(245, 245, 245);
  font-family: 'Poppins', sans-serif;
}
button {
  border: 0;
  outline: 0;
  border-radius: 0.375rem;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyle;
