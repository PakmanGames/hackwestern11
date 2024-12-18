import Image from "next/image";
import temp from "@/public/tempImage.png";

export default function ArticleBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={temp}
          alt="Author's Profile"
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="text-sm font-bold">By Author Name</p>
          <p className="text-sm text-gray-500">Nov. 30, 2024, 5:01 a.m. ET</p>
        </div>
      </div>

      <div className="space-y-6 text-gray-800 leading-relaxed">
        {content}
      </div>
    </div>
  );
}
