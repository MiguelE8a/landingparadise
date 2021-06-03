import './App.scss';
import Landing from './pages/Landing.jsx'
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import Main from './components/mainn/Main.jsx'
import FooterLanding from './components/FooterLanding.jsx'


function App() {
  return (
    
    <div className="App">
      <Landing>
        <Header/>
        <Title name="Nigel" trackName="PARADISE"/>
        <Main />
        <FooterLanding />
      </Landing>
    </div>
  );
}

export default App;
