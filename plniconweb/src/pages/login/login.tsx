import TextField from "../../components/TextField";
import as from "../../../public/assets/pln_icon_plus.svg";
import Button from "../../components/Button";

function Login() {
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
          <form action="" className="w-full">
            <TextField style="mb-8" type="standart" placeholder="Username" />
            <TextField style="mb-8" type="pass" placeholder="Password" />
            <div className="flex justify-center">
                <Button type="login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
