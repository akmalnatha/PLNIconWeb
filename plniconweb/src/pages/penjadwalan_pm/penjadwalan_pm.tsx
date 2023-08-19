import { useState } from "react";
import Navbar from "../../components/Navbar";
import Status from "../../components/Status";
import Footer from "../../components/footer";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/api";

function PenjadwalanPM() {
  const data = [
    {
      id: "ISP/2023/0001",
      status: <Status type="PLAN" />,
      plan: "2023-15-08",
      jenis: "ISP",
      kategori: "Incidental",
      wilayah: "HARJAK",
      area: "Banten",
      field_suppport: "Akmal",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0002",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Akmal",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0003",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0004",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Ardhan",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0005",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0006",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Ibrahim",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0007",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0008",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Tangerang Selatan",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0009",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Tangerang Selatan",
      field_suppport: "Sultan",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0010",
      status: <Status type="REALISASI" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0011",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Rutin",
      wilayah: "HARJAK",
      area: "Bekasi",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
    {
      id: "ISP/2023/0012",
      status: <Status type="PLAN" />,
      plan: "2023-07-09",
      jenis: "ISP",
      kategori: "Improvement",
      wilayah: "HARJAK",
      area: "Jakarta Timur",
      field_suppport: "Komeng",
      kontak: "086799899890",
    },
  ];
  const kolom = [
    "ID",
    "Status",
    "Plan",
    "Jenis PM",
    "Kategori PM",
    "Wilayah",
    "Area",
    "Field Support",
    "Kontak",
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

export default PenjadwalanPM;
