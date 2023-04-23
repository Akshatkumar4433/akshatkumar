import Navigation from './navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import NoPage from './NoPage/NoPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route index element = {<About/>}/>
          <Route path = 'projects' element = {<Projects/>} />
          <Route path = 'contact' element = {<Contact/>} />
          <Route path = '*' element = {<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
