import { Header, PieChartGraph, Stat } from "../..";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import { createColumnHelper } from "@tanstack/react-table";
import { BsQuestionLg } from "react-icons/bs";
import { usePagination } from "../../../hooks";
import { Table } from "../../atoms/table/table";

export const Dashboard = () => {
  const colors = ["#FFC700", "#FF0000", "#00FF00", "#0000FF", "#FF00FF"];
  const data = [
    { topic: "Fertility", percent: 26.34 },
    { topic: "Menstruation", percent: 45.45 },
    { topic: "Contraceptive Methods", percent: 12.47 },
    { topic: "Sexual Reproduction", percent: 8.3445 },
    { topic: "Others", percent: 100 },
  ];

  const enquiries = [
    {
      id: "1",
      enquiry: "How to get pregnant?",
      tags: "fertility, pregnancy",
      by: "John Doe",
      createdAt: "2021-08-01",
    },
    {
      id: "2",
      enquiry: "Where do I get contraceptive pills?",
      tags: "fertility, contraceptive",
      by: "John Doe",
      createdAt: "2023-08-01",
    },
  ];

  type Enquiry = {
    id: string;
    enquiry: string;
    tags: string;
    by: string;
    createdAt: string;
  };
  const columnHelper = createColumnHelper<Enquiry>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: () => <span>ID</span>,
    }),
    columnHelper.accessor("by", {
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor("enquiry", {
      cell: (info) => info.getValue(),
      header: () => <span>Question</span>,
    }),
    columnHelper.accessor("tags", {
      cell: (info) => info.getValue(),
      header: () => <span>Tags</span>,
    }),
    columnHelper.display({
      id: "Actions",
      cell: () => {
        return (
          <span>
            <button>Assign to me</button>
          </span>
        );
      },
    }),
  ];

  const [pagination, setPagination] = usePagination();

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
      <Header title="Questions" icon={<BsQuestionLg className="w-6" />} />
      <Table
        columns={columns}
        data={enquiries || []}
        isLoading={false}
        pagination={pagination}
        setPagination={setPagination}
        pageCount={1}
      />
    </main>
  );
};
