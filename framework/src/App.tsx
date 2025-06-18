import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg'; 
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <LoginForm />
      </main>
      <Footer />
      <EasterEgg />
    </div>
  );
}

export default App;