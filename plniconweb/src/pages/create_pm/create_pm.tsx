import { useState } from "react";
import Button from "../../components/Button";
import DateField from "../../components/DateField";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import Footer from "../../components/footer";
import Select from "react-select";
import Checkbox from "../../components/Checkbox";
import { postWithAuth } from "../../api/api";
import moment from "moment";

function CreatePM() {
  const [popID, setPopID] = useState(0);
  const [userId, setUserId] = useState(0);
  const [date, setDate] = useState<Date | null>(null);
  const [jenis, setJenis] = useState("");
  const [kategori, setKategori] = useState("");
  const [detail, setDetail] = useState<string[]>([]);
  const [wilayah, setWilayah] = useState("");
  const [area, setArea] = useState("");
  const optionsKategori = [
    { value: "Rutin", label: "Rutin" },
    { value: "Incidental", label: "Incidental" },
    { value: "Improvement", label: "Improvement" },
  ];
  const optionsJenis = [
    { value: "ISP", label: "ISP" },
    { value: "OSP", label: "OSP" },
  ];
  const optionsUser = [
    { value: 1, label: "OmadWahyu" },
    { value: 2, label: "Akmal" },
  ];
  const optionsPOP = [{ value: 1, label: "POP/Cawang/aowkwowkwokwok" }];
  const optionsWilayah = [
    { value: "HARJAK", label: "HARJAK" },
    { value: "HARBDB", label: "HARBDB" },
  ];
  const optionsArea = [
    { value: "Jakarta Timur", label: "Jakarta Timur" },
    { value: "Bekasi", label: "Bekasi" },
    { value: "Banten", label: "Banten" },
    { value: "Tangerang Selatan", label: "Tangerang Selatan" },
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setDetail([...detail, value]);
    } else {
      setDetail(detail.filter((val) => val !== value));
    }
  };
  //   const stringValue = e.target.value;
  //   setDetail(e.target.checked ? [...detail, stringValue] : detail.filter(val => val !== stringValue));
  // };

  const sortedArray = detail.slice().sort((a, b) => a.localeCompare(b));

  const addJadwalPm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token) {
      try {
        console.log(detail);
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
        setDetail([]);
        console.log(detail);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-[100px] min-h-screen bg-bnw-50">
        <div className="w-[95%] lg:w-[97%] mx-auto rounded-lg shadow-xl ">
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
                    onChange={(date: Date) => setDate(date)}
                    id=""
                    text="Pilih Tanggal PM"
                  />
                </div>
                <div>
                  <p className="header3 text-left mb-1">Pelaksana</p>
                  <Select
                    options={optionsUser}
                    placeholder={"Pilih Pelaksana PM"}
                    onChange={(selectedOption) => {
                      if (selectedOption) {
                        setUserId(selectedOption.value);
                      } else {
                        setUserId(0);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[max-content_max-content] grid-rows-4 lg:grid-rows-2 gap-y-5 justify-between mt-[20px] lg:mt-[40px]">
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Wilayah</p>
                <Select
                  options={optionsWilayah}
                  placeholder="Pilih Wilayah PM"
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      setWilayah(selectedOption.value);
                    } else {
                      setWilayah("");
                    }
                  }}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Area</p>
                <Select
                  options={optionsArea}
                  placeholder={"Pilih Area PM"}
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      setArea(selectedOption.value);
                    } else {
                      setArea("");
                    }
                  }}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Kategori PM</p>
                <Select
                  options={optionsKategori}
                  placeholder={"Pilih Kategori PM"}
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      setKategori(selectedOption.value);
                      if (selectedOption.value == "Rutin") {
                        setDetail(["All"]);
                      } else {
                        setDetail([]);
                      }
                    } else {
                      setKategori("");
                    }
                  }}
                />
              </div>
              <div className="w-full lg:w-[375px] xl:w-[400px]">
                <p className="header3 text-left mb-1">Jenis PM</p>
                <Select
                  options={optionsJenis}
                  placeholder={"Pilih Jenis PM"}
                  onChange={(selectedOption) => {
                    if (selectedOption) {
                      setJenis(selectedOption.value);
                    } else {
                      setJenis("");
                    }
                  }}
                />
              </div>
            </div>
            {jenis != "" && jenis == "ISP" ? (
                kategori == "Rutin" ? (
                  <div className="mt-[59px] flex justify-between">
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
                  </div>
                ) : (
                  <div className="mt-[59px] flex justify-between">
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
                  </div>
                )
              ) : jenis != "" &&( kategori == "Rutin" ? (
                <div className="mt-[59px] flex justify-between">
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
                </div>
              ) : (
                <div className="mt-[59px] flex justify-between">
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
                </div>
              ))}
            <div className="grid grid-cols-1 lg:grid-cols-[max-content_max-content] auto-rows-min gap-y-5 justify-between mt-[20px] lg:mt-[40px]">
              {jenis == "ISP" ? (
                <div className="w-full lg:w-[375px] xl:w-[400px]">
                  <p className="header3 text-left mb-1">ID POP</p>
                  <Select
                    options={optionsPOP}
                    placeholder={"Pilih ID POP"}
                    onChange={(selectedOption) => {
                      if (selectedOption) {
                        setPopID(selectedOption.value);
                      } else {
                        setPopID(0);
                      }
                    }}
                  />
                </div>
              ) : jenis == "OSP" ? (
                <>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">KONTOL</p>
                    <Select
                      options={optionsPOP}
                      placeholder={"Pilih ID POP"}
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setPopID(selectedOption.value);
                        } else {
                          setPopID(0);
                        }
                      }}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">KONTOL</p>
                    <Select
                      options={optionsPOP}
                      placeholder={"Pilih ID POP"}
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setPopID(selectedOption.value);
                        } else {
                          setPopID(0);
                        }
                      }}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">KONTOL</p>
                    <Select
                      options={optionsPOP}
                      placeholder={"Pilih ID POP"}
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setPopID(selectedOption.value);
                        } else {
                          setPopID(0);
                        }
                      }}
                    />
                  </div>
                  <div className="w-full lg:w-[375px] xl:w-[400px]">
                    <p className="header3 text-left mb-1">KONTOL</p>
                    <Select
                      options={optionsPOP}
                      placeholder={"Pilih ID POP"}
                      onChange={(selectedOption) => {
                        if (selectedOption) {
                          setPopID(selectedOption.value);
                        } else {
                          setPopID(0);
                        }
                      }}
                    />
                  </div>
                </>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex justify-center gap-5 py-20">
              <Button type="cancel" />
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
