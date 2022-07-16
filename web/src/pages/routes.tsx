import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Landing from "./Landing";
import TeacherForm from "./TeacherForm";
import TeacherList from "./TeacherList";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/study" element={<TeacherList/>}/>
                <Route path="/give-classes" element={<TeacherForm/>}/>
            </Routes>   
        </BrowserRouter>
    );
}

export default RoutesApp;