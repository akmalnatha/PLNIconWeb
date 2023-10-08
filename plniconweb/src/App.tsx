import Dashboard from "./pages/dashboard/dashboard";
import DaftarUser from "./pages/daftar_user/daftar_user";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AddUser from "./pages/daftar_user/add_user";
import PenjadwalanPM from "./pages/pm/penjadwalan_pm";
import CreatePM from "./pages/pm/create_pm";
import EditPM from "./pages/pm/edit_pm";
import ListPOP from "./pages/pop/list_pop";
import Login from "./pages/login/login";
import ComingSoon from "./pages/other_pages/coming_soon";
import UserProvider from "./context/userContext";
import DashboardPOP from "./pages/pop/dashboard_pop";
import InfoUmum from "./pages/pop/details/info_umum";
import PageDetail from "./pages/pop/page_detail";
import KWH from "./pages/pop/details/kwh";
import Inverter from "./pages/pop/details/inverter";
import Recti from "./pages/pop/details/recti";
// import './App.css'

const router = createBrowserRouter([{ path: "*", Component: Root}, ], { basename: "/sipreman" });

const ProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
};

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<ProtectedRoute/>}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftar-user">
          <Route path="" element={<DaftarUser />} />
          <Route path="create" element={<AddUser />} />
        </Route>
        <Route path="/dashboard-pop">
          <Route path="" element={<DashboardPOP/>} />
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
        <Route path="/pop">
          <Route path="" element={<ListPOP />} />
          <Route path="create" element={<ComingSoon/>}/>
        </Route>
        <Route path="/penjadwalan-pm">
          <Route path="" element={<PenjadwalanPM />} />
          <Route path="create" element={<CreatePM/>}/>
          <Route path="edit/:idPM" element={<EditPM/>}/>
        </Route>
        <Route path="/temuan" element={<ComingSoon />} />
        <Route path="/export" element={<ComingSoon />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
}
