
import React from 'react';
import SettingProvider from './context/settings.js';
import Header from './components/header/header';
import ToDo from './components/todo/todo.js';
import Auth from './context/auth.js';
import "./App.scss"

function App() {
  return (
   <>
      <Header />
      <Auth>
        <SettingProvider>
          {/* <Route exact path='/settings' > */}
            {/* <SettingsForm /> */}
              {/* </Route> */}
          {/* <Route exact path='/'> */}
            <ToDo />
          {/* </Route> */}
        </SettingProvider>
        </Auth>
        </>
  )
}

export default App