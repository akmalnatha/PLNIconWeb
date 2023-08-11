import { MouseEventHandler } from "react";
import { HiUserGroup } from "react-icons/hi"

function CardPOP({
    kondisi,
    type,
    onClick
}:{
    kondisi: "handal" | "sehat" | "critical";
    type: "s-backbone" | "backbone" | "distribusi" | "akses" | "cpe"
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}){
    const iconStyle = { color: "white", fontSize: "2.5em"};
    return(
    <>
    {type == "s-backbone" && (
        <div className="w-[200px] h-[160px] bg-white rounded-2xl border-2 drop-shadow-lg">
            <div className="flex flex-col items-center gap-1 p-5">
                {kondisi == "handal" && (<div className="w-[75px] h-[75px] bg-green-primary rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                {kondisi == "sehat" && (<div className="w-[75px] h-[75px] bg-blue-graph rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                {kondisi == "critical" && (<div className="w-[75px] h-[75px] bg-red-primary rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                <p className="font-bold">Cawang GI Shelter</p>
                <p>[Nama Area]</p>
            </div>
        </div>
    )}
    </>
    )
}

export default CardPOP;