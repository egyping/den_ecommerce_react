import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
      
    </div>
  );
}

export default App;
