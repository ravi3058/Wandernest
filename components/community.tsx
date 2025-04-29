import { Users } from "lucide-react"

export default function Community() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">JOIN THE EVER GROWING COMMUNITY</h2>
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-slate-600">Active Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5K+</div>
            <div className="text-slate-600">Trips Planned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-slate-600">Countries</div>
          </div>
        </div>
        <div className="flex justify-center">
          <Users className="h-24 w-24 text-primary" />
        </div>
      </div>
    </section>
  )
}
