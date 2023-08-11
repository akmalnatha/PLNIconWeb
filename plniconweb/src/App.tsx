import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import CardPOP from './components/CardPOP'
import Table from './components/Table'
import Dashboard from './pages/dashboard/dashboard'
import DaftarUser from './pages/daftar_user/daftar_user'
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import KWH from './pages/detail_pop/details/kwh'
import Recti from './pages/detail_pop/details/recti'
import PageDetail from './pages/detail_pop/page_detail'
import Inverter from './pages/detail_pop/details/inverter'
import InfoUmum from './pages/detail_pop/details/info_umum'
import AddUser from './pages/daftar_user/add_user'
// import './App.css'

const router = createBrowserRouter([
  { path: "*", Component: Root }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path='/info-umum' element={
        <PageDetail>
        <InfoUmum/>
      </PageDetail>
    } />
      <Route path="/kwh" element={
      <PageDetail>
        <KWH/>
      </PageDetail>
    } />
      <Route path="/inverter" element={
      <PageDetail>
        <Inverter/>
      </PageDetail>
    } />
      <Route path="/Recti" element={
      <PageDetail>
        <Recti />
      </PageDetail>
      } />
      <Route path="/" element={<Dashboard/>} />
      <Route path='/daftar-user' element={<DaftarUser />} />
      <Route path='/daftar-user/create' element={<AddUser/>}/>
    </Routes>
  );
}

