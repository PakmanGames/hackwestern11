'use client';
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import temp from "@/public/tempImage.png";
import ArticleBody from "@/components/articleBody";

export default function NewsPageContent() {
  const searchParams = useSearchParams();
  const headline = searchParams.get("headline");
  const description = searchParams.get("description");
  const content = searchParams.get("content");
  const image_caption = searchParams.get("image_caption");

    return (
      <div className="max-w-3xl mx-auto py-8 border-b">
        <h1 className="text-3xl font-serif font-bold leading-tight">
            {headline}
        </h1>
  
        <p className="mt-4 text-gray-700 leading-relaxed">
          {description}
        </p>
  
        <hr className="my-6 border-gray-300" />
  
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
          <p className="text-sm text-gray-600 flex gap-1 items-center">
            <button className="border-2 rounded-full w-10 h-10 hover:bg-slate-200 transition-all">Play</button>
            <div>Listen to this article</div> · <div>10:41 min</div> · <a href="#">Learn more</a>
          </p>
  
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Share full article</span>
            <span>Bookmark</span>
            <span>Comments (4)</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
            <Image
                src={temp}
                alt="Placeholder Image"
                width={1600}
                height={1600}
                className="w-full h-auto object-cover rounded"
            />
            <div>
                <div className="text-sm text-gray-500 mt-2">
                    {image_caption}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                    Image taken by author
                </div>
            </div>
        </div>
        <ArticleBody content={content}/>
      </div>
    );
}