import Link from 'next/link'

const codeTanstack = `// App.tsx
import React from 'react'
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'

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

export default function App() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(hg => (
          <tr key={hg.id}>
            {hg.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
`

const codeMui = `// App.tsx
import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  { field: 'age', headerName: 'Age', type: 'number', width: 120 },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
]

export default function App() {
  return (
    <div style={{ height: 400 }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
    </div>
  )
}
`

const codeMrt = `// App.tsx
import React from 'react'
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

export default function App() {
  return <MaterialReactTable columns={columns} data={data} />
}
`

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <h1>Data Table Libraries</h1>
          <nav className="nav">
            <a href="#comparison">Comparison</a>
            <Link href="/mui">MUI</Link>
            <Link href="/tanstack">TanStack</Link>
            <Link href="/mrt">MRT</Link>
            <a href="#notes">Notes</a>
          </nav>
        </div>
      </header>
      <main className="container">
        <section className="hero">
          <h2>Visual comparison and example implementations</h2>
          <p>
            This page compares three popular React data grid/table options and shows minimal example setups:{' '}
            <Link href="https://tanstack.com/table/latest" target="_blank">TanStack Table</Link>,{' '}
            <Link href="https://mui.com/x/react-data-grid/" target="_blank">MUI Data Grid</Link>, and{' '}
            <Link href="https://www.material-react-table.com/" target="_blank">Material React Table</Link>.
          </p>
        </section>

        <section id="comparison" className="comparison">
          <h3>Feature comparison</h3>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>TanStack Table</th>
                  <th>MUI Data Grid</th>
                  <th>Material React Table</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feat">Library type</td>
                  <td>Headless table utilities</td>
                  <td>Full-featured UI data grid</td>
                  <td>UI table built on TanStack + MUI</td>
                </tr>
                <tr>
                  <td className="feat">Framework support</td>
                  <td>React, Vue, Svelte, more</td>
                  <td>React only</td>
                  <td>React only</td>
                </tr>
                <tr>
                  <td className="feat">Sorting</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Filtering</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Pagination</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Virtualization</td>
                  <td className="maybe">Via react-virtual</td>
                  <td className="yes">Built-in</td>
                  <td className="maybe">Via virtualization options</td>
                </tr>
                <tr>
                  <td className="feat">Row selection</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Row editing</td>
                  <td className="maybe">Custom/render</td>
                  <td className="yes">Yes (Pro/Premium)</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Row/Column pinning</td>
                  <td className="maybe">Custom via plugins</td>
                  <td className="maybe">Pro only</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Tree/Grouping</td>
                  <td className="maybe">Custom code / grouping</td>
                  <td className="maybe">Premium only (tree/aggregation)</td>
                  <td className="yes">Grouping/Expanding</td>
                </tr>
                <tr>
                  <td className="feat">Server-side mode</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">Accessibility</td>
                  <td className="yes">WCAG-friendly (depends on UI)</td>
                  <td className="yes">ARIA/WCAG</td>
                  <td className="yes">ARIA/WCAG (MUI based)</td>
                </tr>
                <tr>
                  <td className="feat">TypeScript</td>
                  <td className="yes">First-class</td>
                  <td className="yes">First-class</td>
                  <td className="yes">First-class</td>
                </tr>
                <tr>
                  <td className="feat">Built-in styling/theming</td>
                  <td>Bring your own UI</td>
                  <td>MUI theme system</td>
                  <td>MUI theme system</td>
                </tr>
                <tr>
                  <td className="feat">Excel export</td>
                  <td className="maybe">3rd-party</td>
                  <td className="maybe">Premium only</td>
                  <td className="yes">Yes</td>
                </tr>
                <tr>
                  <td className="feat">License</td>
                  <td>MIT</td>
                  <td>MIT (Data Grid), commercial for Pro/Premium</td>
                  <td>MIT</td>
                </tr>
                <tr>
                  <td className="feat">When to use</td>
                  <td>Max control, custom design systems</td>
                  <td>Out-of-the-box enterprise grid</td>
                  <td>Material UI apps needing rich table</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note small">Notes: Specific features can vary by version. Some advanced features in MUI Data Grid require Pro or Premium licenses. Material React Table builds on TanStack Table with MUI components.</p>
        </section>

        

        <section id="notes" className="notes">
          <h3>Notes and scope</h3>
          <ul>
            <li>Examples are simplified and meant to show basic setup, not full feature breadth.</li>
            <li>Feature availability can change by version; check the official docs for the latest as of your stack.</li>
            <li>MUI Data Grid advanced features like row editing, aggregation, and tree data may require Pro or Premium.</li>
            <li>TanStack Table is headless: you render your own markup and styling for full control.</li>
          </ul>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Updated: Oct 14, 2025 • Built for quick research and side-by-side comparison.</p>
        </div>
      </footer>
    </>
  )
}
