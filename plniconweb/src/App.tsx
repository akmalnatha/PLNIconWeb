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
// import './App.css'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const ProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" replace />;
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
          <Route path="" element={<ComingSoon/>} />
          <Route
            path="info-umum"
            element={
            // <PageDetail>
                <ComingSoon />
              //</PageDetail>
            }
          />
          <Route
            path="kwh"
            element={
            // <PageDetail>
                <ComingSoon />
              //</PageDetail>
            }
          />
          <Route
            path="inverter"
            element={
            // <PageDetail>
                <ComingSoon />
              //</PageDetail>
            }
          />
          <Route
            path="recti"
            element={
            // <PageDetail>
                <ComingSoon />
              //</PageDetail>
            }
          />
        </Route>
        <Route path="pop">
          <Route path="" element={<ListPOP />} />
          <Route path="create" element={<ComingSoon/>}/>
        </Route>
        <Route path="penjadwalan-pm">
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
