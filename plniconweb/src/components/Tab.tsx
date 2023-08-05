import { useState } from "react";

function Tab() {
    const [tab, setTab] = useState(0);
    return (
    <>
        <div className="w-full">
            <div className={`${tab== 0 ? "" : tab == 1 ? "translate-x-[100%]": tab == 2 ? "translate-x-[200%]" : tab == 3 ? "translate-x-[300%]" : "translate-x-[400%]"} ease-in-out duration-500 w-[20%] h-2 bg-blue-primary moving`}></div>
            <div className="flex w-full shadow-lg cursor-pointer">
                <div className="w-[20%] py-4 bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary" onClick={() => setTab(0)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] py-4 bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary" onClick={() => setTab(1)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] py-4 bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary" onClick={() => setTab(2)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] py-4 bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary" onClick={() => setTab(3)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] py-4 bg-bnw-50 hover:bg-bnw-300 active:bg-bnw-500 text-center text-blue-primary" onClick={() => setTab(4)}>
                    INFORMASI UMUM
                </div>
            </div>
        </div>
    </>
    );
}

export default Tab;
