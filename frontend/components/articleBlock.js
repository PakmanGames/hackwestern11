'use client';
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import temp from "@/public/tempImage.png";

import { contextInfo } from "@/app/page";

export default function ArticleBlock({ article }) {
    // const info = useContext(contextInfo);

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
            <div className="flex flex-col md:flex-row items-start gap-6 border-b border-r p-4 pb-6 max-w-5xl">
                <div className="md:w-2/3 space-y-2">
                    <h2 className="text-2xl font-bold leading-tight">
                        {article.headline}
                    </h2>
                    <p className="text-sm text-gray-700">
                        {article.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">4 MIN READ</p>
                </div>
                <div>
                    <Image
                        src={temp}
                        alt="Placeholder Image"
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
            </div>
        </Link>
    );
}
