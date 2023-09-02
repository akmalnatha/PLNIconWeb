import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Status from "../../components/Status";
import Footer from "../../components/footer";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { getWithAuth } from "../../api/api";
import Pagination from "../../components/Pagination";
import { toastError, toastSuccess } from "../../components/Toast";
import moment from "moment";

function PenjadwalanPM() {
  const kolom = [
    "Action",
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

  //Page Attributes
  const [search, setSearch] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  //Page Data
  const [dataPm, setDataPm] = useState<any[]>([]);
  const [dataPop, setDataPop] = useState<any[]>([]);

  const [dataKotaPop, setDataKotaPop] = useState<string[]>([]);
  const [dataSeluruhPop, setDataSeluruhPop] = useState<string[]>([]);

  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const dataLimit = 12;

  const token = localStorage.getItem("access_token");
  const getJadwalPm = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const jadwalpm = await getWithAuth(token, "jadwalpm");
        console.log(jadwalpm);
        setDataPm(
          jadwalpm.data.data.map((data: any) => {
            return {
              id: data.pm_kode,
              status: <Status type={data.status} />,
              plan: moment(data.plan).format("YYYY-MM-DD"),
              jenis: data.jenis,
              kategori: data.kategori,
              wilayah: data.wilayah,
              area: data.area,
              user: data.user.nama,
              kontak: data.user.phone,
            };
          })
        );
        toastSuccess(jadwalpm.data.meta.message);
      } catch (error) {
        toastError("Get Data Jadwal PM Failed");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (search != undefined && search != "") {
      const filtered = dataPm.filter((item: any) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
      setPaginatedData(
        filtered.slice((page - 1) * dataLimit, page * dataLimit)
      );
      setTotalPages(
        filtered.length % dataLimit === 0
          ? filtered.length / dataLimit
          : Math.floor(filtered.length / dataLimit) + 1
      );
    } else {
      setPaginatedData(dataPm.slice((page - 1) * dataLimit, page * dataLimit));
      setTotalPages(
        dataPm.length % dataLimit === 0
          ? dataPm.length / dataLimit
          : Math.floor(dataPm.length / dataLimit) + 1
      );
    }
    if (totalPages < page) {
      setPage(1);
    }
  }, [search, page, dataPm]);

  useEffect(() => {
    getJadwalPm();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-[136px] min-h-[calc(100vh-60px)] bg-bnw-50 px-2">
        <h1 className="header1 text-blue-primary text-center">
          PENJADWALAN PM
        </h1>
        <div className="mb-[56px] mt-[40px] pt-[11px] pb-10 w-full bg-bnw-50 rounded-lg shadow-xl px-[20px] border-t-bnw-alternative border-t-2">
          <div className="flex justify-between mb-[11px]">
            <div className="max-w-[20%]">
              <TextField
                type="search"
                placeholder="Search PM"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button type="add" onClick={() => navigate("create")} />
          </div>
          <div className="w-full bg-bnw-50 overflow-auto">
            <Table
              data={paginatedData}
              header={kolom}
              tipe="pm"
              role="admin"
              isLoading={isLoading}
            />
          </div>
            <Pagination
              totalPages={totalPages}
              current={(page: number) => setPage(page)}
            />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PenjadwalanPM;
