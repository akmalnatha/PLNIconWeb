import { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function Pagination({
  current,
  totalPages,
}: {
  current: (x: number) => void | undefined;
  totalPages: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (totalPages < currentPage) {
      setCurrentPage(1);
    }
  }, [totalPages]);

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
            pageNumbers.push(
              <li className="text-blue-primary border-2 border-x-[1px] px-3 py-1 border-blue-primary">
                ...
              </li>
            );
          }
        } else {
          if (i >= totalPages - 3 || i <= totalPages - currentPage + 1) {
            pushPage(pageNumbers, i);
          } else if (i == totalPages - 4) {
            pageNumbers.push(
              <li className="text-blue-primary border-2 border-x-[1px] px-3 py-1 border-blue-primary">
                ...
              </li>
            );
          }
        }
      }
    }
    return pageNumbers;
  };
  return (
    <>
      <div className="mt-10 w-full ">
        <ul className="flex w-auto items-center justify-center">
          <li
            className={
              currentPage > 1
                ? "flex p-2 cursor-pointer items-center justify-center hover:text-text-light text-blue-primary hover:bg-blue-hover border-2 border-r-[1px] border-blue-primary active:bg-blue-click"
                : "hidden"
            }
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <MdArrowBackIosNew />
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
            <MdArrowForwardIos />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pagination;
