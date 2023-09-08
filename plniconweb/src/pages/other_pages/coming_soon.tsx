import Navbar from "../../components/Navbar";
function ComingSoon() {
  return (
    <>
      <Navbar/>
      <div className="w-full h-screen">
        <div className={`w-full h-full bg-[url('${process.env.PUBLIC_URL}/assets/coming_soon_alt.svg')] bg-cover bg-no-repeat`}></div>
      </div>
    </>
  );
}

export default ComingSoon;
