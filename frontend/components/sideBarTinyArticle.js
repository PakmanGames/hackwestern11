import Image from "next/image";
import Link from "next/link";
import temp3 from "@/public/tempImage3.png";

export default function SidebarTinyArticle({ article }) {
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
          <div className="max-w-36">
            <div>
              <Image
                src={temp3}
                alt="Article Image"
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-md font-bold leading-tight">
                {article.headline}
              </h3>
              <p className="text-xs text-gray-500 mt-1">4 MIN READ</p>
            </div>
          </div>
        </Link>
      );
}