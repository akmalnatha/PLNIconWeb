import CardChart from "./CardChart";

function CardCarousel({tipe, dataPopSb, dataPopB, dataPopA, dataPopD, dataCpePln}: {tipe: string, dataPopSb: number[][], dataPopB: number[][], dataPopA: number[][], dataPopD: number[][], dataCpePln: number[][]}) {
    return (
    <>
    <div className="w-fit mx-auto z-0 grid grid-cols-3 grid-rows-2 justify-center items-center gap-x-20 gap-y-10 pb-10">
        <CardChart tipe="Chart" chart={tipe} text="POP Super-BackBone" data={dataPopSb}/>
        <CardChart tipe="Chart" chart={tipe} text="POP BackBone" data={dataPopB}/>
        <CardChart tipe="Chart" chart={tipe} text="POP Distribusi" data={dataPopD}/>
        <CardChart tipe="Chart" chart={tipe} text="POP Akses" data={dataPopA}/>
        <CardChart tipe="Chart" chart={tipe} text="CPE PLN" data={dataCpePln}/>
        <CardChart tipe="Legend" chart={tipe}/>
    </div>
    </>
    );
}

export default CardCarousel;
