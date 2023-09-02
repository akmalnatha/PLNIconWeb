import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Table({
  data,
  header,
  tipe,
  role,
  isLoading,
}: {
  data: any[];
  header: any[];
  tipe: string;
  role: string;
  isLoading: boolean;
}) {
  const [showDetailPM, setShowDetailPM] = useState(false);
  const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(0);

  const navigate = useNavigate();
  
  const Load = () => {
    const dummy = [1, 2, 3, 4, 5];
    return dummy.map((idx: number) => (
      <tr key={idx}>
        {header.map((idx: number) => {
          return (
            <td
              key={idx}
              className="h-auto w-auto border-collapse border-b-2 border-kGrey-100 px-2 py-1 text-center xl:px-4"
            >
              <div className="h-4 w-full animate-pulse bg-bnw-500"></div>
            </td>
          );
        })}
      </tr>
    ));
  };

  function deleteItem(id: number){
    setIdDelete(id);
    setShowPopUpDelete(true);
    console.log(idDelete);
  }

  function Klik(tipe:string, url:string){
    if (tipe=='pm'){
      setShowDetailPM(true)
    }
    else{
      navigate(url);
    }
  }
  return (
    <>
      <Modal
        visible={showDetailPM}
        onClose={() => setShowDetailPM(false)}>
        <h1 className="bg-blue-alternative header1 p-2 px-3 text-text-light rounded-t-lg">
            Detail PM
          </h1>
        <div className="w-full p-5">
          <div className="grid grid-cols-3 gap-y-10">
            <div className="text-[20px]">
              <span className="font-semibold">ID : </span>
              <span>ISP/2023/0005</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Plan : </span>
              <span>2023-01-09</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Realisasi : </span>
              <span>2023-03-09</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Status : </span>
              <span>PLAN</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Wilayah : </span>
              <span>HAR JAKARTA</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Area : </span>
              <span>Jakarta Timur</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Jenis PM : </span>
              <span>ISP</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Kategori PM : </span>
              <span>Rutin</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Detail PM : </span>
              <span>AC - Environment</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Hostname : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">FAT ID : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Nama POP : </span>
              <span>Cawang GI Shelter</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Temuan : </span>
              <span>Perangkat panas, AC bocor, rect mati, dan tembok retak</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Link Laporan OSP : </span>
              <span>
                <a href="http://pm.microlearning.my.id/jadwal" className="hover:text-blue-400 hover:underline">http://pm.microlearning.my.id/jadwal</a>
              </span>
            </div>
          </div>
        </div>
      </Modal>
      <Modal visible={showPopUpDelete} onClose={() => setShowPopUpDelete(false)}>
        <div className="flex items-center justify-center text-[40px] mx-auto w-20 h-20 rounded-full text-red-primary border-2 border-red-primary">
          <BsTrashFill />
        </div>
        <h3 className="header3 text-center text-red-primary mt-5">Are you sure?</h3>
        <p className="text-center text-text-dark mt-3">Do you really want to delete this item? <br /> This action cannot be undone</p>
        <div className="flex gap-5 mt-5">
          <Button type={undefined} className="h-[40px] w-full text-[20px] font-semibold text-text-dark hover:text-text-light bg-white rounded-[10px] hover:bg-red-hover active:bg-red-click border-[1px] border-red-primary" text="YES"/>
          <Button type={undefined} className="h-[40px] w-full text-[20px] font-semibold text-text-dark hover:text-text-light bg-white rounded-[10px] hover:bg-blue-hover active:bg-blue-click border-[1px] border-blue-primary" text="NO" onClick={() => setShowPopUpDelete(false)}/>
        </div>
      </Modal>

      <div className="flex overflow-visible">
        <table className="min-w-full">
          <thead>
            <tr>
              {header.map((cell: any, idx: number) => {
                return (
                  <th
                    key={idx}
                    className="h-auto w-auto border-collapse text-text-light bg-blue-primary px-2 py-1 text-center font-normal xl:px-4 truncate"
                  >
                    {cell}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Load />
            ) : data.length > 0 ? (
              Object.values(data).map((obj: any, idx: number) => {
                return (
                  <tr key={idx}>
                    <td className="h-auto w-auto border-collapse border-b-2 border-bnw-500 px-2 py-3 text-center xl:px-4">
                      <div className="flex items-center justify-center gap-1">
                        {tipe != "user" && (
                          <div className="group relative">
                            <button className="bg-blue-primary p-2 rounded hover:bg-blue-hover active:bg-blue-click text-text-light" onClick={() => Klik(tipe, "/dashboard-pop/info-umum")}>
                              <BsBarChartFill />
                            </button>
                            <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                              Details
                            </p>
                          </div>
                        )}
                        {role == "admin" && (
                          <>
                            <div className="group relative" onClick={() => navigate(`edit/${obj.id}`)}>
                              <button className="bg-yellow-primary p-2 rounded hover:bg-yellow-hover active:bg-yellow-click text-text-light">
                                <BiSolidPencil />
                              </button>
                              <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                                Edit
                              </p>
                            </div>
                            <div className="group relative" onClick={() => deleteItem(obj.id)}>
                              <button className="bg-red-primary p-2 rounded hover:bg-red-hover active:bg-red-click text-text-light">
                                <BsTrashFill />
                              </button>
                              <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                                Delete
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                    {Object.values(obj).map((cell: any, idx: number) => {
                      return (
                        <td
                          key={idx}
                          className="h-auto w-auto border-collapse border-b-2 border-bnw-500 px-2 py-3 text-center xl:px-4 min-w-max"
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <td colSpan={header.length}>
                <p className="text-center text-[20px] py-5">
                  Data tidak ditemukan
                </p>
              </td>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
