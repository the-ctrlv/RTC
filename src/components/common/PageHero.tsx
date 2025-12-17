interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="bg-brand-dark text-white pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-xl text-gray-300 mb-4">{subtitle}</p>}
        <img
          src="/decoration_line.svg"
          alt="Divider"
          className="h-[14px] w-auto"
        />
      </div>
    </section>
  );
};

export default PageHero;
