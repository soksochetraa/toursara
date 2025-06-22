import HeroBg from "../assets/images/bg_hero_section_explore.jpg";
import TicketContainer from "../components/container/TicketContainer";

function Travel() {
  return (
    <>
      <section
        className="absolute top-0 h-[590px] w-full flex flex-col justify-center items-center gap-[50px] px-[50px] py-2.5 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h1 className="font-medium text-[70px] leading-[84px] text-center text-[#58A6A0]">
            Find Your Transportations
          </h1>
          <p className="font-normal text-[14px] text-center text-[#222222]">
            Discover amazing places at exclusive deals. Eat, Shop, Visit
            <br />
            interesting places around the world.
          </p>
        </div>
      </section>
      <div className="mt-[420px]">
        <TicketContainer />
      </div>
    </>
  );
}

export default Travel;
