const Header = () => {
  return (
    <header className="header md:pl-0 md:pr-0 pl-3 pr-3">
      <div className="container flex flex-col items-center md:pl-0 md:pr-0 md:mb-[120px]">
        <h1 className="text-white text-[32px] text-center pt-7">IP Address Tracker</h1>
        <form className="max-w-[555px] w-full pl-6 rounded-[15px] bg-white flex justify-between items-center mt-8 mb-[120px]">
            <input type="text" className=" w-4/5 text-[18px] text-[#2C2C2C] pl-1" placeholder="Search for any IP address or domain" />
            <button className=" bg-black h-[58px] w-[58px] flex items-center rounded-r-[15px]">
                <img src="./arrow.svg" alt="" className="self-center pl-[23px]" />
            </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
