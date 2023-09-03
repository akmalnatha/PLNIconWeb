import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";

function ChangePass(){
    return(
    <>
        <Navbar/>
        <div className="h-screen flex flex-col items-center justify-center gap-7">
            <h1 className="header1 text-blue-primary text-center mb-10">Change Password</h1>
            <form action="" className="w-[400px] flex flex-col items-center gap-7">
                <div className="w-full">
                    <p className="font-bold">Enter New Password</p>
                    <TextField style="" type="pass" placeholder="Enter New Password"/>
                </div>
                <div className="w-full">
                    <p className="font-bold">Re-Enter New Password</p>
                    <TextField style="" type="pass" placeholder="Re-Enter New Password"/>
                </div>
                <Button type="login"/>
            </form>
        </div>
    </>
    )
}

export default ChangePass;