import { SetStateAction, useEffect, useState } from "react";
import Button from "../../components/Button";
import DateField from "../../components/DateField";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { SingleValue } from "react-select";
import Checkbox from "../../components/Checkbox";
import { getWithAuth, postWithAuth } from "../../api/api";
import moment from "moment";
import { toastError, toastSuccess } from "../../components/Toast";
import Dropdown from "../../components/Dropdown";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../other_pages/loadingPage";

function CreatePM() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const [dataPop, setDataPop] = useState<any[]>([]);
  const [dataKotaPop, setDataKotaPop] = useState<string[]>([]);

  const [triggerPop, setTriggerPop] = useState(false);
  
  const [dataUser, setDataUser] = useState<any[]>([]);

  const [triggerUser, setTriggerUser] = useState(false);

  //OPSI UMUM
  const [userId, setUserId] = useState(0);
  const [date, setDate] = useState<Date | null>(null);
  const [jenis, setJenis] = useState("");
  const [kategori, setKategori] = useState("");
  const [detail, setDetail] = useState<string[]>([]);
  const [wilayah, setWilayah] = useState("");
  const [area, setArea] = useState("");

  //OPSI ISP
  const [popID, setPopID] = useState(0);

  //OPSI OSP
  // const [lokasi, setLokasi] = useState("");
  // const [ketLokasi, setKetLokasi] = useState("");
  // const [koorAwal, setKoorAwal] = useState("");
  // const [koorAkhir, setKoorAkhir] = useState("");

  const [optionsKategori, setOptionsKategori] = useState<{ value: string; label: string }[]>([]);
  const optionsJenis = [
    { value: "ISP", label: "ISP" },
    // { value: "OSP", label: "OSP" },
  ];
  const optionsUser = dataUser.map((data: any) => ({
    value: data.id,
    label: data.nama,
  }));
  const optionsPOP = dataPop.map((data: any) => ({
    value: data.id,
    label: data.nama,
  }));
  const optionsWilayah = [
    { value: "HARJAK", label: "HARJAK" },
    { value: "HARBDB", label: "HARBDB" },
  ];
  const optionsArea = dataKotaPop.map((kota: string) => ({
    value: kota,
    label: kota,
  }));

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setDetail([...detail, value]);
    } else {
      setDetail(detail.filter((val) => val !== value));
    }
  };

  
  const token = localStorage.getItem("access_token");
  const sortedArray = detail.slice().sort((a, b) => a.localeCompare(b));
  const addJadwalPm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      try {
        const response = await postWithAuth(
          "jadwalpm",
          {
            pop_id: popID,
            user_id: userId,
            plan: moment(date).format("YYYY-MM-DD HH:mm:ss"),
            realisasi: moment(date).format("YYYY-MM-DD HH:mm:ss"),
            jenis: jenis,
            kategori: kategori,
            detail_pm: sortedArray.join(", "),
            wilayah: wilayah,
            area: area,
          },
          token
        );
        toastSuccess(response.data.meta.message);
        setDetail([]);
      } catch (error) {
        toastError("Create Jadwal PM Failed");
      }
    }
  };

  const getListPop = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const listpop = await getWithAuth(token, "pop");
        setDataPop(
          listpop.data.data.map((data: any) => {
            return {
              id: data.id,
              kode: data.pop_kode,
              nama: data.nama,
              kota: data.kota,
            };
          })
        );
        setTriggerPop(true)
      } catch (error) {
        toastError("Get Opsi POP Failed");
        navigate("/penjadwalan-pm")
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getDaftarUser = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const listUser = await getWithAuth(token, "all-user");
        console.log(listUser);
        setDataUser(
          listUser.data.data.map((data: any) => {
            return {
              id: data.id,
              nama: data.nama,
            };
          })
        );
        setTriggerUser(true)
      } catch (error) {
        toastError("Get Opsi User failed");
        navigate("/penjadwalan-pm")
      } finally {
        setIsLoading(false);
      }
    }
  };

  function OnChange(
    selectedOption: SingleValue<{ value: string; label: string }>,
    setState: SetStateAction<any>,
    value: number | string
  ) {
    if (setState == setKategori) {
      if (selectedOption) {
        setKategori(selectedOption.value);
        if (selectedOption.value == "Rutin") {
          if (jenis == "ISP") {
            setDetail([
              "Uji Baterai, PM OLT Retail, Air Conditioner, Genset, Pendataan",
            ]);
          } else {
            setDetail([
              "Jalur Kabel TR/TM, ADSS LS, Retail - IKR, Retail - FAT, Retail - Cluster",
            ]);
          }
        } else {
          setDetail([]);
        }
      } else {
        setKategori("");
      }
    } else {
      if (selectedOption) {
        setState(selectedOption.value);
      } else {
        setState(value);
      }
    }
  }

  useEffect(() => {
    if (jenis == "") {
      setOptionsKategori([]);
    } else {
      const newOptions = [
        { value: "Rutin", label: "Rutin" },
        { value: "Incidental", label: "Incidental" },
        { value: "Improvement", label: "Improvement" },
      ];
      setOptionsKategori(newOptions);
    }
  }, [jenis]);

  useEffect(() => {
    const uniqueCities = Array.from(new Set(dataPop.map((data) => data.kota)));
    const sortedCities = uniqueCities.sort((a, b) => a.localeCompare(b));
    setDataKotaPop(sortedCities);
  }, [triggerPop]);

  useEffect(() => {
    setIsLoading(true);
    if(triggerPop && triggerUser){
      setIsLoading(false);
    }
  }, [triggerPop, triggerUser])

  useEffect(() => {
    getListPop();
    getDaftarUser();
  }, []);

  return (
    <>
      <LoadingPage isLoad={isLoading}/>
      <Navbar />
      <div className="pt-[100px] min-h-screen bg-bnw-50">
        <div className="w-[95%] lg:w-[97%] mx-auto rounded-lg mb-6 shadow-xl ">
          <h1 className="bg-blue-alternative header1 p-2 px-3 text-text-light rounded-t-lg">
            Create PM
          </h1>
          <form
            action=""
            onSubmit={(e) => addJadwalPm(e)}
            className="w-full px-[10.0802%] py-[64px]"
          >
            <div className="w-full flex justify-center">
              <div className="w-full lg:w-[375px] xl:w-[400px] flex flex-col justify-center gap-5">
                <div>
                  <p className="header3 text-left mb-1">Plan</p>
                  <DateField
                    required
                    onChange={(date: Date) => setDate(date)}
                    id=""
                    text="Pilih Tanggal PM"
                  />
                </div>
                <div>
                  <p className="header3 text-left mb-1">Pelaksana</p>
                  <Dropdown
                    required
                    placeholder="Pilih Pelaksana PM"
                    onChange={(selectedOption) =>
                      OnChange(selectedOption, setUserId, 0)
                    }
                    options={optionsUser}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[max-content_max-content] grid-rows-4 lg:grid-rows-2 gap-y-5 justify-between mt-[20px] lg:mt-[40px]">
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Wilayah</p>
                <Dropdown
                  required
                  placeholder="Pilih Wilayah PM"
                  onChange={(selectedOption) =>
                    OnChange(selectedOption, setWilayah, "")
                  }
                  options={optionsWilayah}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Area</p>
                <Dropdown
                  required
                  placeholder="Pilih Area PM"
                  onChange={(selectedOption) =>
                    OnChange(selectedOption, setArea, "")
                  }
                  options={optionsArea}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Jenis PM</p>
                <Dropdown
                  required
                  placeholder="Pilih Jenis PM"
                  onChange={(selectedOption) =>
                    OnChange(selectedOption, setJenis, "")
                  }
                  options={optionsJenis}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Kategori PM</p>
                <Dropdown
                  required
                  placeholder="Pilih Kategori PM"
                  onChange={(selectedOption) =>
                    OnChange(selectedOption, setKategori, "")
                  }
                  options={optionsKategori}
                />
              </div>
            </div>
            <div className="mt-[20px] lg:mt-[59px] flex justify-between flex-col lg:flex-row gap-y-2">
              {jenis != "" && jenis == "ISP" ? (
                kategori == "Rutin" ? (
                  <>
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="baterai"
                      label="Uji Baterai"
                      value="Uji Baterai"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="olt"
                      label="PM OLT Retail"
                      value="PM OLT Retail"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="ac"
                      label="Air Conditioner"
                      value="Air Conditioner"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="genset"
                      label="Genset"
                      value="Genset"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="pendataan"
                      label="Pendataan"
                      value="Pendataan"
                    />
                  </>
                ) : (
                  <>
                    <Checkbox
                      checked={detail.includes("Uji Baterai")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="baterai"
                      label="Uji Baterai"
                      value="Uji Baterai"
                    />
                    <Checkbox
                      checked={detail.includes("PM OLT Retail")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="olt"
                      label="PM OLT Retail"
                      value="PM OLT Retail"
                    />
                    <Checkbox
                      checked={detail.includes("Air Conditioner")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="ac"
                      label="Air Conditioner"
                      value="Air Conditioner"
                    />
                    <Checkbox
                      checked={detail.includes("Genset")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="genset"
                      label="Genset"
                      value="Genset"
                    />
                    <Checkbox
                      checked={detail.includes("Pendataan")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="pendataan"
                      label="Pendataan"
                      value="Pendataan"
                    />
                  </>
                )
              ) : (
                jenis != "" &&
                (kategori == "Rutin" ? (
                  <>
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="tr/tm"
                      label="Jalur Kabel TR/TM"
                      value="Jalur Kabel TR/TM"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="adss"
                      label="ADSS LS"
                      value="ADSS LS"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="ikr"
                      label="Retail - IKR"
                      value="Retail - IKR"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="fat"
                      label="Retail - FAT"
                      value="Retail - FAT"
                    />
                    <Checkbox
                      checked={true}
                      disabled={true}
                      id="cluster"
                      label="Retail - Cluster"
                      value="Retail - Cluster"
                    />
                  </>
                ) : (
                  <>
                    <Checkbox
                      checked={detail.includes("Jalur Kabel TR/TM")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="tr/tm"
                      label="Jalur Kabel TR/TM"
                      value="Jalur Kabel TR/TM"
                    />
                    <Checkbox
                      checked={detail.includes("ADSS LS")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="adss"
                      label="ADSS LS"
                      value="ADSS LS"
                    />
                    <Checkbox
                      checked={detail.includes("Retail - IKR")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="ikr"
                      label="Retail - IKR"
                      value="Retail - IKR"
                    />
                    <Checkbox
                      checked={detail.includes("Retail - FAT")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="fat"
                      label="Retail - FAT"
                      value="Retail - FAT"
                    />
                    <Checkbox
                      checked={detail.includes("Retail - Cluster")}
                      onChange={handleCheckboxChange}
                      disabled={false}
                      id="cluster"
                      label="Retail - Cluster"
                      value="Retail - Cluster"
                    />
                  </>
                ))
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[max-content_max-content] auto-rows-min gap-y-5 justify-between mt-[20px] lg:mt-[40px]">
              {jenis == "ISP" ? (
                <div className="w-full lg:w-[375px] xl:w-[400px]">
                  <p className="header3 text-left mb-1">ID POP</p>
                  <Dropdown
                    required
                    placeholder="Pilih ID POP"
                    onChange={(selectedOption) =>
                      OnChange(selectedOption, setPopID, 0)
                    }
                    options={optionsPOP}
                  />
                </div>
              ) : jenis == "OSP" ? (
                <>
                  {/* <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">Lokasi OSP</p>
                    <TextField
                      type="standart"
                      placeholder="Nama jalan/cluster"
                      onChange={(e) => setLokasi(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">Keterangan Lokasi</p>
                    <TextField
                      type="standart"
                      placeholder="Tower X - Tower Y"
                      onChange={(e) => setKetLokasi(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">Koordinat Awal</p>
                    <TextField
                      type="standart"
                      placeholder="Koordinat jalan/cluster"
                      onChange={(e) => setKoorAwal(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">Koordinat Akhir</p>
                    <TextField
                      type="standart"
                      placeholder="Koordinat jalan/cluster"
                      onChange={(e) => setKoorAkhir(e.target.value)}
                    />
                  </div> */}
                </>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex justify-center lg:justify-end gap-5 mt-5">
              <Button type="cancel" onClick={() => navigate("/penjadwalan-pm")}/>
              <Button type="save" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatePM;
