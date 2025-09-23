import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  description?: string;
  showLogo?: boolean;
}

export default function HeroSection({ 
  title, 
  description,
  showLogo = true 
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[400px] bg-white/0 flex flex-col items-center justify-center p-4">
      {showLogo && (
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-4xl hidden md:block">
          <Image
            src="/logo-samy.svg"
            alt="ClichyMouv - Association de mouvement et bien-être"
            width={800}
            height={400}
            priority
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
          />
        </div>
      )}
      
      <div className="text-center max-w-4xl px-6 mt-6">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-title">
            {title}
          </h1>
        )}
        
        <p className="text-2xl text-white/90 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}