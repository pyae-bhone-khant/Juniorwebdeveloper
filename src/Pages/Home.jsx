import channels from "../Data/channel"
import ChannelCard from "../components/ChannelCard"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        💻 Junior Developer လမ်းညွှန် Website
      </h1>
      <p className="text-center text-slate-600 mb-8">
        YouTube သင်ခန်းစာများ၊ Project Ideas များ စုစည်းပေးထားတဲ့နေရာပါ။
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {channels.map((ch) => (
          <ChannelCard key={ch.name} {...ch} />
        ))}
      </div>
    </div>
  )
}