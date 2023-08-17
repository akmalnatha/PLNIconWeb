import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import Footer from "../../components/footer";

function CreatePM(){
    return(
    <>
    <Navbar/>
    <h1 className="header1 pt-[124px] pl-[108px] pb-[64px] text-left text-blue-primary">Create PM</h1>
    <div className="w-full flex justify-center">
        <div className="w-[400px] flex flex-col justify-center gap-5">
            <div>
                <p className="header3 text-left mb-1">Plan</p>
                <TextField type="standart" placeholder="Isi"/>
            </div>
            <div>
                <p className="header3 text-left mb-1">Pelaksana</p>
                <TextField type="standart" placeholder="Isi"/>
            </div>
        </div>
    </div>
    <div className="flex justify-center pt-[40px]">
        <div className="w-1/2 flex flex-col items-center gap-5">
                <div className="w-[400px]">
                    <p className="header3 text-left mb-1">Wilayah</p>
                    <TextField type="standart" placeholder="Isi"/>
                </div>
                <div className="w-[400px]">
                    <p className="header3 text-left mb-1">Kategori PM</p>
                    <TextField type="standart" placeholder="Isi"/>
                </div>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-5">
                <div className="w-[400px]">
                    <p className="header3 text-left mb-1">Area</p>
                    <TextField type="standart" placeholder="Isi"/>
                </div>
                <div className="w-[400px]">
                    <p className="header3 text-left mb-1">Jenis PM</p>
                    <TextField type="standart" placeholder="Isi"/>
                </div>
        </div>
    </div>
    <div className="flex justify-center gap-5 py-20">
        <Button type="cancel"/>
        <Button type="save"/>
    </div>
    <Footer/>
    </>
    )
}

export default CreatePM;