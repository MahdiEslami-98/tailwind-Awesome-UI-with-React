import Text from "@/components/Hero/Text.tsx";
import Image from "@/components/Hero/Image.tsx";

const Hero = () => {
  return (
    <div
      className={
        "bg-clip-path-c flex w-full items-center justify-center bg-secondary pb-44 pt-40"
      }
    >
      <Text />
      <Image />
    </div>
  );
};
export default Hero;
