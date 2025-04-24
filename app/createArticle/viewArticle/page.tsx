import Image from "next/image";
import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      {/* العنوان */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Article Title
      </h1>

      {/* صورة المقال */}
      <div className="text-center mb-4">
        <Image
          src="/public/article.jpg"
          width={800}
          height={400}
          alt="Article Image"
          
          className="rounded-lg"
        />
      </div>

      {/* تفاصيل المقال */}
      <div className="text-center text-gray-500 mb-4">
        Published on <strong>October 10, 2023</strong> by <strong>John Doe</strong>
      </div>

      {/* محتوى المقال */}
      <div className="text-gray-700 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
        <p className="mt-4">
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
        </p>
      </div>

      {/* زر الرجوع إلى المقالات */}
      <div className="text-center mt-6">
        <Link href="/articles">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
             Back to Articles
          </button>
        </Link>
      </div>
    </div>
  );
}
