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

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [search, setSearch] = useState<string | undefined>();
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const changePage = useNavigate();

  const dataLimit = 12;

  const token = localStorage.getItem("access_token");
  const getJadwalPm = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const jadwalpm = await getWithAuth(token, "jadwalpm");
        console.log(jadwalpm);
        setData(
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
        toastSuccess("Get Data Jadwal PM Successful");
      } catch (error) {
        toastError("Get Data Jadwal PM Failed");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (search != undefined && search != "") {
      const filtered = data.filter((item: any) =>
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
      setPaginatedData(data.slice((page - 1) * dataLimit, page * dataLimit));
      setTotalPages(
        data.length % dataLimit === 0
          ? data.length / dataLimit
          : Math.floor(data.length / dataLimit) + 1
      );
    }
    if (totalPages < page) {
      setPage(1);
    }
  }, [search, page, data]);

  useEffect(() => {
    getJadwalPm();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-[136px] min-h-[91.75vh] bg-bnw-50 px-2">
        <h1 className="header1 text-blue-primary text-center">
          PENJADWALAN PM
        </h1>
        <div className="mb-[56px] mt-[40px] pt-[11px] max-w-[1370px] bg-bnw-50 mx-auto rounded-lg shadow-xl px-[20px] border-t-bnw-alternative border-t-2">
          <div className="flex justify-between mb-[11px]">
            <div className="max-w-[20%]">
              <TextField
                type="search"
                placeholder="Search PM"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button type="add" onClick={() => changePage("create")} />
          </div>
          <div className="w-full bg-bnw-50 mx-auto pb-10 overflow-auto">
            <Table
              data={paginatedData}
              header={kolom}
              tipe="pm"
              role="admin"
              isLoading={isLoading}
            />
            <Pagination
              totalPages={totalPages}
              current={(page: number) => setPage(page)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PenjadwalanPM;
