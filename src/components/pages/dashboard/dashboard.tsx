import { Header, PieChartGraph, Stat } from "../..";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";

export const Dashboard = () => {
  const colors = ["#FFC700", "#FF0000", "#00FF00", "#0000FF", "#FF00FF"];
  const data = [
    { topic: "Fertility", percent: 26.34 },
    { topic: "Menstruation", percent: 45.45 },
    { topic: "Contraceptive Methods", percent: 12.47 },
    { topic: "Sexual Reproduction", percent: 8.3445 },
    { topic: "Others", percent: 100 },
  ];
  return (
    <main>
      <Header
        icon={<FaHandHoldingMedical className="inline w-8" />}
        title="Dashboard"
      />
      <div className="flex flex-col gap-4 pt-4">
        <div className="header-options flex w-full gap-4">
          <Stat
            className="w-1/4"
            icon={<FaHandHoldingMedical className="w-6" />}
            title="Impact Points"
            total={456 || 0}
          />

          <Stat
            className="w-1/4"
            icon={<AiOutlineStar className="w-6" />}
            title="Pending Tasks"
            total={2 || 0}
          />

          <Stat
            className="w-1/4"
            icon={<AiOutlineStar className="w-6" />}
            title="Completed Tasks"
            total={23 || 0}
          />

          <Stat
            className="w-1/4"
            icon={<IoDocuments className="w-6" />}
            title="Number of Blogs"
            total={167}
          />
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Header title={"My Assists by topics"} icon />
      </div>
      <PieChartGraph data={data} colors={colors} />
    </main>
  );
};
