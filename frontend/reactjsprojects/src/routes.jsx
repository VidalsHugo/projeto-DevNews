import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./home/home";
import LoginSection from "./login-section/login";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/login" element={ <LoginSection /> }/>
                <Route path="/:category" element={ <Home /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;