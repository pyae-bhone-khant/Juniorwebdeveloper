
import React from "react";

export default function Learning() {
  return (
    <div className=" text-white mb-20 ">
      {/* 🌍 Roadmap Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Build Your Learning Path
        </h2>
        <p className="text-blue-900 mb-8">
          Follow a structured roadmap — from beginner to advanced.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-orange-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-4xl">1️⃣</span>
            <h3 className="font-semibold text-lg mt-2">HTML & CSS Basics</h3>
            <p className="text-blue-950 text-sm mt-2">
              Learn how to structure and style your webpages effectively.
            </p>
          </div>
          <div className="bg-yellow-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-4xl">2️⃣</span>
            <h3 className="font-semibold text-lg mt-2">
              JavaScript Fundamentals
            </h3>
            <p className="text-blue-950 text-sm mt-2">
              Master the language of interactivity and logic.
            </p>
          </div>
          <div className="bg-cyan-500 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <span className="text-4xl">3️⃣</span>
            <h3 className="font-semibold text-lg mt-2">
              React & Modern Frameworks
            </h3>
            <p className="text-blue-950 text-sm mt-2">
              Build dynamic and scalable front-end apps.
            </p>
          </div>
        </div>
      </section>    
    </div>
  );
}
