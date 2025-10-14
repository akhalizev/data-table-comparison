'use client'
import * as React from 'react'
import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table'

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
      <h2>Material React Table — Basic</h2>
      <MaterialReactTable columns={columns} data={data} />
    </main>
  )
}
