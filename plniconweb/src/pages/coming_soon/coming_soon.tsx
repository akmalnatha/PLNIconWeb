import cs from "../../../public/assets/coming_soon.svg";
import Navbar from "../../components/Navbar";
function ComingSoon() {
  return (
    <>
      <Navbar/>
      <div className="w-full h-screen">
        <div className="w-full h-full bg-[url(./assets/coming_soon_alt.svg)] bg-cover bg-no-repeat"></div>
      </div>
    </>
  );
}

export default ComingSoon;
