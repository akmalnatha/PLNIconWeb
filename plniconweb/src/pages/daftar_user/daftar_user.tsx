import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import moment from "moment";
import { useEffect, useState } from "react";
import { getWithAuth } from "../../api/api";
import Status from "../../components/Status";
import { toastSuccess, toastError } from "../../components/Toast";
import Footer from "../../components/footer";
import Pagination from "../../components/Pagination";
import TextField from "../../components/TextField";

function DaftarUser() {
  const kolom = [
    "Action",
    "ID",
    "Nama",
    "Username",
    "E-mail",
    "Kontak",
    "Role",
  ];

  //Page Attributes
  const [search, setSearch] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //Page Data
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const dataLimit = 12;

  const token = localStorage.getItem("access_token");
  const getDaftarUser = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const listUser = await getWithAuth(token, "all-user");
        console.log(listUser);
        setData(
          listUser.data.data.map((data: any) => {
            return {
              id: data.id,
              nama: data.nama,
              username: data.username,
              email: data.email,
              kontak: data.phone,
              role: data.role,
            };
          })
        );
        toastSuccess(listUser.data.meta.message);
      } catch (error) {
        toastError("Get all user data failed");
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
    getDaftarUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-auto min-h-[calc(100vh-60px)] pt-[136px] bg-bnw-50 px-2">
        <h1 className="header1 text-blue-primary text-center mb-[56px]">
          DAFTAR USER
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
              tipe="user"
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

export default DaftarUser;
