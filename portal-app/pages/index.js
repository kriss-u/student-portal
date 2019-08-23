import React from 'react'
import {ThemeProvider} from 'styled-jss'
import theme from "../lib/theme";
import App from '../components/App'
import Login from "../components/Login";

const Home = () => (
    <ThemeProvider theme={theme}>
        <App>
            <Login/>
        </App>
    </ThemeProvider>

);

export default Home;