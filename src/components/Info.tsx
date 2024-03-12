const Info = () => {
  return (
    <div className="container md:pl-0 md:pr-0 ">
      <div
        id="wrapper"
        className="flex md:flex-row flex-col md:h-[160px] md:gap-[65px] gap-6 absolute mr-2  mt-[-400px] md:mt-[-530px]  p-6 h-[300px] md:pt-9 md:pb-9 md:pl-8 md:pr-8 rounded-[15px] md:w-[1110px] bg-white"
      >
        <div className="md:w-[213px] w-[315px] text-center">
          <h3 className="text-[#2C2C2C] opacity-50 uppercase text-[12px] font-semibold">
            Ip Address
          </h3>
          <h2 className="text-[#2C2C2C] md:text-[26px] text-[20px] font-medium">192.212.174.101</h2>
        </div>
        <div className="md:w-[213px] w-[310px] text-center">
          <h3 className="text-[#2C2C2C] opacity-50 uppercase text-[12px] font-semibold">
            Location
          </h3>
          <h2 className="text-[#2C2C2C] md:text-[26px] text-[20px] font-medium">Brooklyn, NY 10001</h2>
        </div>
        <div className="md:w-[213px] w-[310px] text-center">
          <h3 className="text-[#2C2C2C] opacity-50 uppercase text-[12px] font-semibold">
            Time zone
          </h3>
          <h2 className="text-[#2C2C2C] md:text-[26px] text-[20px] font-medium">UTC -05:00</h2>
        </div>
        <div className="md:w-[213px] w-[310px] text-center">
          <h3 className="text-[#2C2C2C] opacity-50 uppercase text-[12px] font-semibold">
            ISp
          </h3>
          <h2 className="text-[#2C2C2C] md:text-[26px] text-[20px] font-medium">SpaceX  Starlink</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
