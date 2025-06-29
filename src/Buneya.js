import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Buneya() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
    "ما هي الفكرة بإيجاز؟",
    "من هو المستخدم المستهدف؟",
    "ما المشكلة التي تحاول حلها؟",
    "كيف سيتفاعل المستخدم مع المشروع؟",
    "هل لديك منافس مشابه؟",
    "ما أهم ميزة تود التركيز عليها؟"
  ];

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep("done");
    }
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [step]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 px-4 py-8 font-[Tajawal]">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div layout className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">👋 مرحبًا بك في <span className="text-blue-500">بُنيّة</span></h1>
          <p className="text-lg text-gray-600">حوّل فكرتك إلى مشروع بدون سطر كود واحد</p>
        </motion.div>

        {step !== "done" ? (
          <motion.div layout className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">{questions[step]}</h2>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={answers[step] || ""}
              onChange={handleChange}
              placeholder="اكتب إجابتك هنا..."
            />
            <div className="text-left mt-4">
              <button
                onClick={handleNext}
                className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                التالي
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div layout className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">✨ ملخص فكرتك</h2>
            <ul className="space-y-3 text-right text-gray-800">
              {questions.map((q, i) => (
                <li key={i}>
                  <span className="font-semibold text-blue-600">• {q}:</span> {answers[i]}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <button
                onClick={() => setStep(0)}
                className="px-5 py-2 border rounded-lg hover:bg-gray-100"
              >
                🔁 ابدأ من جديد
              </button>
            </div>
          </motion.div>
        )}

        <footer className="text-center text-sm text-gray-400 pt-10">
          <p>صُنع بحُب بواسطة ذكاء صناعي لخدمة رواد الأعمال ❤️</p>
        </footer>
      </div>
    </div>
  );
}