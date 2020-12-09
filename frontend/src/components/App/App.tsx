import React from 'react';
import { Container } from 'react-bootstrap';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomeScreen from 'screens/HomeScreen';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, farFaStar, faStarHalfAlt);

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
