export default function Feedback() {
    return (
         <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <p className="italic text-gray-700">
                “I learned React in 2 months thanks to this roadmap!”
              </p>
              <footer className="mt-3 text-sm font-medium text-gray-600">
                — Aye Min
              </footer>
            </blockquote>

            <blockquote className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <p className="italic text-gray-700">
                “Very organized and beginner-friendly content!”
              </p>
              <footer className="mt-3 text-sm font-medium text-gray-600">
                — Su Su
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
}