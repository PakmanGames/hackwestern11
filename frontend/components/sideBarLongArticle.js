import Link from "next/link";
import Image from "next/image";
import temp from "@/public/tempImage.png";

export default function SidebarLongArticle({ article }) {
  return (
    <Link href={
      { 
          pathname: `/news/${article.article_index}`, 
          query: { 
              headline: article.headline, 
              description: article.description, 
              content: article.content, 
              image_caption: article.image_caption 
          }
      }
    }>
      <div className="flex items-start gap-4 border-t p-4 pb-4 max-w-md">
        <div className="flex-1">
          <h3 className="text-lg font-bold leading-tight">
            {article.headline}
          </h3>
          <p className="text-xs text-gray-500 mt-1">2 MIN READ</p>
        </div>
        <div className="w-24 h-24 flex-shrink-0">
          <Image
            src={temp}
            alt="Article Image"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </Link>
  );
}
