import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { getWithAuth } from "../../api/api";
import { toastSuccess, toastError } from "../../components/Toast";
import Pagination from "../../components/Pagination";

function ListPOP() {
  const kolom = [
    "Action",
    "ID POP",
    "Nama POP/CPE PLN",
    "Wilayah",
    "Koordinat",
    "Alamat",
    "Kelurahan",
    "Kecamatan",
    "Kota",
    "Building",
    "Tipe POP",
  ];

  //Page attributes
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Page Data
  const [data, setData] = useState<any[]>([]);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const dataLimit = 12;

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
    getListPop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-[136px] min-h-[calc(100vh-60px)] bg-bnw-50 px-2">
        <h1 className="header1 text-blue-primary text-center">POP</h1>
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
              tipe="pop"
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

export default ListPOP;
