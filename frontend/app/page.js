import ArticleBlock from "@/components/articleBlock";
import SideBar from "@/components/sideBar";

export default function Home() {
  return (
    <div className="flex">
      <div className="items-center justify-center pl-48">
        <ArticleBlock />
        <ArticleBlock />
        <ArticleBlock />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
}
