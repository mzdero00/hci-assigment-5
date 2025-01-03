type LogoProps = {
  theme?: "light" | "dark";
  className?: string;
};

const Logo = ({ theme = "light", className = "" }: LogoProps) => {
  return (
    <div className={`font-lato font-black ${className} text-center`}>
      {theme === "light" ? (
        <>
          <span className="text-orange-600 text-5xl block">Cayenne</span>
          <span className="text-black text-lg block">Car Rental</span>
        </>
      ) : (
        <>
          <span className="text-orange-400 text-5xl block">Cayenne</span>
          <span className="text-white text-lg block">Car Rental</span>
        </>
      )}
    </div>
  );
};

export default Logo;
