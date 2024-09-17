import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";

import App from "./components/App.tsx"
import  './styles/main.css'

createRoot(document.getElementById('root')).render(

    <Router>
        <App />
    </Router>

)
