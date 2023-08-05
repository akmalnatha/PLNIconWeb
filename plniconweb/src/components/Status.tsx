function Status({type}:{type:"CHECK" | "PLAN" | "REALISASI"}) {
    return (
        <>
        {type == "CHECK" && (
            <div className="h-[36px] w-[120px] text-[16px] font-semibold text-white bg-yellow-click rounded-[10px] flex items-center justify-center">
                CHECK
            </div>
        )}
        {type == "PLAN" && (
            <div className="h-[36px] w-[120px] text-[16px] font-semibold text-white bg-blue-primary rounded-[10px] flex items-center justify-center">
                PLAN
            </div>
        )}
        {type == "REALISASI" && (
            <div className="h-[36px] w-[120px] text-[16px] font-semibold text-white bg-green-primary rounded-[10px] flex items-center justify-center">
                REALISASI
            </div>
        )}

        </>
    );
}

export default Status;
