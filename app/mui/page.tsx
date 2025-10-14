'use client'
import * as React from 'react'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  { field: 'age', headerName: 'Age', type: 'number', width: 120 },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Stark', firstName: 'Arya', age: 16 },
]

export default function MuiPage() {
  return (
    <main className="container" style={{ padding: '2rem 0' }}>
      <nav className="page-nav">
        <Link href="/tanstack">← TanStack Table</Link>
        <span>MUI Data Grid</span>
        <Link href="/mrt">Material React Table →</Link>
      </nav>
      <h2>MUI Data Grid — Basic Implementation</h2>
      <p>This example shows a basic MUI Data Grid with sorting, filtering, and pagination built-in.</p>
      <div style={{ height: 420, maxWidth: 1100 }}>
        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
      </div>
    </main>
  )
}
