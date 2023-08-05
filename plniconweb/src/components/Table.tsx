import { BiSolidPencil } from "react-icons/bi";
import { BsBarChartFill, BsTrashFill } from "react-icons/bs";


function Table({ data, header }: { data: any; header: any }) {
  return (
    <>
      <div className="flex overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="h-auto w-auto border-collapse bg-blue-primary px-2 py-1 text-center font-normal xl:px-4">
                <p>Action</p>
              </th>
              {header.map((cell: any, idx: number) => {
                return (
                  <th
                    key={idx}
                    className="h-auto w-auto border-collapse bg-blue-primary px-2 py-1 text-center font-normal xl:px-4"
                  >
                    {cell}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((obj: any, idx: number) => {
              return (
                <tr key={idx}>
                  <td className="h-auto w-auto border-collapse border-b-2 border-bnw-500 px-2 py-3 xl:px-4 flex gap-1 justify-center items-center">
                    <div className="group relative">
                        <button className="bg-blue-primary p-2 rounded hover:bg-blue-hover active:bg-blue-click text-text-light">
                            <BsBarChartFill/>
                        </button>
                        <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">Details</p>
                    </div>
                    <div className="group relative">
                        <button className="bg-yellow-primary p-2 rounded hover:bg-yellow-hover active:bg-yellow-click text-text-light">
                            <BiSolidPencil/>
                        </button>
                        <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">Edit</p>
                    </div>
                    <div className="group relative">
                        <button className="bg-red-primary p-2 rounded hover:bg-red-hover active:bg-red-click text-text-light">
                            <BsTrashFill/>
                        </button>
                        <p className="p-1 rounded z-10 shadow-lg hidden group-hover:block absolute bg-bnw-50">Delete</p>
                    </div>
                  </td>
                  {Object.values(obj).map((cell: any, idx: number) => {
                    return (
                      <td
                        key={idx}
                        className="h-auto w-auto border-collapse border-b-2 border-bnw-500 px-2 py-3 text-center xl:px-4"
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
