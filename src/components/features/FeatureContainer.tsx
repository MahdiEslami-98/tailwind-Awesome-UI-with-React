import {
  BookIcon,
  BookMarkIcon,
  DocumentIcon,
  LikeIcon,
  LoveIcon,
  MoneyIcon,
} from "@/utils/icons/FeatureIcon";
import Feature from "./Feature";

type featuresType = React.JSX.Element[];

const FeatureContainer = () => {
  const features: featuresType = [
    <DocumentIcon />,
    <MoneyIcon />,
    <LikeIcon />,
    <BookIcon />,
    <BookMarkIcon />,
    <LoveIcon />,
  ];
  return (
    <div className="ga pb container mx-auto grid grid-cols-3 gap-x-20 gap-y-16 px-6 py-20">
      {features.map((svg, index) => (
        <Feature key={index} icon={svg} />
      ))}
    </div>
  );
};

export default FeatureContainer;
