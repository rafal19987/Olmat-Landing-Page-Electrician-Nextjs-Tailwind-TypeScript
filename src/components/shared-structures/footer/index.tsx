export const Footer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-end p-4 w-screen min-h-96 h-full mt-36 bg-primary bg-opacity-75 text-white">
      <span className="text-center text-sm text-neutral-300 tracking-wider">
        Copyright 2023 © Olmat Mateusz Olifirowicz
      </span>
      <span className="text-center text-sm text-neutral-300 tracking-wider">
        All rights reserved
      </span>
    </div>
  );
};
