import LogoGoeat from '@/assets/icon.svg';

export default function Footer() {
  return (
    <footer className="bg-goeat-dark text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <img 
          src={LogoGoeat} 
          alt="GoEat Logo" 
          className="mx-auto mb-4 h-10 w-auto object-contain"
        />
        <p className="text-sm">&copy; {new Date().getFullYear()} GoEat. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}