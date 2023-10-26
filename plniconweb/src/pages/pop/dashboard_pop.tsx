import { useNavigate } from "react-router-dom";
import CardPOP from "../../components/CardPOP";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import { getWithAuth } from "../../api/api";
import { toastSuccess, toastError } from "../../components/Toast";
import Dropdown from "../../components/Dropdown";

function DashboardPOP() {
  //Page attributes
  const [search, setSearch] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Page Data
  const [data, setData] = useState<any[]>([]);
  const [displayedData, setDisplayedData] = useState<any[]>([]);
  const [displayedTipe, setDisplayedTipe] = useState<string>("S-Backbone");

  const optionsDropdown = [
    { value: "S-Backbone", label: "S-Backbone" },
    { value: "Backbone", label: "Backbone" },
    { value: "Distribusi", label: "Distribusi" },
    { value: "Akses", label: "Akses" },
    { value: "CPE PLN", label: "CPE PLN" },
  ];

  const token = localStorage.getItem("access_token");
  const getListPop = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const listpop = await getWithAuth(token, "pop");
        console.log(listpop);
        setData(
          listpop.data.data.map((data: any) => {
            return {
              id: data.pop_kode,
              nama: data.nama,
              wilayah: data.wilayah,
              koordinat: data.koordinat,
              alamat: data.alamat,
              kelurahan: data.kelurahan,
              kecamatan: data.kecamatan,
              kota: data.kota,
              building: data.building,
              tipe: data.tipe,
            };
          })
        );
        toastSuccess(listpop.data.meta.message);
      } catch (error) {
        toastError("Get Data List POP Failed");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const dataSuperBackbone = data.filter((item: any) => item.tipe === "SB");
  const dataBackbone = data.filter((item: any) => item.tipe === "B");
  const dataDistribusi = data.filter((item: any) => item.tipe === "D");
  const dataAkses = data.filter((item: any) => item.tipe === "A");
  const dataCpePln = data.filter((item: any) => item.tipe === "CPE PLN");

  useEffect(() => {
    if (search != undefined && search != "") {
      let filtered;
      switch (displayedTipe) {
        case "S-Backbone":
          filtered = dataSuperBackbone.filter(
            (item: any) =>
              item.nama.toLowerCase().includes(search.toLowerCase()) ||
              item.wilayah.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "Backbone":
          filtered = dataBackbone.filter(
            (item: any) =>
              item.nama.toLowerCase().includes(search.toLowerCase()) ||
              item.wilayah.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "Distribusi":
          filtered = dataDistribusi.filter(
            (item: any) =>
              item.nama.toLowerCase().includes(search.toLowerCase()) ||
              item.wilayah.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "Akses":
          filtered = dataAkses.filter(
            (item: any) =>
              item.nama.toLowerCase().includes(search.toLowerCase()) ||
              item.wilayah.toLowerCase().includes(search.toLowerCase())
          );
          break;
        case "CPE PLN":
          filtered = dataCpePln.filter(
            (item: any) =>
              item.nama.toLowerCase().includes(search.toLowerCase()) ||
              item.wilayah.toLowerCase().includes(search.toLowerCase())
          );
          break;
      }
      setDisplayedData(filtered);
    } else {
      let filtered;
      switch (displayedTipe) {
        case "S-Backbone":
          filtered = dataSuperBackbone;
          break;
        case "Backbone":
          filtered = dataBackbone;
          break;
        case "Distribusi":
          filtered = dataDistribusi;
          break;
        case "Akses":
          filtered = dataAkses;
          break;
        case "CPE PLN":
          filtered = dataCpePln;
          break;
      }
      setDisplayedData(filtered);
    }
  }, [search, data, displayedTipe]);

  useEffect(() => {
    getListPop();
  }, []);

  const changePage = useNavigate();
  return (
    <>
      <Navbar active={2} />
      <div className="pt-[136px] pb-[50px] px-10 min-h-[calc(100vh-60px)]">
        <h1 className="header1 text-center text-blue-primary">DASHBOARD POP</h1>
        <div className="bg-blue-primary rounded-xl p-4 mt-[21px] w-fit mx-auto">
          <h3 className="header3 text-center text-white">
            Jumlah Total {displayedTipe}: 685
          </h3>
        </div>
        <div className="flex justify-between mt-[50px]">
          <div className="flex items-center gap-3">
            <TextField
              style=""
              type="search"
              placeholder="Cari"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="w-[25px] h-[25px] rounded-full bg-green-primary shrink-0"></span>
            <span>HANDAL</span>
            <span className="w-[25px] h-[25px] rounded-full bg-blue-graph shrink-0"></span>
            <span>SEHAT</span>
            <span className="w-[25px] h-[25px] rounded-full bg-red-primary shrink-0"></span>
            <span>CRITICAL</span>
          </div>
          <div className="flex gap-4">
            <div className="w-[188px]">
              <Dropdown
                options={optionsDropdown}
                placeholder="Jenis POP"
                onChange={(selectedOption) =>
                  selectedOption
                    ? setDisplayedTipe(selectedOption.value)
                    : setDisplayedTipe("S-Backbone")
                }
                value={optionsDropdown[0]}
              />
            </div>
            {/* <TextField style="" type="standart" placeholder="Jenis POOP"/> */}
          </div>
        </div>
        <div className="w-full bg-white grid grid-cols-6 gap-5 mt-7">
          {displayedData.map((item: any) => {
            let newName;
            let words = item.nama.split("_");
            if (words.length > 2) {
              newName = words.slice(2).join(" ");
            } else {
              words = item.nama.split(" ");
              newName = words.slice(1).join(" ");
            }
            return (
              <CardPOP
                nama={newName}
                area={item.wilayah}
                kondisi="handal"
                type="s-backbone"
                onClick={() => changePage("info-umum")}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardPOP;
