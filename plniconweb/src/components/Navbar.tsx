import logo from "../assets/logo.svg"
import { IoNotifications } from "react-icons/io5"
import UserOptions from "./UserOptions";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleUser = () => {
        setOpen(!open);
    }
    return (
    <>
    <div className="fixed z-20 w-full flex justify-between items-center h-20 px-7 bg-bnw-50 shadow-lg">
        <img src={logo} alt="logo PLN IconPlus" />
        <div className="flex gap-4 xl:gap-11 items-center">
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">Home</a>
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">Dashboard POP</a>
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">POP</a>
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">Penjadwalan PM</a>
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">Temuan</a>
            <a href="" className="text-text-dark text-center hover:text-blue-hover active:text-blue-click ">Export</a>
            <div className="relative w-[220px]">
                <div className="flex gap-2 w-full cursor-pointer" onClick={toggleUser}>
                    <div className="w-[50px] h-[50px] shrink-0 rounded-full bg-bnw-500"></div>
                    <div className="flex gap-[5px] flex-col justify-center overflow-x-hidden">
                        <p className="text-text-dark truncate text-ellipsis overflow-hidden whitespace-nowrap">Nama User Panjang Sekali</p>
                        <p className="text-text-dark truncate text-ellipsis overflow-hidden whitespace-nowrap">Role</p>
                    </div>
                </div>
                <div className="absolute top-[66px] bg-bnw-50 shadow-lg w-full rounded-b-lg overflow-hidden z-10">
                    <UserOptions type="admin" visibility={open}/>
                </div>
            </div>
            <div className="text-3xl">
                <IoNotifications/>
            </div>
        </div>
    </div>
    </>
    );
}

export default Navbar;
