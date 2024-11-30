import Image from "next/image";
import temp3 from "@/public/tempImage3.png";

export default function SidebarTinyArticle() {
    return (
        <div className="max-w-44">
          <div>
            <Image
              src={temp3}
              alt="Article Image"
              className="w-full h-auto object-cover rounded"
            />
          </div>
    
          <div className="mt-2">
            <h3 className="text-md font-bold leading-tight">
                Article Title lorem ipsum dolor sit amet, consectetur adipisc
            </h3>
            <p className="text-xs text-gray-500 mt-1">4 MIN READ</p>
          </div>
        </div>
      );
}