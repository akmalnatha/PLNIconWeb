import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import CardPOP from './components/CardPOP'
import Table from './components/Table'
import Dashboard from './pages/dashboard'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      id: 1,
      Tanggal: "15 Juli 2023",
      Nama: "Agus",
      Barang: "Waduh",
      jenis: "kopeng",
      jumlah: 2,
      satuan: 1,
    },
    {
      id: 2,
      Tanggal: "15 Juli 2023",
      Nama: "Agus",
      Barang: "Waduh",
      jenis: "kopeng",
      jumlah: 2,
      satuan: 1,
    },
    {
      id: 3,
      Tanggal: "15 Juli 2023",
      Nama: "Agus",
      Barang: "Waduh",
      jenis: "kopeng",
      jumlah: 2,
      satuan: 1,
    },
  ];
  const kolom = [
    "No",
    "Tanggal",
    "Nama",
    "Barang",
    "Jenis",
    "Jumlah",
    "Satuan",
  ];

  return (
    <>
      <Dashboard/>
      {/* <Table data={data} header={kolom}/> */}
      {/* <p className='font-montserrat font-bold text-2xl text-blue-primary'>kontol</p> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="font-montserrat font-bold">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
