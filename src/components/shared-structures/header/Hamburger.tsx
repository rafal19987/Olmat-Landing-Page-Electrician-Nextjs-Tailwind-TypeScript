export const Hamburger: React.FC<{
  children?: React.ReactNode;
  clickHandle: () => void;
  isOpen: boolean;
}> = ({ children, clickHandle, isOpen }) => {
  return (
    <div
      onClick={clickHandle}
      className="flex flex-col items-center justify-evenly w-10 h-8 bg-gradient-to-b from-[#1A718C]/90 to-[#1A718C]/90 rounded-sm  hover:cursor-pointer lg:hidden"
    >
      {isOpen ? (
        <>
          <span className="h-[2px] w-6 translate-y-2 rotate-225 bg-white transition-transform duration-300" />
          <span className="h-[2px] w-6 bg-white opacity-0 transition-opacity" />
          <span className="h-[2px] w-6 -translate-y-2 -rotate-225 bg-white transition-transform duration-300" />
        </>
      ) : (
        <>
          <span className="h-[2px] w-6 bg-white transition-transform duration-300" />
          <span className="h-[2px] w-6 bg-white opacity-100 transition-opacity" />
          <span className="h-[2px] w-6 bg-white transition-transform duration-300" />
        </>
      )}
    </div>
  );
};
