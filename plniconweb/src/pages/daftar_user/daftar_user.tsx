import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

function DaftarUser() {
    const data = [
        {
          id: 1,
          Nama: "Agus",
          username: "aguspicoez",
          role: "ADMIN"
        },
        {
          id: 2,
          Nama: "Agus",
          username: "aguspicoez",
          role: "ADMIN"
        },
        {
          id: 3,
          Nama: "Agus",
          username: "aguspicoez",
          role: "ADMIN"
        },
      ];
      const kolom = [
        "ID",
        "Nama",
        "Username",
        "Role",
      ];
  return (
    <>
      <Navbar />
      <div className="overflow-auto pt-[136px] min-h-screen bg-bnw-50">
        <h1 className="header1 text-blue-primary text-center mb-[56px]">DAFTAR USER</h1>
        <div className="w-[1370px] mx-auto py-5 rounded-lg shadow-xl px-5">
            <Table data={data} header={kolom} tipe="user" role="admin"/>
        </div>
      </div>
    </>
  );
}

export default DaftarUser;
