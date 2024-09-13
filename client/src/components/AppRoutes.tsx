import { Routes, Route } from 'react-router-dom'
import Main from "./Main.tsx";

const AppRoutes = () => {
    return (
       <Routes>
           <Route path="/" element={<Main />}/>
       </Routes>
    );
};

export default AppRoutes;