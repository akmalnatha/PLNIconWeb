import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tab from "./components/Tab";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import CardPOP from "./components/CardPOP";
import Table from "./components/Table";
import Dashboard from "./pages/dashboard/dashboard";
import DaftarUser from "./pages/daftar_user/daftar_user";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import KWH from "./pages/detail_pop/details/kwh";
import Recti from "./pages/detail_pop/details/recti";
import PageDetail from "./pages/detail_pop/page_detail";
import Inverter from "./pages/detail_pop/details/inverter";
import InfoUmum from "./pages/detail_pop/details/info_umum";
import AddUser from "./pages/daftar_user/add_user";
import DashboardPOP from "./pages/dashboard_pop/dashboard_pop";
import PenjadwalanPM from "./pages/penjadwalan_pm/penjadwalan_pm";
import CreatePM from "./pages/create_pm/create_pm";
import ListPOP from "./pages/list_pop/list_pop";
// import './App.css'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route
        path="/info-umum"
        element={
          <PageDetail>
            <InfoUmum />
          </PageDetail>
        }
      />
      <Route
        path="/kwh"
        element={
          <PageDetail>
            <KWH />
          </PageDetail>
        }
      />
      <Route
        path="/inverter"
        element={
          <PageDetail>
            <Inverter />
          </PageDetail>
        }
      />
      <Route
        path="/Recti"
        element={
          <PageDetail>
            <Recti />
          </PageDetail>
        }
      />
      <Route path="/" element={<Dashboard />} />
      <Route path="/daftar-user">
        <Route path="" element={<DaftarUser />} />
        <Route path="create" element={<AddUser />} />
      </Route>
      <Route path="penjadwalan-pm">
        <Route path="" element={<PenjadwalanPM />} />
        <Route path="create" element={<CreatePM/>}/>
      </Route>
      <Route path="pop">
        <Route path="" element={<ListPOP />} />
        {/* <Route path="create" element={<CreatePM/>}/> */}
      </Route>
      <Route path="/dashboard-pop">
        <Route path="" element={<DashboardPOP />} />
        <Route
          path="info-umum"
          element={
            <PageDetail>
              <InfoUmum />
            </PageDetail>
          }
        />
        <Route
          path="kwh"
          element={
            <PageDetail>
              <KWH />
            </PageDetail>
          }
        />
        <Route
          path="inverter"
          element={
            <PageDetail>
              <Inverter />
            </PageDetail>
          }
        />
        <Route
          path="recti"
          element={
            <PageDetail>
              <Recti />
            </PageDetail>
          }
        />
      </Route>
    </Routes>
  );
}
