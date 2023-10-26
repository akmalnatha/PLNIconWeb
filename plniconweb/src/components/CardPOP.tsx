import { MouseEventHandler } from "react";
import { HiUserGroup } from "react-icons/hi"

function CardPOP({
    nama,
    area,
    kondisi,
    type,
    onClick
}:{
    nama: string;
    area: string;
    kondisi: "handal" | "sehat" | "critical";
    type: "s-backbone" | "backbone" | "distribusi" | "akses" | "cpe"
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}){
    const iconStyle = { color: "white", fontSize: "2.5em"};
    return(
    <>
    {type == "s-backbone" && (
        <div className="w-full h-full bg-white hover:bg-bnw-500 rounded-2xl border-2 drop-shadow-lg cursor-pointer " onClick={onClick}>
            <div className="flex flex-col items-center justify-between gap-1 p-5 h-full w-full">
                {kondisi == "handal" && (<div className="w-[75px] h-[75px] bg-green-primary rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                {kondisi == "sehat" && (<div className="w-[75px] h-[75px] bg-blue-graph rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                {kondisi == "critical" && (<div className="w-[75px] h-[75px] bg-red-primary rounded-full flex items-center justify-center">
                    <HiUserGroup style={iconStyle}/>
                </div>)}
                <p className="font-bold text-center line-clamp-3 break-words w-full">{nama}</p>
                <p>{area}</p>
            </div>
        </div>
    )}
    </>
    )
}

export default CardPOP;