import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Inter', sans-serif;
        letter-spacing: .6px;
    }
    ul, li {
         list-style: none;
    }
`;

// import { createGlobalStyle } from "styled-components";

// export default createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Inter', sans-serif;
//     text-decoration: none;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     }
//     #root {
//         height: 100vh;
//     }
//     ul, li {
//         list-style: none;
//     }
//     body {
//       background: rgba(8, 37, 84, 1)
//   }
// `;
