import Chart from "./Chart";

interface CardPOPProps {
  tipe: "Legend" | "Chart"
  chart: "Wilayah" | "Jenis" | "Health" | string
  text?: string
}

function CardPOP({ tipe, chart, text }: CardPOPProps) {
  return (
    <>
      {tipe == "Chart" && (
        <div className="z-0 w-[360px] h-[420px] flex flex-col items-center justify-center shadow-xl rounded-xl">
          <div className="w-[75%] h-[75%] flex items-center">
            <Chart tipe={chart} />
          </div>
          <p className="text-blue-primary text-2xl">{text}</p>
        </div>
      )}
      {tipe == "Legend" && (
        <div className=" z-0 w-[360px] h-[420px] flex flex-col  justify-center gap-5 shadow-xl rounded-xl">
            {chart == "Wilayah" && (
                <>
                    <p className="text-sm text-center mb-[5px]">
                        Wilayah POP
                    </p>
                    <p className="text-sm ml-[32%]"><span className="bg-blue-graph rounded-full h-4 w-4 inline-block align-text-top"></span> HarBDB</p>
                    <p className="text-sm ml-[32%]"><span className="bg-orange-graph rounded-full h-4 w-4 inline-block align-text-top"></span> HarJak</p>
                </>
            )}
            {chart == "Jenis" && (
                <>
                    <p className="text-sm text-center mb-[5px]">
                        Jenis POP
                    </p>
                    <p className="text-sm ml-[32%]"><span className="bg-red-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Shelter</p>
                    <p className="text-sm ml-[32%]"><span className="bg-blue-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Ruang Kantor</p>
                    <p className="text-sm ml-[32%]"><span className="bg-yellow-primary rounded-full h-4 w-4 inline-block align-text-top"></span> ODC</p>
                    <p className="text-sm ml-[32%]"><span className="bg-pink-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Mini POP</p>
                    <p className="text-sm ml-[32%]"><span className="bg-purple-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Micro POP</p>
                    <p className="text-sm ml-[32%]"><span className="bg-orange-graph rounded-full h-4 w-4 inline-block align-text-top"></span> OLT Gantung</p>
                </>
            )}
            {chart == "Health" && (
                <>
                    <p className="text-sm text-center mb-[5px]">
                        Jenis POP
                    </p>
                    <p className="text-sm ml-[32%]"><span className="bg-green-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Handal</p>
                    <p className="text-sm ml-[32%]"><span className="bg-blue-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Sehat</p>
                    <p className="text-sm ml-[32%]"><span className="bg-red-graph rounded-full h-4 w-4 inline-block align-text-top"></span> Kritikal</p>
                </>
            )}
        </div>
      )}
    </>
  );
}

export default CardPOP;
