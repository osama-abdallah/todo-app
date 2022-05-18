
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SettingProvider from './context/settings.js';
import Header from './components/header/header';
import ToDo from './components/todo/todo.js';
import SettingsForm from './components/settingsForm/settingsForm.js';

function App() {
  return (
   <>
      <Header />
        <SettingProvider>
          {/* <Route exact path='/settings' > */}
            <SettingsForm />
          {/* </Route> */}
          {/* <Route exact path='/'> */}
            <ToDo />
          {/* </Route> */}
        </SettingProvider>
        </>
  )
}

export default App