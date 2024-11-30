import ArticleBlock from "@/components/articleBlock";
import SideBar from "@/components/sideBar";

export default function Home() {
  return (
    <div className="flex px-48">
      <div className="items-center justify-center">
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
