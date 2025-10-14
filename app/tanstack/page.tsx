'use client'
import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'

type Person = { firstName: string; lastName: string; age: number }

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', { header: 'First Name' }),
  columnHelper.accessor('lastName', { header: 'Last Name' }),
  columnHelper.accessor('age', { header: 'Age' }),
]

const data: Person[] = [
  { firstName: 'Jane', lastName: 'Doe', age: 28 },
  { firstName: 'John', lastName: 'Smith', age: 34 },
]

export default function TanstackPage() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <main className="container" style={{ padding: '2rem 0' }}>
      <h2>TanStack Table — Basic</h2>
      <table className="comparison-table" style={{ maxWidth: 900 }}>
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
