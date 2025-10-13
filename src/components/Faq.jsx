export default function Faq()  {
    return ( 
        <div className=" text-gray-800" >

          <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-xl shadow-md p-5">
            <summary className="font-semibold cursor-pointer">
              How long will it take to learn?
            </summary>
            <p className="mt-2 text-gray-600">
              It depends on your pace — typically 3–6 months for solid
              foundations.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-md p-5">
            <summary className="font-semibold cursor-pointer">
              Is this content free?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes! All learning paths are free and open-source.
            </p>
          </details>

          <details className="bg-white rounded-xl shadow-md p-5">
            <summary className="font-semibold cursor-pointer">
              Do I need prior experience?
            </summary>
            <p className="mt-2 text-gray-600">
              No. Our roadmap starts from the basics and guides you step by
              step.
            </p>
          </details>
        </div>
      </section>
        </div>
    )
}