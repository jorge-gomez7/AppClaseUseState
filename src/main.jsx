import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

//import App from './App.jsx'
import {UserComponent} from './components/UserComponent.jsx';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserComponent />
  </React.StrictMode>,
)
