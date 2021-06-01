import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MyWork from './components/MyWork';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyWork />
      <AboutMe />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
