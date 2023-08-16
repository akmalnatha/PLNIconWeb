import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Tab() {
    const [tab, setTab] = useState(0);
    const pathname = useLocation().pathname
    
    return (
    <>
        <div className="w-full overflow-auto">
            <ul className="w-[200%] flex relative cursor-pointer shadow-lg">
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <div className={`${pathname == '/info-umum' ? "" : pathname == '/kwh' ? "translate-x-[100%]": pathname == '/recti' ? "translate-x-[200%]" : pathname == '/inverter' ? "translate-x-[300%]" : pathname == '/genset' ? "translate-x-[400%]" : tab == 5 ? "translate-x-[500%]" : tab== 6 ? "translate-x-[600%]" : tab == 7 ? "translate-x-[700%]": tab == 8 ? "translate-x-[800%]" : tab == 9 ? "translate-x-[900%]" : tab == 10 ? "translate-x-[1000%]" : "translate-x-[1100%]"} z-10 absolute ease-in-out duration-500 w-full h-2 bg-blue-primary moving`}></div>
                    <Link to="/info-umum" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/kwh" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            KWH
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/recti" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            RECTI
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/inverter" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INVERTER
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/genset" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            GENSET
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative">
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative">
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
            </ul>
        </div>
    </>
    );
}

export default Tab;
