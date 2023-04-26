import './App.scss';
import { Route, Routes } from "react-router-dom";
import Authorization_menu_container from './components/Authorization_menu/Authorization_menu_container';
import Registration_menu_container from './components/Registration_menu/Registration_menu_container';
import Main_content from './components/Main_content/Main_content';

function App(props) {

  // console.log(props.state);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element={<Authorization_menu_container />}/>
        <Route path='/reg' element={<Registration_menu_container />}/>
        <Route path='/' element={<Main_content />}/>
      </Routes>
    </div>
  );
}

export default App;
