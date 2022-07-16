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
                <Route path="/study" element={<TeacherForm/>}/>
                <Route path="/give-classes" element={<TeacherList/>}/>
            </Routes>   
        </BrowserRouter>
    );
}

export default RoutesApp;