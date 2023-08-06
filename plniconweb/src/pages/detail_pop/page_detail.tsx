import Navbar from "../../components/Navbar";
import Tab from "../../components/Tab";

function PageDetail({children} : {children: React.ReactNode}){
    return(
        <>
        <Navbar/>
        <div className="pt-[90px] ">
            <div className="w-[98%] mx-auto shadow-xl mb-20 rounded-xl">
                <div className="bg-blue-primary h-[123px] w-full flex items-center justify-center rounded-t-xl">
                    <h1 className="text-text-light header1 text-center">POP GI Cawang Shelter</h1>
                </div>
                <Tab/>
                {children}
            </div>
        </div>
        </>
    );
}

export default PageDetail;