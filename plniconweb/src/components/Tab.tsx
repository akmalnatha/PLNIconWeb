import { useState } from "react";

function Tab() {
    const [tab, setTab] = useState(0);
    return (
    <>
        <div className="w-full">
            <div className={`translate-x-[${100*tab}%] ease-in-out duration-500 w-[20%] h-2 bg-blue-primary`}></div>
            <div className="flex w-full">
                <div className="w-[20%] bg-neutral-50 text-center text-blue-primary" onClick={() => setTab(0)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] bg-neutral-50 text-center text-blue-primary" onClick={() => setTab(1)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] bg-neutral-50 text-center text-blue-primary" onClick={() => setTab(2)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] bg-neutral-50 text-center text-blue-primary" onClick={() => setTab(3)}>
                    INFORMASI UMUM
                </div>
                <div className="w-[20%] bg-neutral-50 text-center text-blue-primary" onClick={() => setTab(4)}>
                    INFORMASI UMUM
                </div>
            </div>
        </div>
    </>
    );
}

export default Tab;
