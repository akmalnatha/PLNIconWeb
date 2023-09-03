import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";
import Modal from "./Modal";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Table({
  data,
  header,
  tipe,
  role,
  isLoading,
  dataTambahan,
}: {
  data: any[];
  header: any[];
  tipe: string;
  role: string;
  isLoading: boolean;
  dataTambahan?: any[];
}) {
  const [showDetailPM, setShowDetailPM] = useState(false);

  const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(0);

  const navigate = useNavigate();

  //DETAIL PM
  const [detailIdPm, setDetailIdPm] = useState("")
  const [detailStatus, setDetailStatus] = useState<ReactNode>()
  const [detailPlan, setDetailPlan] = useState("")
  const [detailWilayah, setDetailWilayah] = useState("")
  const [detailArea, setDetailArea] = useState("")
  const [detailJenis, setDetailJenis] = useState("")
  const [detailKategori, setDetailKategori] = useState("")
  const [detailPengerjaan, setDetailPengerjaan] = useState("")
  const [detailNamaPop, setDetailNamaPop] = useState("")
  
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

  function dataDetailPm(tipe:string, url:string, id?: string, plan?: Date, status?: ReactNode, wilayah?: string, area?: string, jenis?: string, kategori?: string, detail_pm?: string, nama_pop?: string){
    if (tipe){
      switch (tipe){
        case "pm":
          setDetailIdPm(id!);
          const planString = plan!.toLocaleString();
          setDetailPlan(planString);
          setDetailStatus(status!);
          setDetailWilayah(wilayah!);
          setDetailArea(area!);
          setDetailJenis(jenis!)
          setDetailKategori(kategori!);
          setDetailPengerjaan(detail_pm!);
          setDetailNamaPop(nama_pop!);
          setShowDetailPM(true); 
          break;
        default:
          navigate(url);
          console.log("yoyoii")
          break;
      }
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
              <span>{detailIdPm}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Plan : </span>
              <span>{detailPlan}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Realisasi : </span>
              <span>-</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Status : </span>
              <span>{detailStatus}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Wilayah : </span>
              <span>{detailWilayah}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Area : </span>
              <span>{detailArea}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Jenis PM : </span>
              <span>{detailJenis}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Kategori PM : </span>
              <span>{detailKategori}</span>
            </div>
            <div className="text-[20px]">
              <span className="font-semibold">Detail PM : </span>
              <span>{detailPengerjaan}</span>
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
              <span>{detailNamaPop}</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Temuan : </span>
              <span>-</span>
            </div>
            <div className="text-[20px] col-span-3">
              <span className="font-semibold">Link Laporan OSP : </span>
              <span>
                -
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
        <table className="min-w-full overflow-visible">
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
          <tbody className="overflow-visible">
            {isLoading ? (
              <Load />
            ) : data.length > 0 ? (
              Object.values(data).map((obj: any, idx: number) => {
                return (
                  <tr key={idx} className="overflow-visible">
                    <td className="h-auto w-auto overflow-visible border-collapse border-b-2 border-bnw-500 px-2 py-3 text-center xl:px-4">
                      <div className="flex items-center overflow-visible justify-center gap-1">
                        {tipe != "user" && (
                          <div className="group relative">
                            <button className="bg-blue-primary p-2 rounded hover:bg-blue-hover active:bg-blue-click text-text-light" onClick={() => dataDetailPm(tipe, "dashboard-pop/info-umum", obj.id, obj.plan, obj.status, obj.wilayah, obj.area, obj.jenis, obj.kategori, dataTambahan && dataTambahan[idx] && dataTambahan[idx].detail_pm, dataTambahan && dataTambahan[idx] && dataTambahan[idx].datapop.nama)}>
                              <BsBarChartFill />
                            </button>
                            <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                              Details
                            </p>
                          </div>
                        )}
                        {role == "admin" && (
                          <>
                            <div className="group relative" onClick={() => navigate(`edit/${dataTambahan![idx].id}`)}>
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
