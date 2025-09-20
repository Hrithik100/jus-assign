import React, { useState, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

const OrdersTable = () => {
  const data = [
    {
      id: "CAP801",
      user: { name: "Natali Craig" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "CAP802",
      user: { name: "Kate Morrison" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "CAP803",
      user: { name: "Drew Cano" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "CAP804",
      user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "CAP805",
      user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
    {
      id: "CAP806",
      user: { name: "Nataliu Craig", avatar: "/api/placeholder/32/32" },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "CAP807",
      user: { name: "Katef Morrison" },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "CAP808",
      user: { name: "Drewwdd Cano" },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "CAP809",
      user: { name: "Orlandoff Diggs" },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "CAP810",
      user: { name: "Andisd Lane" },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "Order ID",
      cell: (info) => (
        <div className="font-medium text-gray-900 dark:text-white">#{info.getValue()}</div>
      ),
    }),
    columnHelper.accessor("user", {
      header: "User",
      cell: (info) => (
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
            <PiUser />
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {info.getValue().name}
          </span>
        </div>
      ),
      sortingFn: (a, b) =>
        a.original.user.name.localeCompare(b.original.user.name),
    }),
    columnHelper.accessor("project", {
      header: "Project",
      cell: (info) => <span className="text-gray-900 dark:text-white">{info.getValue()}</span>,
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => <span className="text-gray-600 dark:text-white">{info.getValue()}</span>,
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => <span className="text-gray-600 dark:text-white flex items-center gap-1"><HiOutlineCalendarDateRange size={16}/>{info.getValue()}</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue();
        const statusStyles = {
          "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
          Complete: "bg-green-100 text-green-800 border-green-200",
          Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
          Approved: "bg-purple-100 text-purple-800 border-purple-200",
          Rejected: "bg-red-100 text-red-800 border-red-200",
        };
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              statusStyles[status] || "bg-gray-100 text-gray-800"
            }`}
          >
            {status}
          </span>
        );
      },
    }),
  ];

  const filteredData = useMemo(() => {
    let result = data;

   
    if (statusFilter !== "all") {
      result = result.filter((item) => item.status === statusFilter);
    }

 
    if (filtering) {
      result = result.filter((item) => {
        const searchString = filtering.toLowerCase();
        return (
          item.id.toLowerCase().includes(searchString) ||
          item.user.name.toLowerCase().includes(searchString) ||
          item.project.toLowerCase().includes(searchString) ||
          item.address.toLowerCase().includes(searchString) ||
          item.date.toLowerCase().includes(searchString) ||
          item.status.toLowerCase().includes(searchString)
        );
      });
    }

    return result;
  }, [statusFilter, filtering]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const uniqueStatuses = [...new Set(data.map((item) => item.status))];

  return (
    <div className="p-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-black">
     

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order List</h1>

       
          <div className="px-6 py-2 bg-gray-50 rounded-lg my-4 dark:bg-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                  <FaFilter className="text-gray-400 w-4 h-4" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-200 focus:border-transparent outline-none dark:text-white"
                  >
                    <option className="text-sm" value="all">
                      All Status
                    </option>
                    {uniqueStatuses.map((status) => (
                      <option className="text-sm dark:text-black" key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={filtering}
                  onChange={(e) => setFiltering(e.target.value)}
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-200 focus:border-transparent outline-none dark:text-white"
                />
              </div>
            </div>
          </div>

    
          <div className="overflow-x-auto dark:bg-black">
            <table className="w-full">
              <thead className=" border-b border-gray-200">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <div className="flex items-center space-x-2">
                          <span>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                          <div className="flex flex-col">
                            {header.column.getIsSorted() === "asc" && (
                              <FaChevronUp className="w-4 h-4 text-gray-400" />
                            )}
                            {header.column.getIsSorted() === "desc" && (
                              <FaChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                            {!header.column.getIsSorted() && (
                              <div className="w-4 h-4 text-gray-300">
                                <FaChevronUp className="w-3 h-3" />
                                <FaChevronDown className="w-3 h-3 -mt-1" />
                              </div>
                            )}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-black">
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors text-sm "
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap ">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 dark:bg-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-white">
                <span>
                  Showing{" "}
                  {table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    1}{" "}
                  to{" "}
                  {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                      table.getState().pagination.pageSize,
                    table.getFilteredRowModel().rows.length
                  )}{" "}
                  of {table.getFilteredRowModel().rows.length} entries
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: table.getPageCount() }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => table.setPageIndex(i)}
                      className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                        table.getState().pagination.pageIndex === i
                          ? "bg-gray-700 text-white"
                          : "text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
