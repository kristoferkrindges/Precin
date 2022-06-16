import { GlobalStyle } from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Routes from './routes';
import React,{useState} from "react"
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import Layout from "./components/Layout"

export const ThemeContext = React.createContext(null)

function App() {
    const [theme, setTheme] = useState("light")
    const themeStyle = theme === 'light' ? lightTheme : darkTheme;
    return(
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Routes></Routes>
                {/* <>
                    <Layout>
                        <Routes />
                    </Layout>
                </> */}
            </ThemeProvider>
        </ThemeContext.Provider>

        // <ThemeContext.Provider value={{ setTheme, theme }}>
        //     <ThemeProvider theme={themeStyle}>
        //         <GlobalStyle></GlobalStyle>
        //         <Routes></Routes>
        //     </ThemeProvider>
        // </ThemeProvider>
    );
}

export default App;



// import GlobalStyles from './styles/GlobalStyles';
// import Routes from './routes';

// function App() {
//     return(
//         <>
//             <Routes></Routes>
//             <GlobalStyles></GlobalStyles>
//         </>
//     );
// }

// export default App;