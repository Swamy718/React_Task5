import logo from './logo.svg';
import './App.css';
import About_me from './components/About_me';
import { HashRouter, Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Nav_Bar from './components/Nav_Bar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
// import Word_count from './components/Word_count';
// // import Color_picker from './components/Color_picker';
// // import Dummy_data from './components/Dummy_data';
// import Age_calculator from './components/Age_calculator';
// import MyComponent from './components/MyComponent';

function App() {
  // const arr=["red","lawngreen","blue","yellow","fuchsia","skyblue","coral","darkmagenta","pink","green","orangered","deepskyblue","brown","lightcoral","darkcyan","goldenrod"]
  return (
    <div className="App">
       {/* <Color_picker color={arr}/> */}
       {/* <Dummy_data/> */}
       {/* <Age_calculator/> */}
       {/* <MyComponent/> */}
       <HashRouter>
        <Nav_Bar/>
        <Routes>
          <Route path="/" element={<About_me/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
        <Contact/>
       </HashRouter>

    </div>
  );
}

export default App;
