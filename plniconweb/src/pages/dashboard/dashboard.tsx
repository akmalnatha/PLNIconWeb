import { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import Navbar from "../../components/Navbar";
import CardCarousel from "../../components/CardCarousel";
import Slides from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dashboard.css"
import DateField from "../../components/DateField";


function Dashboard() {
  const [sliderRef, setSliderRef] = useState<any>(null);
  const [date, setDate] = useState<Date|null>(null)

  const NextArrow = () => {
    return (
      <>
        <div
          onClick={sliderRef?.slickNext}
          className="text-3xl rounded-full text-text-dark hover:text-blue-hover active:text-blue-click hidden lg:flex justify-center items-center"
        >
          <BiSolidRightArrow/>
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
          <BiSolidLeftArrow/>
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
            <PrevArrow/>
            <div className="w-full max-w-[1300px] h-full mx-auto">
                <Slides ref={setSliderRef} {...settings}>
                    <CardCarousel tipe="Jenis"/>
                    <CardCarousel tipe="Health"/>
                    <CardCarousel tipe="Wilayah"/>
                </Slides>
            </div>
            <NextArrow/>
        </div>
        <div className="mt-[70px]">
            <h1 className="header1 text-blue-primary text-center">Preventive Maintenance</h1>
            <div className="mt-[46px] w-[1240px] bg-bnw-50 mx-auto py-10 rounded-lg shadow-xl flex items-center justify-center gap-16">
                <div className="bg-red-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
                    <h1 className="header1 text-text-light text-center">
                        3
                    </h1>
                    <h2 className="header2 text-text-light text-center">
                        Temuan Kritikal
                    </h2>
                </div>
                <div className="bg-yellow-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
                    <h1 className="header1 text-text-light text-center">
                        15
                    </h1>
                    <h2 className="header2 text-text-light text-center">
                        Temuan <br /> Non-Kritikal
                    </h2>
                </div>
            </div>
            <div className="flex mt-[35px] gap-16 w-[864px] mx-auto">
              <div>
                <label className="header3" htmlFor="start">Tanggal Awal</label>
                <DateField id="start" text="Pilih Tanggal!" onChange={(date: Date) => setDate(date)}/>
              </div>
              <div>
                <label className="header3" htmlFor="start">Tanggal Akhir</label>
                <DateField id="start" text="Pilih Tanggal!" onChange={(date: Date) => setDate(date)}/>
              </div>
            </div>
            <div className="mt-[22px] flex items-center justify-center gap-16">
                <div className="bg-blue-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
                    <h1 className="header1 text-text-light text-center">
                        3
                    </h1>
                    <h2 className="header2 text-text-light text-center">
                        ISP
                    </h2>
                </div>
                <div className="bg-blue-primary flex flex-col gap-8 rounded-lg items-center justify-center w-[400px] h-[260px]">
                    <h1 className="header1 text-text-light text-center">
                        15
                    </h1>
                    <h2 className="header2 text-text-light text-center">
                        OSP
                    </h2>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
