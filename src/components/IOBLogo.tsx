import logoImg from '../assets/logo.png';

interface IOBLogoProps {
  className?: string;
  showText?: boolean;
}

export default function IOBLogo({ className = "w-10 h-10", showText = false }: IOBLogoProps) {
  if (showText) {
    return (
      <div className="flex items-center justify-center overflow-hidden h-12 w-48 relative bg-transparent rounded-md">
        <img 
          src={logoImg} 
          className="h-[105px] max-w-none object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          alt="Indian Overseas Bank Logo" 
        />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0">
      <img 
        src="/favicon.png" 
        className={`${className} object-contain rounded-sm`} 
        alt="IOB Icon" 
      />
    </div>
  );
}
