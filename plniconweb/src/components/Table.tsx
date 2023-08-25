import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";

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
  return (
    <>
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
                            <button className="bg-blue-primary p-2 rounded hover:bg-blue-hover active:bg-blue-click text-text-light">
                              <BsBarChartFill />
                            </button>
                            <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                              Details
                            </p>
                          </div>
                        )}
                        {role == "admin" && (
                          <>
                            <div className="group relative">
                              <button className="bg-yellow-primary p-2 rounded hover:bg-yellow-hover active:bg-yellow-click text-text-light">
                                <BiSolidPencil />
                              </button>
                              <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">
                                Edit
                              </p>
                            </div>
                            <div className="group relative">
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
