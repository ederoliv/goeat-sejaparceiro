import Navbar from "./components/Navbar"
import { Button } from "./components/ui/button"

import heroImage from "../public/dashboard_mobile_baanner.svg"

function App() {

  return (
    <main className="relative min-h-screen w-full bg-neutral-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lime-100/50 via-transparent to-transparent">
    
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-48">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-black tracking-tighter text-goeat-dark lg:text-7xl">
              Venda fácil. <br />
              <span className="text-goeat-primary">Lucro rápido.</span>
            </h1>
            <p className="max-w-md text-lg text-zinc-600 leading-relaxed">
              Taxas mais acessíveis para o seu negócio. <br />
              Seu delivery online e <span className="text-emerald-600 font-semibold underline decoration-goeat-primary decoration-2">vendendo</span>.
            </p>
              
            <div className="flex items-center gap-6 pt-4">
              <Button className="rounded-full bg-goeat-primary h-12 px-8 text-base font-bold text-goeat-dark hover:bg-goeat-primary">
                Seja parceiro
              </Button>
              <a href="#" className="text-sm font-bold text-goeat-dark hover:underline">
                Por que usar?
              </a>
            </div>
           </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <img src={heroImage} alt="Hero image" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.28] lg:scale-125 lg:translate-x-12" />
          </div>
        </div>  
      </div>
    </main>
  )
}

export default App
