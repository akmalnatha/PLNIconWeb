import { Link, useLocation } from "react-router-dom";

function Tab() {
    const pathname = useLocation().pathname
    
    return (
    <>
        <div className="w-full overflow-auto">
            <ul className="w-[200%] flex relative cursor-pointer shadow-lg">
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <div className={`${pathname == '/dashboard-pop/info-umum' ? "" : pathname == '/dashboard-pop/kwh' ? "translate-x-[100%]": pathname == '/dashboard-pop/recti' ? "translate-x-[200%]" : pathname == '/dashboard-pop/inverter' ? "translate-x-[300%]" : pathname == '/dashboard-pop/genset' ? "translate-x-[400%]" : "translate-x-[500%]"} z-10 absolute ease-in-out duration-500 w-full h-2 bg-blue-alternative moving`}></div>
                    <Link to="/dashboard-pop/info-umum" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="/dashboard-pop/kwh" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            KWH
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="/dashboard-pop/recti" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            RECTI
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="/dashboard-pop/inverter" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INVERTER
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="/dashboard-pop/genset" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            GENSET
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative" >
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative">
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-alternative relative">
                    <Link to="" >
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-alternative font-bold">
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
