import { useState } from "react";
import { Link } from "react-router-dom";

function Tab() {
    const [tab, setTab] = useState(0);
    return (
    <>
        <div className="w-full overflow-auto">
            <ul className="w-[200%] flex relative cursor-pointer shadow-lg">
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <div className={`${tab== 0 ? "" : tab == 1 ? "translate-x-[100%]": tab == 2 ? "translate-x-[200%]" : tab == 3 ? "translate-x-[300%]" : tab == 4 ? "translate-x-[400%]" : tab == 5 ? "translate-x-[500%]" : tab== 6 ? "translate-x-[600%]" : tab == 7 ? "translate-x-[700%]": tab == 8 ? "translate-x-[800%]" : tab == 9 ? "translate-x-[900%]" : tab == 10 ? "translate-x-[1000%]" : "translate-x-[1100%]"} z-10 absolute ease-in-out duration-500 w-full h-2 bg-blue-primary moving`}></div>
                    <Link to="/info-umum" onClick={() => setTab(0)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/recti" onClick={() => setTab(1)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="/inverter" onClick={() => setTab(2)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(3)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(4)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(5)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(6)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(7)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(8)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative" >
                    <Link to="" onClick={() => setTab(9)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative">
                    <Link to="" onClick={() => setTab(10)}>
                        <li className="w-full h-full flex flex-col justify-center items-center">
                            <p className="py-4 text-blue-primary font-bold">
                            INFORMASI UMUM
                            </p>
                        </li>
                    </Link>
                </div>
                <div className="w-[16.6667%] bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary relative">
                    <Link to="" onClick={() => setTab(11)}>
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
