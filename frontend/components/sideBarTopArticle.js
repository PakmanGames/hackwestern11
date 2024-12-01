import Image from "next/image";
import Link from "next/link";
import temp2 from "@/public/tempImage2.png";

export default function SidebarTopArticle() {
  return (
    <Link href={`/news/1`}>
      <div className="max-w-md mx-auto p-4 pb-6">
        <div>
          <Image
            src={temp2}
            alt="Feature image"
            className="w-full h-auto object-cover rounded"
          />
          <p className="text-xs text-gray-500 mt-2 text-right">
            James Estrin/The New York Times
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold leading-tight">
            Looking for a One-Bedroom in Brooklyn. Which Option Was the Right Fit?
          </h2>
          <p className="mt-2 text-gray-700">
            Forced out of their two-bedroom rental by a new landlord, a young
            couple looked to downsize in Park Slope or Clinton Hill. Here’s what
            they found.
          </p>
        </div>
      </div>
    </Link>
  );
}
