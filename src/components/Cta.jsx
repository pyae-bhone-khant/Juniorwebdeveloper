import { FaTelegramPlane, FaYoutube, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-sky-200 text-white py-16 px-6 text-center">
      <h2 className="text-3xl text-gray-800 font-bold mb-4">Contact Us & Stay Connected</h2>
      <p className="text-gray-500 mb-8">
        Join our community for updates, tutorials, and support.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
        >
          <FaTelegramPlane className="text-xl" />
          Telegram
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition"
        >
          <FaYoutube className="text-xl" />
          YouTube
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl transition"
        >
          <FaFacebookF className="text-xl" />
          Facebook
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black hover:bg-gray-900 px-5 py-3 rounded-xl transition"
        >
          <FaTiktok className="text-xl" />
          TikTok
        </a>
      </div>

      {/* Optional Email Contact Form */}
      <form className="flex justify-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full p-3 rounded-l-xl text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-r-xl font-semibold transition"
        >
          Subscribe
        </button>
      </form>

     
    </section>
  );
}
