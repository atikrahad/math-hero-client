import { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("problem.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "title",
      },
      {
        Header: "Type",
        accessor: "problemType",
      },
      {
        Header: "Priotity",
        accessor: "problemPriority",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container">
      <table className="w-full " {...getTableProps()}>
        <thead className="h-20 bg-slate-100">
          {headerGroups.map((HG) => (
            <tr className="" {...HG.getHeaderGroupProps()}>
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
              <tr className="border-b h-12" key={index} {...item.getRowProps}>
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
