import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import Main from "./components/main"
import Next from "./components/next"
import Search from './components/search'
import Alarm from "./components/alarm"
import Question from "./components/question"
import Add from "./components/Add"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/home" element={<Next/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/alarm" element={<Alarm/>}/>
                <Route path="/question" element={<Question/>}/>
                <Route path="/add" element={<Add />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router