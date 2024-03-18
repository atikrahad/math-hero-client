import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
const Table = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_url}/problems`)
    .then(dat => dat.json())
    .then(res=> setData(res))
  },[setData])

  console.log(data);
  
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "author-name",
      },
      {
        Header: "Problem Name",
        accessor: "problemTitle",
      },
      {
        Header: "Priotity",
        accessor: "priority",
      },
      {
        Header: "Details",
        accessor:()=> <Link> <FcViewDetails className="text-3xl"/></Link>,
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container">
      <table className="w-full " {...getTableProps()}>
        <thead className="h-20 badge-ghost">
          {headerGroups.map((HG) => (
            <tr className="shadow-md" {...HG.getHeaderGroupProps()}>
              {HG.headers.map((coloum) => (
                <th className="text-start px-3" {...coloum.getHeaderProps()}>
                  {coloum.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full" {...getTableBodyProps()}>
          {rows.map((item, index) => {
            prepareRow(item);
            return (
              <tr className=" h-12" key={index} {...item.getRowProps}>
                {item.cells.map((cell, index) => (
                  <td className="px-3" key={index} {...cell.getCellProps}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
