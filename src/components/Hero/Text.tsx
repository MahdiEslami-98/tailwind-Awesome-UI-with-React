import ArrowRight from "@/utils/icons/Arrow-right.tsx";

const Text = () => {
  return (
    <div className={"flex w-1/2 flex-col items-center justify-center "}>
      <div className={"flex w-10/12 flex-col items-start justify-center"}>
        <h1 className={"mb-4 font-Playfair text-6xl font-bold text-white"}>
          Create stunning web experiences
        </h1>
        <p className={"mb-8 font-Inter text-xl text-gray-custom"}>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className={"flex items-center gap-4 "}>
          <button className="flex items-center gap-1 rounded-sm bg-primary px-6 py-3 text-white  ">
            <span className={"text-white"}>Request Demo</span>
            <ArrowRight />
          </button>
          <button className="rounded-sm bg-gray-custom px-6 py-3 text-white ">
            Explore Product
          </button>
        </div>
      </div>
    </div>
  );
};
export default Text;
