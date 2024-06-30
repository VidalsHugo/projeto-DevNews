import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./home/home";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ <Home /> }/>
                <Route path="/home" Component={ <Home /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;