import { useNavigate } from "react-router-dom"
import CardPOP from "../../components/CardPOP"
import Navbar from "../../components/Navbar"
import TextField from "../../components/TextField"
import Footer from "../../components/footer"

function DashboardPOP(){
    const changePage = useNavigate();
    return(
    <>
    <Navbar/>
    <div className="py-[136px] px-10">
        <h1 className="header1 text-center text-blue-primary">POP S-BACKBONE</h1>
        <h3 className="header3 text-center text-blue-primary mt-[6px]">Jumlah Total POP: 685</h3>
        <div className="flex justify-between mt-[50px]">
            <div className="flex items-center gap-3">
                <TextField style="" type="search" placeholder="Cari"/>
                <span className="w-[25px] h-[25px] bg-green-primary shrink-0"></span>
                <span>HANDAL</span>
                <span className="w-[25px] h-[25px] bg-blue-graph shrink-0"></span>
                <span>SEHAT</span>
                <span className="w-[25px] h-[25px] bg-red-primary shrink-0"></span>
                <span>CRITICAL</span>
            </div>
            <div className="flex gap-4">
                {/* <TextField style="" type="standart" placeholder="Jenis POOP"/>
                <TextField style="" type="standart" placeholder="Jenis POOP"/> */}
            </div>
        </div>
        <div className="w-full bg-white grid grid-cols-6 gap-5 mt-[36px]">
            <CardPOP kondisi="handal" type="s-backbone" onClick={() => changePage('info-umum')}/>
            <CardPOP kondisi="sehat" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="sehat" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="sehat" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="critical" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="critical" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="sehat" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
            <CardPOP kondisi="critical" type="s-backbone"/>
            <CardPOP kondisi="critical" type="s-backbone"/>
            <CardPOP kondisi="handal" type="s-backbone"/>
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default DashboardPOP