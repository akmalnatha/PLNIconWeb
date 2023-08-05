import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import CardPOP from './components/CardPOP'
import Table from './components/Table'
import Dashboard from './pages/dashboard/dashboard'
import DaftarUser from './pages/daftar_user/daftar_user'
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
      <DaftarUser/>
    </>
  )
}

export default App
