import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hello from './components/First'
import NavBar from "./components/NavBar";
import Second from './components/Second'
export default function AllRoute(){
    return (
        
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/first" element={<Hello />} />
                <Route path="/second" element={<Second/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}
