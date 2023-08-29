import { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Navbar from "../../components/Navbar";
import CardCarousel from "../../components/CardCarousel";
import Slides from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dashboard.css";
import DateField from "../../components/DateField";
import StackedbarChartJenis from "../../components/StackedbarChartJenisPOP";
import StackedbarChartKabKot from "../../components/StackedbarChartKabKot";
import Table from "../../components/Table";
import Status from "../../components/Status";
import Footer from "../../components/footer";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getWithAuth } from "../../api/api";
import { toastSuccess, toastError } from "../../components/Toast";

function Dashboard() {
  const kolom = [
    "Action",
    "ID",
    "Status",
    "Plan",
    "Jenis PM",
    "Kategori PM",
    "Wilayah",
    "Area",
    "Field Support",
    "Kontak",
  ];

  //Carousel
  const [sliderRef, setSliderRef] = useState<any>(null);

  const [dataPopSb, setDataPopSb] = useState<number[][]>([[], [], []]);
  const [dataPopB, setDataPopB] = useState<number[][]>([[], [], []]);
  const [dataPopD, setDataPopD] = useState<number[][]>([[], [], []]);
  const [dataPopA, setDataPopA] = useState<number[][]>([[], [], []]);
  const [dataCpePln, setDataCpePln] = useState<number[][]>([[], [], []]);

  const [dataRemainingStatus, setDataRemainingStatus] = useState<number[]>([]);
  const [dataRealisasi, setDataRealisasi] = useState<number[]>([]);

  //Page Attributes
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //Page Data
  const [dataPm, setDataPm] = useState<any[]>([]);
  const [dataPop, setDataPop] = useState<any[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [filteredDataPm, setFilteredDataPm] = useState<any[]>([]);

  const token = localStorage.getItem("access_token");
  const getListPop = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const listpop = await getWithAuth(token, "pop");
        console.log(listpop);
        setDataPop(
          listpop.data.data.map((data: any) => {
            return {
              id: data.pop_kode,
              nama: data.nama,
              wilayah: data.wilayah,
              koordinat: data.koordinat,
              alamat: data.alamat,
              kelurahan: data.kelurahan,
              kecamatan: data.kecamatan,
              kota: data.kota,
              building: data.building,
              tipe: data.tipe,
            };
          })
        );
        toastSuccess("Get Data List POP Successful");
      } catch (error) {
        toastError("Get Data List POP Failed");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getJadwalPm = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const jadwalpm = await getWithAuth(token, "jadwalpm");
        console.log(jadwalpm);
        setDataPm(
          jadwalpm.data.data.map((data: any) => {
            return {
              id: data.pm_kode,
              status: <Status type={data.status} />,
              plan: moment(data.plan).format("YYYY-MM-DD"),
              jenis: data.jenis,
              kategori: data.kategori,
              wilayah: data.wilayah,
              area: data.area,
              user: data.user.nama,
              kontak: data.user.phone,
            };
          })
        );
        toastSuccess("Get Data Jadwal PM Successful");
      } catch (error) {
        toastError("Get Data Jadwal PM Failed");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const processFilteredData = (
      filteredData: any[],
      setDataFunc: React.Dispatch<React.SetStateAction<number[][]>>,
      setDataRealisasiFunc: React.Dispatch<React.SetStateAction<number[]>>,
      setDataRemainingFunc: React.Dispatch<React.SetStateAction<number[]>>
    ) => {
      let shelterCount = 0;
      let ruangKantorCount = 0;
      let odcCount = 0;
      let miniPopCount = 0;
      let microPopCount = 0;
      let oltGantungCount = 0;

      let HarjakCount = 0;
      let HarBdbCount = 0;

      let realisasiCount = 0;
      let totalStatusCount = 0;

      filteredData.forEach((item: any) => {
        if (item.wilayah) {
          switch (item.wilayah) {
            case "Jakarta":
              HarjakCount++;
              break;
            case "Banten Bodebek":
              HarBdbCount++;
              break;
          }
        }
        if (item.building) {
          switch (item.building) {
            case "Shelter Permanen":
            case "Shelter CKD":
              shelterCount++;
              break;
            case "Ruang Kantor":
              ruangKantorCount++;
              break;
            case "ODC":
              odcCount++;
              break;
            case "Mini POP":
              miniPopCount++;
              break;
            case "Mikro POP":
              microPopCount++;
              break;
            case "OLT Gantung":
              oltGantungCount++;
              break;
          }
        }
        if (item.status) {
          switch (item.status) {
            case "REALISASI":
              realisasiCount++;
              totalStatusCount++;
              break;
            case "PLAN":
              totalStatusCount++;
              break;
          }
        }
        dataPm.forEach((data: string) => {
        })
      });
      let remainingCount = 0;
      remainingCount = totalStatusCount - realisasiCount;
      const newData = [
        [
          shelterCount,
          ruangKantorCount,
          odcCount,
          miniPopCount,
          microPopCount,
          oltGantungCount,
        ],
        [HarjakCount, HarBdbCount],
        [],
      ];
      setDataFunc(newData);
      setDataRealisasiFunc((children) => [...children, realisasiCount]);
      setDataRemainingFunc((children) => [...children, remainingCount]);
      console.log(realisasiCount);
      console.log(remainingCount);
      console.log(totalStatusCount);
    };

    const filteredDataSb = dataPop.filter((item) => item.tipe === "SB");
    processFilteredData(
      filteredDataSb,
      setDataPopSb,
      setDataRealisasi,
      setDataRemainingStatus
    );

    const filteredDataB = dataPop.filter((item) => item.tipe === "B");
    processFilteredData(
      filteredDataB,
      setDataPopB,
      setDataRealisasi,
      setDataRemainingStatus
    );

    const filteredDataD = dataPop.filter((item) => item.tipe === "D");
    processFilteredData(
      filteredDataD,
      setDataPopD,
      setDataRealisasi,
      setDataRemainingStatus
    );

    const filteredDataA = dataPop.filter((item) => item.tipe === "A");
    processFilteredData(
      filteredDataA,
      setDataPopA,
      setDataRealisasi,
      setDataRemainingStatus
    );

    const filteredDataCpePln = dataPop.filter(
      (item) => item.tipe === "CPE PLN"
    );
    processFilteredData(
      filteredDataCpePln,
      setDataCpePln,
      setDataRealisasi,
      setDataRemainingStatus
    );
  }, [dataPop]);

  useEffect(() => {
    const dateToday = new Date();
    const filtered = dataPm.filter((item: any) => {
      const itemDate = moment(item.plan);
      return (
        itemDate.year() === moment(dateToday).year() &&
        itemDate.month() === moment(dateToday).month() &&
        itemDate.date() === moment(dateToday).date()
      );
    });
    setFilteredDataPm(filtered);
  }, [dataPm]);

  useEffect(() => {
    getJadwalPm();
    getListPop();
  }, []);

  const NextArrow = () => {
    return (
      <>
        <div
          onClick={sliderRef?.slickNext}
          className="text-3xl rounded-full text-text-dark hover:text-blue-hover active:text-blue-click hidden lg:flex justify-center items-center"
        >
          <BiSolidRightArrow />
        </div>
      </>
    );
  };

  const PrevArrow = () => {
    return (
      <>
        <div
          onClick={sliderRef?.slickPrev}
          className="text-3xl rounded-full text-text-dark hover:text-blue-hover active:text-blue-click hidden lg:flex justify-center items-center"
        >
          <BiSolidLeftArrow />
        </div>
      </>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Navbar />
      <div className="overflow-auto pt-[136px] bg-bnw-50">
        <h1 className="header1 text-blue-primary text-center">JUMLAH POP</h1>
        <div className="w-1/2 mt-[31px] flex justify-between mx-auto">
          <h3 className="header3 text-blue-primary">Jumlah Total POP: 685</h3>
          <h3 className="header3 text-blue-primary">Jumlah CPE PLN: 685</h3>
        </div>
        <div className="flex mt-[51px] items-center justify-between w-[95%] mx-auto h-[950px]">
          <PrevArrow />
          <div className="w-full max-w-[1300px] h-full mx-auto">
            <Slides ref={setSliderRef} {...settings}>
              <CardCarousel
                tipe="Jenis"
                dataPopSb={dataPopSb}
                dataPopB={dataPopB}
                dataPopA={dataPopA}
                dataPopD={dataPopD}
                dataCpePln={dataCpePln}
              />
              {/* <CardCarousel tipe="Health" dataPopSb={dataPopSb} dataPopB={dataPopB} dataPopA={dataPopA} dataPopD={dataPopD} dataCpePln={dataCpePln}/> */}
              <CardCarousel
                tipe="Wilayah"
                dataPopSb={dataPopSb}
                dataPopB={dataPopB}
                dataPopA={dataPopA}
                dataPopD={dataPopD}
                dataCpePln={dataCpePln}
              />
            </Slides>
          </div>
          <NextArrow />
        </div>
        <div className="mt-[70px]">
          <h1 className="header1 text-blue-primary text-center">
            Preventive Maintenance
          </h1>
          <div className="mt-[46px] w-[1240px] bg-bnw-50 mx-auto py-10 rounded-lg shadow-xl flex items-center justify-center gap-16">
            <div className="bg-red-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
              <h1 className="header1 text-text-light text-center">3</h1>
              <h2 className="header2 text-text-light text-center">
                Temuan Kritikal
              </h2>
            </div>
            <div className="bg-yellow-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
              <h1 className="header1 text-text-light text-center">15</h1>
              <h2 className="header2 text-text-light text-center">
                Temuan <br /> Non-Kritikal
              </h2>
            </div>
          </div>
          <div className="flex mt-[35px] gap-16 w-[864px] mx-auto">
            <div>
              <label className="header3" htmlFor="start">
                Tanggal Awal
              </label>
              <DateField
                id="start"
                text="Pilih Tanggal!"
                onChange={(date: Date) => setDate(date)}
              />
            </div>
            <div>
              <label className="header3" htmlFor="start">
                Tanggal Akhir
              </label>
              <DateField
                id="start"
                text="Pilih Tanggal!"
                onChange={(date: Date) => setDate(date)}
              />
            </div>
          </div>
          <div className="mt-[22px] flex items-center justify-center gap-16">
            <div className="bg-blue-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
              <h1 className="header1 text-text-light text-center">3</h1>
              <h2 className="header2 text-text-light text-center">ISP</h2>
            </div>
            <div className="bg-blue-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
              <h1 className="header1 text-text-light text-center">15</h1>
              <h2 className="header2 text-text-light text-center">OSP</h2>
            </div>
          </div>
          <div className="mt-[46px] w-[1240px] bg-bnw-50 mx-auto py-10 rounded-lg shadow-xl flex items-center justify-center gap-16">
            <div className="flex flex-col">
              <StackedbarChartJenis
                dataRealisasi={dataRealisasi}
                dataRemaining={dataRemainingStatus}
              />
              <StackedbarChartKabKot />
            </div>
          </div>
          <h1 className="mt-[100px] header1 text-blue-primary text-center">
            Jadwal Hari Ini
          </h1>
          <div className="my-[56px] w-[1370px] bg-bnw-50 mx-auto py-10 rounded-lg shadow-xl gap-16">
            <div className="flex flex-col gap-5">
              <div className="flex justify-end pr-[20px]">
                <a
                  href="/penjadwalan-pm"
                  className="flex items-center justify-center rounded-[10px] h-[40px] w-[150px] text-white bg-blue-primary font-semibold"
                >
                  Lihat Semua
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Table
                  data={filteredDataPm}
                  header={kolom}
                  tipe="pm"
                  role="admin"
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
