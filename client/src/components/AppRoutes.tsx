import { Routes, Route } from 'react-router-dom'
import Main from "./Main.tsx";
import Chat from "./Chat.tsx";

const AppRoutes = () => {
    return (
       <Routes>
           <Route path="/" element={<Main />}/>
           <Route path="/chat" element={<Chat />}/>
       </Routes>
    );
};

export default AppRoutes;