import Image from 'next/image';
import logoCompany from '@/assets/svg/logo-company.svg';

export const Logo: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Image
      src={logoCompany}
      alt="Logo firmy Olmat"
      aria-description="Logo firmy Olmat"
    />
  );
};
