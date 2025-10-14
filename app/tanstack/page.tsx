'use client'
import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import Link from 'next/link'

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
      <nav className="page-nav">
        <Link href="/mrt">← Material React Table</Link>
        <span>TanStack Table</span>
        <Link href="/mui">MUI Data Grid →</Link>
      </nav>
      <h2>TanStack Table — Basic Implementation</h2>
      <p>This example shows a basic TanStack Table with custom styling. TanStack Table is headless, giving you full control over the UI.</p>
      <table className="comparison-table" style={{ maxWidth: 1100 }}>
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
