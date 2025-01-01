"use client";

import React from "react";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";
import { TaskCategory } from "@/types/task.type";

// Define columns
const columnHelper = createColumnHelper();
// const columns = [
//   columnHelper.accessor("name", {
//     header: "Name"
//   }),
//   columnHelper.accessor("status", {
//     header: "Status"
//   }),
//   columnHelper.accessor("priority", {
//     header: "Priority"
//   })
// ];

const TableWithFeature = ({ task }: { task: any[] }) => {
  const keys = Object.keys(task[0]);

  console.log(keys, "keys");

  const columns = keys.map((key) =>
    columnHelper.accessor(key, {
      header: key
    })
  );

  const table = useReactTable({
    data: task,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  console.log(table, "table");

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableWithFeature;
