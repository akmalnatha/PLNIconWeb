import TextField from "../../components/TextField";
import as from "../../../public/assets/pln_icon_plus.svg";
import Button from "../../components/Button";
import { post } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const postLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await post('login',{
        username : username,
        password : password,
      })
      console.log(response?.data.data.acess_token);
      const access_token = response?.data.data.acess_token;
      localStorage.setItem("access_token", access_token);
      navigate("/dashboard");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 h-screen bg-[#EEF0F2] flex items-center justify-center">
          <div className="flex flex-col w-full h-screen gap-16 p-5">
            <div className="h-1/3 flex flex-col items-start">
              <h1 className="header1 text-blue-primary">New SiPreman</h1>
              <h2 className="header2 text-blue-primary">
                Sistem Informasi Preventive Maintenance
              </h2>
            </div>
            <div className="h-1/3 flex items-center justify-center">
              <img src={as} alt="" />
            </div>
            <div className="h-1/3"></div>
          </div>
        </div>
        <div className="w-1/2 h-screen bg-[#F8F8F8] flex flex-col items-center justify-center px-52">
          <h1 className="header1 text-blue-primary mb-12">Login</h1>
          <form action="" onSubmit={(e) => postLogin(e)} className="w-full">
            <TextField style="mb-8" type="standart" placeholder="Username" value = {username} onChange={(e) => setUsername(e.target.value)} />
            <TextField style="mb-8" type="pass" placeholder="Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="flex justify-center">
                <Button type="login"/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
