import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import TextField from "../../components/TextField";

function AddUser() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/daftar-user`; 
      navigate(path);
    }
  return (
    <>
      <Navbar />
      <div className="pt-[100px] min-h-screen bg-bnw-50">
        <div className="w-[1420px] mx-auto rounded-lg shadow-xl">
        <h1 className="bg-blue-alternative header3 p-2 px-3 text-text-light rounded-t-lg">Create User</h1>
        <div className="flex-col flex gap-10 p-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="nama">Nama</label>
                <TextField id="nama" type="standart" placeholder="" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <TextField id="username" type="standart" placeholder="" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <TextField id="password" type="standart" placeholder="" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="role">Role</label>
                <TextField id="role" type="standart" placeholder="" />
            </div>
            <div className="flex gap-2 self-end"> 
                <Button type="cancel" onClick={routeChange}/>
                <Button type="submit"/>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
