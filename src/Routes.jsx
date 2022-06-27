import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hello from './components/First'
import NavBar from "./components/NavBar";
import Second from './components/Second'
import Third from "./components/Third";
export default function AllRoute(){
    return (
        
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/first" element={<Hello />} />
                <Route path="/second" element={<Second />} />
                    <Route path="/third" element={<Third/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}
