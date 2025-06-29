import React from "react";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-10 font-[Tajawal]">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-5xl font-extrabold text-indigo-700">
          👋 مرحبًا بك في <span className="text-blue-500">بُنيّة</span>
        </h1>
        <p className="text-xl text-gray-600">
          منصتك الذكية لتحويل الأفكار إلى مشاريع واقعية بدون كود.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition">
              🚀 ابدأ فكرتك الآن
            </button>
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-right">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-indigo-700">تحليل ذكي للفكرة</h3>
            <p className="text-sm text-gray-500">نساعدك تفهم مشروعك بخطوات واضحة.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-indigo-700">بدون برمجة</h3>
            <p className="text-sm text-gray-500">ما تحتاج تعرف كود، كل شيء يتم تلقائيًا.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-indigo-700">تصدير جاهز</h3>
            <p className="text-sm text-gray-500">تحصل على نسخة HTML أو مشروع قابل للنشر.</p>
          </div>
        </div>

        <footer className="pt-10 text-sm text-gray-400">
          <p>© 2025 بُنيّة - الذكاء الصناعي لخدمة الأفكار ❤️</p>
        </footer>
      </div>
    </div>
  );
}