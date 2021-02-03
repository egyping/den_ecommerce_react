import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Header />
        <Container>
          <h1>Welcome to my Shop</h1>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
