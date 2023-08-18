import { useState } from "react";
import Button from "../../components/Button";
import DateField from "../../components/DateField";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import Footer from "../../components/footer";
import Select from "react-select";
import Checkbox from "../../components/Checkbox";
import { postWithAuth } from "../../api/api";

function CreatePM() {
  const options1 = [
    { value: "Rutin", label: "Rutin" },
    { value: "Isidental", label: "Isidental" },
  ];
  const options2 = [
    { value: "ISP", label: "ISP" },
    { value: "OSP", label: "OSP" },
  ];
  const style = [
    {
      control: (baseStyles: any, state: { isFocused: any }) => ({
        ...baseStyles,
        borderColor: state.isFocused ? "grey" : "red",
      }),
    },
  ];
  const token = localStorage.getItem("access_token");

  const addJadwalPm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(token){
      try{
        const response = await postWithAuth("jadwalpm",{
          
        },
        token
        )
      }catch(error){
        console.log(error);
      }
    }
  }

  const [date, setDate] = useState<Date | null>(null);
  const [jenis, setJenis] = useState<string | undefined>();
  return (
    <>
      <Navbar />
      <h1 className="header1 pt-[124px] pl-[108px] pb-[64px] text-left text-blue-primary">
        Create PM
      </h1>
      <div className="w-full flex justify-center">
        <div className="w-[400px] flex flex-col justify-center gap-5">
          <div>
            <p className="header3 text-left mb-1">Plan</p>
            <DateField
              onChange={(date: Date) => setDate(date)}
              id=""
              text="Pilih Tanggal PM"
            />
          </div>
          <div>
            <p className="header3 text-left mb-1">Pelaksana</p>
            <Select placeholder="Pilih Pelaksana PM" />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[40px]">
        <div className="w-1/2 flex flex-col items-center gap-5">
          <div className="w-[400px]">
            <p className="header3 text-left mb-1">Wilayah</p>
            <Select placeholder="Pilih Wilayah PM" />
          </div>
          <div className="w-[400px]">
            <p className="header3 text-left mb-1">Kategori PM</p>
            <Select
              options={options1}
              placeholder={"Pilih Kategori PM"}
              onChange={(selectedOption) => {
                if (selectedOption) {
                  setJenis(selectedOption.value);
                } else {
                  setJenis(undefined);
                }
              }}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-5">
          <div className="w-[400px]">
            <p className="header3 text-left mb-1">Area</p>
            <Select placeholder="Pilih Area PM" />
          </div>
          <div className="w-[400px]">
            <p className="header3 text-left mb-1">Jenis PM</p>
            <Select options={options2} placeholder={"Pilih Jenis PM"} />
          </div>
        </div>
      </div>
      {jenis != 'Rutin' && jenis != undefined && <div className="mt-[59px] flex gap-[35px] max-w-[1058px] mx-auto">
        <Checkbox id="batre" label="Uji Baterai"/>
        <Checkbox id="olt" label="PM OLT Retail"/>
        <Checkbox id="ac" label="Air Conditioner"/>
        <Checkbox id="genset" label="Genset"/>
        <Checkbox id="pendataan" label="Pendataan"/>
      </div>}
      <div className="flex justify-center gap-5 py-20">
        <Button type="cancel" />
        <Button type="save" />
      </div>
      <Footer />
    </>
  );
}

export default CreatePM;
