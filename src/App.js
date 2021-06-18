
import './App.css';
import User from "./components/User";
import Skills from './components/Skills';
import Profil from './components/Profil';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import FormationsExperiences from './components/FormationsExperiences';
import { Preview, print } from 'react-html2pdf';

function App() {
  const handleGenerateCv = () => {
    let cvTemplate = document.getElementById("cv-print");
    cvTemplate.classList.add("cv-print")
    cvTemplate.setAttribute("style", "width:210mm !important")
    setTimeout(() => {
      print("cv", "cv-print")
      cvTemplate.setAttribute("style", "width:100% !important")
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }
  return (
    <Preview id={"cv-print"} >
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            <div className="actions">
              <button onClick={handleGenerateCv}>
                <PictureAsPdfIcon />
              </button>
            </div>
            <User />
            <Profil />
            <Skills />
          </div>
          <div className="main">
               {/*  profil - profil */}
            
            <FormationsExperiences />
         
          </div>
        </div>
        {/*  react, material ui, react-html2pdf  */}
        {/*  variables css */}
        {/*  colonne de gauche */}

        {/*  colonne de droite */}
        {/*  formation - formation */}
        {/*  exp - experience */}
        {/*  generation pdf */} 
      </div>
      
    </Preview>

    
  );
}

export default App;
