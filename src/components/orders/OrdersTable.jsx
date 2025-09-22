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
  FaEye,
} from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import {
  HiOutlineCalendarDateRange,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

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
  const [viewMode, setViewMode] = useState("table");
  const [selectedRows, setSelectedRows] = useState(new Set());

  const columnHelper = createColumnHelper();

  // Handle row selection
  const toggleRowSelection = (rowId) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId);
    } else {
      newSelectedRows.add(rowId);
    }
    setSelectedRows(newSelectedRows);
  };

  const toggleAllRows = (filteredData) => {
    const allFilteredIds = filteredData.map((row) => row.id);
    const allSelected = allFilteredIds.every((id) => selectedRows.has(id));

    if (allSelected) {
      // Unselect all filtered rows
      const newSelectedRows = new Set(selectedRows);
      allFilteredIds.forEach((id) => newSelectedRows.delete(id));
      setSelectedRows(newSelectedRows);
    } else {
      // Select all filtered rows
      const newSelectedRows = new Set(selectedRows);
      allFilteredIds.forEach((id) => newSelectedRows.add(id));
      setSelectedRows(newSelectedRows);
    }
  };

  const columns = [
    columnHelper.display({
      id: "select",
      header: ({ table }) => {
        const filteredData = table
          .getFilteredRowModel()
          .rows.map((row) => row.original);
        const allFilteredIds = filteredData.map((row) => row.id);
        const allSelected =
          allFilteredIds.length > 0 &&
          allFilteredIds.every((id) => selectedRows.has(id));
        const someSelected = allFilteredIds.some((id) => selectedRows.has(id));

        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={allSelected}
              ref={(input) => {
                if (input) input.indeterminate = !allSelected && someSelected;
              }}
              onChange={() => toggleAllRows(filteredData)}
              className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={selectedRows.has(row.original.id)}
            onChange={() => toggleRowSelection(row.original.id)}
            className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 rounded focus:ring-blue-500 focus:ring-2"
          />
        </div>
      ),
      size: 50,
    }),
    columnHelper.accessor("id", {
      header: "Order ID",
      cell: (info) => (
        <div className="font-medium text-gray-900 dark:text-white">
          #{info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("user", {
      header: "User",
      cell: (info) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
            <PiUser size={16} />
          </div>
          <span className="font-medium text-gray-900 dark:text-white truncate">
            {info.getValue().name}
          </span>
        </div>
      ),
      sortingFn: (a, b) =>
        a.original.user.name.localeCompare(b.original.user.name),
    }),
    columnHelper.accessor("project", {
      header: "Project",
      cell: (info) => (
        <span className="text-gray-900 dark:text-white truncate block">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("address", {
      header: "Address",
      cell: (info) => (
        <span className="text-gray-600 dark:text-gray-300 truncate block">
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => (
        <span className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
          <HiOutlineCalendarDateRange size={14} />
          <span className="truncate">{info.getValue()}</span>
        </span>
      ),
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
            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${
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
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const uniqueStatuses = [...new Set(data.map((item) => item.status))];

  // Mobile card view component
  const OrderCard = ({ order }) => {
    const statusStyles = {
      "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
      Complete: "bg-green-100 text-green-800 border-green-200",
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Approved: "bg-purple-100 text-purple-800 border-purple-200",
      Rejected: "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <div
        className={`bg-white dark:bg-neutral-800 rounded-lg border p-4 mb-4 transition-colors ${
          selectedRows.has(order.id)
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-gray-200 dark:border-neutral-700"
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedRows.has(order.id)}
              onChange={() => toggleRowSelection(order.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-neutral-700 border-gray-300 dark:border-neutral-600 rounded focus:ring-blue-500 focus:ring-2 mt-1"
            />
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
              <PiUser size={16} />
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">
                {order.user.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                #{order.id}
              </div>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              statusStyles[order.status] || "bg-gray-100 text-gray-800"
            }`}
          >
            {order.status}
          </span>
        </div>

        <div className="space-y-2 ml-7">
          <div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Project:
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
              {order.project}
            </span>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Address:
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
              {order.address}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <HiOutlineCalendarDateRange size={14} className="mr-1" />
            {order.date}
          </div>
        </div>
      </div>
    );
  };

  // Clear selections when filters change
  React.useEffect(() => {
    setSelectedRows(new Set());
  }, [statusFilter, filtering]);

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-50 dark:bg-black">
      <div className="max-w-full">
        <div className="bg-white dark:bg-black rounded-lg">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Order List
                </h1>
                {selectedRows.size > 0 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {selectedRows.size} order
                    {selectedRows.size !== 1 ? "s" : ""} selected
                  </p>
                )}
              </div>

              {/* View mode toggle - Mobile only */}
              <div className="sm:hidden flex bg-gray-100 dark:bg-neutral-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("cards")}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                    viewMode === "cards"
                      ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                    viewMode === "table"
                      ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Status Filter */}
              <div className="flex items-center space-x-3">
                <FaFilter className="text-gray-400 w-4 h-4 flex-shrink-0" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm min-w-0"
                >
                  <option value="all">All Status</option>
                  {uniqueStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div className="relative flex-1 sm:max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={filtering}
                  onChange={(e) => setFiltering(e.target.value)}
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-neutral-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-neutral-800 text-gray-900 dark:text-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Mobile Card View */}
            {viewMode === "cards" && (
              <div className="sm:hidden">
                {table.getRowModel().rows.length === 0 ? (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    No orders found
                  </div>
                ) : (
                  table
                    .getRowModel()
                    .rows.map((row) => (
                      <OrderCard key={row.id} order={row.original} />
                    ))
                )}
              </div>
            )}

            {/* Table View */}
            {(viewMode === "table" || window.innerWidth >= 640) && (
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead className="border-b border-gray-200 dark:border-neutral-700">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className={`px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors ${
                              header.column.getCanSort()
                                ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-800"
                                : ""
                            }`}
                            onClick={header.column.getToggleSortingHandler()}
                            style={{ width: header.getSize() }}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="truncate">
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              </span>
                              {header.column.getCanSort() && (
                                <div className="flex flex-col">
                                  {header.column.getIsSorted() === "asc" && (
                                    <FaChevronUp className="w-3 h-3 text-gray-400" />
                                  )}
                                  {header.column.getIsSorted() === "desc" && (
                                    <FaChevronDown className="w-3 h-3 text-gray-400" />
                                  )}
                                  {!header.column.getIsSorted() && (
                                    <div className="w-3 h-3 text-gray-300">
                                      <FaChevronUp className="w-2 h-2" />
                                      <FaChevronDown className="w-2 h-2 -mt-0.5" />
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-neutral-700">
                    {table.getRowModel().rows.length === 0 ? (
                      <tr>
                        <td
                          colSpan={columns.length}
                          className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                        >
                          No orders found
                        </td>
                      </tr>
                    ) : (
                      table.getRowModel().rows.map((row) => (
                        <tr
                          key={row.id}
                          className={`transition-colors ${
                            selectedRows.has(row.original.id)
                              ? "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                              : "hover:bg-gray-50 dark:hover:bg-neutral-900"
                          }`}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="px-3 sm:px-6 py-4 text-sm"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 bg-gray-50 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              {/* Results info */}
              <div className="text-sm text-gray-700 dark:text-gray-300">
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
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-center sm:justify-end space-x-2">
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronLeft className="w-3 h-3" />
                </button>

                {/* Page numbers - Show fewer on mobile */}
                <div className="flex space-x-1">
                  {Array.from(
                    { length: Math.min(table.getPageCount(), 5) },
                    (_, i) => {
                      const pageIndex = table.getState().pagination.pageIndex;
                      const totalPages = table.getPageCount();

                      // Calculate which pages to show
                      let startPage = Math.max(0, pageIndex - 2);
                      let endPage = Math.min(totalPages - 1, startPage + 4);

                      if (endPage - startPage < 4) {
                        startPage = Math.max(0, endPage - 4);
                      }

                      const displayPage = startPage + i;

                      if (displayPage > endPage) return null;

                      return (
                        <button
                          key={displayPage}
                          onClick={() => table.setPageIndex(displayPage)}
                          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            pageIndex === displayPage
                              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700"
                          }`}
                        >
                          {displayPage + 1}
                        </button>
                      );
                    }
                  )}
                </div>

                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaChevronRight className="w-3 h-3" />
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
