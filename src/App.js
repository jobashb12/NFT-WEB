import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './component/About';
import Faq from './component/Faq';
import Footer from './component/Footer';
import Home from './component/Home';
import Navigation from './component/Navigation';
import Roadmap from './component/Roadmap';
import Showcase from './component/Showcase';
import Team from './component/Team';
import TopBtn from './component/TopBtn';
import GlobalStyle from './GlobalStyle';
import { light } from './Theme';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
        <TopBtn />
      </ThemeProvider>
    </>
  )
}

export default App;