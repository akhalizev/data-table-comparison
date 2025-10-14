'use client'
import * as React from 'react'
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table'
import Link from 'next/link'

type Person = { firstName: string; lastName: string; age: number }

const columns: MRT_ColumnDef<Person>[] = [
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'age', header: 'Age' },
]

const data: Person[] = [
  { firstName: 'Jane', lastName: 'Doe', age: 28 },
  { firstName: 'John', lastName: 'Smith', age: 34 },
]

export default function MrtPage() {
  return (
    <main className="container" style={{ padding: '2rem 0' }}>
      <nav className="page-nav">
        <Link href="/mui">← MUI Data Grid</Link>
        <span>Material React Table</span>
        <Link href="/tanstack">TanStack Table →</Link>
      </nav>
      <h2>Material React Table — Basic Implementation</h2>
      <p>This example shows a basic Material React Table built on TanStack Table with MUI components for rich functionality out of the box.</p>
      <div style={{ maxWidth: 1100 }}>
        <MaterialReactTable<Person> columns={columns} data={data} />
      </div>
    </main>
  )
}
