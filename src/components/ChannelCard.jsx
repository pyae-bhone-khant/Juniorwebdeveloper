export default function ChannelCard({ name, desc, level, link, thumbnail }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex gap-4 hover:shadow-lg transition">
      <img
        src={thumbnail}
        alt={name}
        className="w-28 h-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
            {level}
          </span>
          <a
            href={link}
            target="_blank"
            className="text-sm underline text-blue-600"
          >
            YouTube →
          </a>
        </div>
      </div>
    </div>
  )
}