import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Formulaire from './pages/Formulaire'
import Idk from './pages/Idk'
import AddClient from './pages/AddClient'
import SignaleProblem from './pages/SignaleProblem'
import Candidature from './pages/Candidature'
import RendezV from './pages/Rendez'
import Newsletter from './pages/newsletter'

import MaterialTable from 'material-table';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Formulaire />} />
                    <Route path="products" element={<RendezV />} />
                    <Route path="customers" element={<SignaleProblem/>} />
                    <Route path="candidature" element={<Candidature />} />
                    <Route path="creer" element={<AddClient />} />
                    <Route path="customers1" element={<Blank />} />
                    <Route path="stats" element={<Idk />} />
                    <Route path="newsletter" element={<Newsletter />} />
                  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
