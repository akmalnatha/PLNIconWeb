import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

function Pagination({
  current,
  totalData,
  dataLimit,
}: {
  totalData: number;
  dataLimit: number;
  current: (x: number) => void | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages: number =
    totalData % dataLimit === 0
      ? totalData / dataLimit
      : Math.floor(totalData / dataLimit) + 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    current(page);
  };

  const pushPage = (pageNumbers: JSX.Element[], i: number) => {
    pageNumbers.push(
      <li
        key={i}
        className={`cursor-pointer px-3 py-1 ${
          currentPage === i
            ? "border-2 border-x-[1px] bg-blue-primary border-blue-primary text-text-light"
            : "hover:text-text-light text-blue-primary hover:bg-blue-hover active:bg-blue-click border-2 border-x-[1px] border-blue-primary"
        }`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </li>
    );
  };

  const renderPage = () => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages < 5) {
        pushPage(pageNumbers, i);
      } else {
        if (currentPage < totalPages - 3) {
          if (
            (i < currentPage + 3 && i >= currentPage - 1) ||
            i == totalPages
          ) {
            pushPage(pageNumbers, i);
          } else if (i == currentPage + 3) {
            pageNumbers.push(<li className="text-blue-primary border-2 border-x-[1px] px-3 py-1 border-blue-primary">...</li>);
          }
        } else {
          if (i >= totalPages - 3 || i <= totalPages - currentPage + 1) {
            pushPage(pageNumbers, i);
          } else if (i == totalPages - 4) {
            pageNumbers.push(<li className="text-blue-primary border-2 border-x-[1px] px-3 py-1 border-blue-primary">...</li>);
          }
        }
      }
    }
    return pageNumbers;
  };
  return (
    <>
      {/* {totalData == 0 && (
        <div className="mt-12 text-center text-12 xl:text-14">
          Data Tidak Ditemukan
        </div>
      )} */}
      <div className="mt-[66px] w-full ">
        <ul className="flex w-auto items-center justify-center">
          <li
            className={
              currentPage > 1
                ? "flex p-2 cursor-pointer items-center justify-center hover:text-text-light text-blue-primary hover:bg-blue-hover border-2 border-r-[1px] border-blue-primary active:bg-blue-click"
                : "hidden"
            }
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <MdArrowBackIosNew/>
          </li>
          {renderPage()}
          <li
            className={
              currentPage < totalPages
                ? "flex p-2 cursor-pointer items-center justify-center hover:text-text-light text-blue-primary hover:bg-blue-hover border-2 border-l-[1px] border-blue-primary active:bg-blue-click"
                : "hidden"
            }
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <MdArrowForwardIos/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pagination;
