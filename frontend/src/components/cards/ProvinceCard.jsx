function ProvinceCard({ province, image, width, height }) {
  return (
    <div
      className="cursor-pointer overflow-hidden relative flex flex-col justify-center items-center bg-cover bg-no-repeat rounded-lg group"
      style={{
        backgroundImage: `url(${image || province.image})`,
        width: width,
        height: height,
      }}
    >
      <p className="z-1 w-full h-[70px] text-white font-lato text-[32px] font-[700] absolute top-[80%] left-[10px] group-hover:top-[70%] transition-all duration-300 ">
        {province.name}
      </p>
      <p className="z-1 w-full h-[32px] text-white font-lato  pt-[12px] text-[12px] font-[500] absolute bottom-0 left-[10px] opacity-0 group-hover:opacity-100 group-hover:bottom-[18%] transition-all duration-300">
        {province.resources}
      </p>

      <span className="z-0 absolute opacity-35 w-full h-full grow bg-gradient-to-b from-black to-black px-[23px] py-[50px] rounded-lg"></span>
    </div>
  );
}

export default ProvinceCard;
