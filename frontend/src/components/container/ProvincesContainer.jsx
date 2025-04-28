import ProvinceCard from "../cards/ProvinceCard";

function ProvincesContainer({ provinces }) {
  return (
    <div className="w-[5310px] grid grid-cols-25 grid-rows-2 gap-2">
      {provinces.map((province, index) => (
        <ProvinceCard
          key={index}
          province={province}
          image={province.image}
          width={province.width}
          height={province.height}
        />
      ))}
    </div>
  );
}

export default ProvincesContainer;
