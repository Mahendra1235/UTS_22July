import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subsidiaries from './components/Subsidiaries';
import Verticals from './components/Verticals';
import GlobalPresence from './components/GlobalPresence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Subsidiaries />
        <Verticals />
        <GlobalPresence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
