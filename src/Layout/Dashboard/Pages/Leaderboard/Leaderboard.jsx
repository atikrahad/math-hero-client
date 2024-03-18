import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { MdOutlinePreview } from "react-icons/md";
import { Link } from "react-router-dom";
const Leaderboard = () => {
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
        Header: "Details",
        accessor: "mathCategory",
      },
      {
        Header: "View Profile",
        accessor: ()=> <Link><MdOutlinePreview className="text-5xl text-green-400"/></Link>,
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container max-w-screen-xl mx-auto">
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

export default Leaderboard;
