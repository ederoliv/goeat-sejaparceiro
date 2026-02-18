import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Button } from "./components/ui/button"
import heroImage from "../public/dashboard_mobile_baanner.png"

function App() {
  return (
  
  <>
    <main 
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 50%, #CDF392 75%, #a1ee30 85%)"
      }}
    >

      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-lime-100/50 blur-[120px] rounded-full" />
      
      <Navbar />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen items-center pt-24 lg:pt-0">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-goeat-dark">
              Venda fácil. <br />
              <span className="text-goeat-primary">Lucro rápido.</span>
            </h1>
            <p className="max-w-md text-lg text-zinc-600 leading-relaxed">
              Taxas mais acessíveis para o seu negócio. <br />
              Seu delivery online e <span className="text-emerald-600 font-semibold underline decoration-goeat-primary decoration-2">vendendo</span>.
            </p>
              
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button className="rounded-full bg-goeat-primary h-12 px-8 text-base font-bold text-goeat-dark hover:border-2 hover:border-goeat-dark shadow-lg shadow-lime-200 transition-transform hover:scale-105">
                Seja parceiro
              </Button>
              <a href="#" className="text-sm font-bold text-goeat-dark hover:underline transition-all">
                Por que usar?
              </a>
            </div>
          </div>
          <div className="relative w-full flex justify-center lg:justify-end">
            <img 
              src={heroImage} 
              alt="Dashboard Goeat" 
              className="w-full max-w-[500px] lg:max-w-none lg:scale-110 object-contain drop-shadow-2xl transition-all duration-700 ease-out"
            />
          </div>

        </div>  
      </div>
    </main>
    <Footer />
  </>
  )
}

export default App