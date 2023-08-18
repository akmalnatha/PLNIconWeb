import { useState } from "react";
import Navbar from "../../components/Navbar";
import Status from "../../components/Status";
import Footer from "../../components/footer";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";

function ListPOP() {
  const data = [
    {
      id: "POP_1BGR001",
      nama: "BOGOR CABANG SHELTER PLN",
      koordinat: "-6.59631531413278,106.790102676305",
      alamat: "Jl. Kapten Muslihat No.25, Central Bogor, Bogor, West Java, 16124 Indonesia",
      kelurahan: "Paledang",
      kecamatan: "Bogor Tengah",
      kota: "Bogor Kota",
      building: "Shelter Permanen",
      tipe: "POP-D",
    },
    {
      id: "POP_1JKT001",
      nama: "POP CAWANG GI SHELTER",
      koordinat: "-6.59631531413278,106.790102676305",
      alamat: "Jl. Kapten Muslihat No.25, Cawang, Jakarta Timur, DKI Jakarta, 16124 Indonesia",
      kelurahan: "Paledang",
      kecamatan: "Cawang",
      kota: "Jakarta Timur",
      building: "Shelter Permanen",
      tipe: "POP-D",
    },
  ];
  const kolom = [
    "ID POP",
    "Nama POP/CPE PLN",
    "Koordinat",
    "Alamat",
    "Kelurahan",
    "Kecamatan",
    "Kota",
    "Building",
    "Tipe POP",
  ];

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const changePage = useNavigate();
  return (
    <>
      <Navbar />
      <div className="pt-[136px] min-h-[91.75vh] bg-bnw-50 px-2">
        <h1 className="header1 text-blue-primary text-center">
          PENJADWALAN PM
        </h1>
        <div className="flex justify-between mb-[11px] mt-[51px] max-w-[1370px] mx-auto">
          <div className="max-w-[20%]">
            <TextField
              type="search"
              placeholder="Search PM"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button type="add" onClick={() => changePage('create')}/>
        </div>
        <div className="mb-[56px] max-w-[1370px] bg-bnw-50 mx-auto pb-10 rounded-lg shadow-xl px-[20px] overflow-auto">
          <Table
            data={data}
            header={kolom}
            tipe="pm"
            role="admin"
            search={search}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListPOP;
