import Navigation from './navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

import NoPage from './NoPage/NoPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Me from './Me/Me';


function App() {
  
  return (
    <div className='text-[#000000] bg-[#FDF4F5] h-screen w-screen'>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route index element = {<About/>}/>
          <Route path = 'projects' element = {<Projects/>} />
          <Route path = 'contact' element = {<Contact/>} />
          <Route path = 'me' element = {<Me/>}/>
          <Route path = '*' element = {<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
