import './App.css';
import NavBar from './pages/NavBar'; 
import Main from './pages/Main';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Main/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    {/* <NavBar />
    <Router>
    <Switch>
    <Route exact path="/">
      <Main />
      <About/>
      <Skills/>
      <Contact/>
    </Route>
    <Route path="/about">
      <About />
      <Skills/>
      <Contact/>
    </Route>
    <Route path="/Skills">
      <Skills />
      <Contact/>
    </Route>
    <Route path="/Contact">
      <Contact/>
    </Route>
    </Switch>
    </Router>
    <Footer/> */}
    </>
  );
}

export default App;
