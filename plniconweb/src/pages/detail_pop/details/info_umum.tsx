function InfoUmum(){
    return(
        <>
        <div className="w-full mt-[38px] pb-[75px]">
            <div className="bg-bnw-500 w-[1266px] mx-auto rounded-lg p-[50px] shadow-md shadow-bnw-alternative2">
                <h2 className="header2 text-text-dark">
                    HEALTHY INDEX POP 
                </h2>
                <div className="flex justify-between items-center mt-[26px] gap-[225px]">
                    <div className="h-[316px] w-[316px] shrink-0 bg-green-graph rounded-full flex items-center justify-center">
                        <h2 className="header2 text-text-light">
                            HANDAL
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-[25px]">
                        <h3 className="header3 text-green-primary">
                            AMPERE KWH POP {">"} BEBAN AKTUAL
                        </h3>
                        <h3 className="header3 text-green-primary">
                            BACKUP TIME PERANGKAT {">="} 8 JAM
                        </h3>
                        <h3 className="header3 text-green-primary">
                            KEMAMPUAN GENSET {">="} KWH POP
                        </h3>
                        <h3 className="header3 text-green-primary">
                            SUHU {"<"} 25 C
                        </h3>
                    </div>
                </div>
            </div>
            <div className="mt-[57px] mx-auto w-[1266px] py-[25px] rounded-lg shadow-md shadow-bnw-alternative2 px-[150px] grid auto-rows-min grid-cols-[max-content_max-content] justify-between gap-y-[50px]">
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        ID POP
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        POP_1BGR004
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        NAMA POP
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        CAWANG GI SHELTER PLN
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        KOORDINAT
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        -6.26267174796718,106.869282614158
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        ALAMAT
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        JL MAYJEN SUTOYO CAWANG
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        KELURAHAN
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        CILILITAN
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        KECAMATAN
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        KRAMAT JATI
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        KOTA
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        JAKARTA TIMUR
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        BUILDING
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        SHELTER PERMANEN
                    </p>
                </div>
                <div className="w-fit">
                    <h3 className="header3 mb-[5px]">
                        TIPE
                    </h3>
                    <p className="p-2 bg-bnw-alternative rounded-lg border-bnw-alternative2 border-[1px]">
                        POP-SB
                    </p>
                </div>

            </div>
        </div>
        </>
    );
}

export default InfoUmum;