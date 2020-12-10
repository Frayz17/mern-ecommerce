import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
import iconLibrary from 'data/iconLib';
import css from './styles.module.css';

iconLibrary();

const App = () => {
  return (
    <Router>
      <Header />
      <main className={css.main}>
        <Container>
          <Routes />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
