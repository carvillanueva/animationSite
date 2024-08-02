import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return <section id="about" className="">
    <BentoGrid>
      {[{title: 'Title',description: 'Desc1'}].map((item, index) => (
        // <BentoGridItem
        //   key={index}
        //   title={item.title}
        //   description={item.description}
        //   icon={<FaLocationArrow />}
        // />
      ))}
    </BentoGrid>
  </section>;
};

export default Grid;
