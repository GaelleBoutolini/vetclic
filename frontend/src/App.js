import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Client from './page/Client';
import Home from './page/Home';
import Veto from './page/Veto';
import Login from './page/Login';
import Register_Veto from './page/Register_Veto';
import Register from './page/Register';


const App = () => {
  //Ici, je créé mes composants, mes routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/veto' element={<Veto />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register_Veto' element={<Register_Veto />}/>
        <Route path='/register' element={<Register />}/>
        {/*Rédiriger à la page d'accueil */}
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>

  );
};
export default App;











/*import logo from './logo.svg';
import './App.css';

/*Ici, nous un composant.Ce composant return le JSX.Une expression
function App() {
  return (
    <div>
      <h1 className='title'>hjdsbjsbcjxbjbshsgchcvchvchxvh</h1>
      {5*2}</div>//Ici, on met des parenthèses et non des acollades.
   );
}*/

//Je peux créer une constate ici

/*function App () {
  const mySTR = 'Bonjour le monde'

  return (
    <div><h1 className='title'>{mySTR}</h1></div>//on utilise "className"
  );
}*/

