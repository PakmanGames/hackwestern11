import Image from "next/image";
import Link from "next/link";
import temp2 from "@/public/tempImage2.png";

export default function SidebarTopArticle({ article }) {
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
      <div className="max-w-md mx-auto p-4 pb-6">
        <div>
          <Image
            src={temp2}
            alt="Feature image"
            className="w-full h-auto object-cover rounded"
          />
          <p className="text-xs text-gray-500 mt-2 text-right">
            {article.image_caption}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold leading-tight">
            {article.headline}
          </h2>
          <p className="mt-2 text-gray-700">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
