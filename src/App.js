import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}

export default App;
