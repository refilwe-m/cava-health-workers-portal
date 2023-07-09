import { Header, PieChartGraph, Stat, Trends } from "../..";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { IoDocuments } from "react-icons/io5";
import { createColumnHelper } from "@tanstack/react-table";
import { BsQuestionLg } from "react-icons/bs";
import { usePagination } from "../../../hooks";
import { Table } from "../../atoms/table/table";
import {MdFeedback} from "react-icons/md";

export const Dashboard = () => {
  const colors = ["#FFC700", "#FF0000", "#00FF00", "#0000FF", "#FF00FF"];
  const data = [
    { topic: "Fertility", percent: 26.34 },
    { topic: "Menstruation", percent: 45.45 },
    { topic: "Contraceptive Methods", percent: 12.47 },
    { topic: "Sexual Reproduction", percent: 8.3445 },
    { topic: "Others", percent: 100 },
  ];
  const trends = [
    {
      trend: "#Fertility",
      numEnquirers: 3546,
    },
    {
      trend: "Contraceptive Methods",
      numEnquirers: 2354,
    },
    {
      trend: "#Menstruation",
      numEnquirers: 3546,
    },
    {
      trend: "#Hormones",
      numEnquirers: 3546,
    },
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
      by: "Mary Jane",
      createdAt: "2023-08-01",
    },{
      id: "3",
      enquiry: "I think I'm pregnant, what should I do?",
      tags: "fertility, contraceptive",
      by: "Jane Doe",
      createdAt: "2023-08-01",
    },
  ];

  const feedbacks = [
    {
      id: "1",
      feedback:
        "Dr Mashile is an extemely cool doctor, she always makes you smile",
      by: "Elizabeth Holmes",
    },{
      id: "2",
      feedback:
        "Dr. Mashile is an amazing doctor who genuinely cares about her patients. She always makes me feel comfortable and valued during my appointments. Her warm demeanor and excellent communication skills create a welcoming environment.",
      by: "Gugu Mokwena",
    },{
      id: "3",
      feedback:
        "While Dr. Mashile is knowledgeable, I sometimes feel rushed during my appointments. It seems like she has a tight schedule and doesn't spend enough time discussing my concerns in detail. I wish she could allocate more time for each patient.",
      by: "Emily Mashiane",
    },
  ];

  type Enquiry = {
    id: string;
    enquiry: string;
    tags: string;
    by: string;
    createdAt: string;
  };

  type Feedback = {
    id: string;
    feedback: string;
    by: string;
  };

  const columnHelper = createColumnHelper<Enquiry>();
  const columnHelperF = createColumnHelper<Feedback>();
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

  const columnsFeedback = [
    columnHelperF.accessor("id", {
      cell: (info) => info.getValue(),
      header: () => <span>ID</span>,
    }),
    columnHelperF.accessor("by", {
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
    }),
    columnHelperF.accessor("feedback", {
      cell: (info) => info.getValue(),
      header: () => <span>Feedback</span>,
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
      <div className="flex items-center justify-between">
        <PieChartGraph data={data} colors={colors} />
        <Trends trends={trends} />
      </div>
      <Header title="Questions" icon={<BsQuestionLg className="w-6" />} />
      <Table
        columns={columns}
        data={enquiries || []}
        isLoading={false}
        pagination={pagination}
        setPagination={setPagination}
        pageCount={1}
      />

      <Header title="Feedback" icon={<MdFeedback className="w-6" />} />
      <Table
        columns={columnsFeedback}
        data={feedbacks || []}
        isLoading={false}
        pagination={pagination}
        setPagination={setPagination}
        pageCount={1}
      />
    </main>
  );
};
