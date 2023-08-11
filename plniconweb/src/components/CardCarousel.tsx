import CardPOP from "./CardChart";

function CardCarousel({tipe}: {tipe: string}) {
    return (
    <>
    <div className="w-fit mx-auto z-0 grid grid-cols-3 grid-rows-2 justify-center items-center gap-x-20 gap-y-10 pb-10">
        <CardPOP tipe="Chart" chart={tipe} text="POP Super-BackBone"/>
        <CardPOP tipe="Chart" chart={tipe} text="POP BackBone"/>
        <CardPOP tipe="Chart" chart={tipe} text="POP Distribusi"/>
        <CardPOP tipe="Chart" chart={tipe} text="POP Akses"/>
        <CardPOP tipe="Chart" chart={tipe} text="CPE PLN"/>
        <CardPOP tipe="Legend" chart={tipe}/>
    </div>
    </>
    );
}

export default CardCarousel;
