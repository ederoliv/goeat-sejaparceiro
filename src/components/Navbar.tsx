import { Button } from "@/components/ui/button";
import LogoGoeat from "@/assets/icon.svg";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
     
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl bg-goeat-dark/95 px-6 py-3 backdrop-blur-md border-2 border-lime-500 shadow-2xl">
        
       
        <div className="flex items-center gap-2">
          <img 
            src={LogoGoeat} 
            alt="GoEat Logo" 
            className="h-8 w-8 object-contain"/>
        </div>

 
        <ul className="hidden items-center gap-8 md:flex">
          {["Sobre nós", "Preços", "Funcionalidades"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Lado Direito: Botão CTA */}
        <Button 
          className="rounded-full bg-goeat-primary px-6 py-2 text-sm font-bold text-goeat-dark hover:bg-lime-500 hover:scale-105 transition-all"
        >
          Seja parceiro
        </Button>
      </nav>
    </header>
  );
}