import Navbar from "../../components/Navbar";
import Tab from "../../components/Tab";
import Footer from "../../components/footer";

function PageDetail({children} : {children: React.ReactNode}){
    return(
        <>
        <Navbar active={2}/>
        <div className="pt-[90px] min-h-[91.75vh]">
            <div className="w-[98%] mx-auto shadow-xl mb-6 rounded-xl">
                <div className="bg-blue-alternative h-[123px] w-full flex items-center justify-center rounded-t-xl">
                    <h1 className="text-text-light header1 text-center">NAMA POP</h1>
                </div>
                <Tab/>
                {children}
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default PageDetail;