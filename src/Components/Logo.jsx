import logo from "../assets/Logo/logo.png"
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-10 h-10" src={logo} alt="" />
      <div className="flex w-20  -space-y-1 flex-col">
        <h1 className="text-2xl text-justify tracking-[.1rem] font-bold">MATH</h1>
        <h2 className="text-sm text-justify tracking-[.78rem] font-bold">HERO</h2>
      </div>
    </div>
  );
};

export default Logo;
