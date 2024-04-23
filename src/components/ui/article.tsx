import DefaultButton from "../common/default-button";
import ArticleCard from "./article-card";

const Article: React.FC = () => {
  const data = [
    {
      image: "/1.jpg",
      createAt: "22 Dec 2022",
      title: "Make your desk more neat and beautiful",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,    cumque perferendis possimus accusantium omnis, necessitatibus, nesciunt    corporis quos deleniti ea voluptatum accusamus debitis alias laboriosam    ex vel sequi corrupti ducimus!",
    },
    {
      image: "/1.jpg",
      createAt: "22 Dec 2022",
      title: "What are the fashion trend in 2023?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,    cumque perferendis possimus accusantium omnis, necessitatibus, nesciunt    corporis quos deleniti ea voluptatum accusamus debitis alias laboriosam    ex vel sequi corrupti ducimus!",
    },
    {
      image: "/1.jpg",
      createAt: "22 Dec 2022",
      title: "Tips for Work Life Balance",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,    cumque perferendis possimus accusantium omnis, necessitatibus, nesciunt    corporis quos deleniti ea voluptatum accusamus debitis alias laboriosam    ex vel sequi corrupti ducimus!",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-3xl">Lenny&apos;s Article</h1>
        <DefaultButton content="View Detail" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((e, i) => (
          <ArticleCard
            image={e.image}
            createAt={e.createAt}
            title={e.title}
            content={e.content}
            key={i}
          />
        ))}
      </div>
    </>
  );
};
export default Article;
