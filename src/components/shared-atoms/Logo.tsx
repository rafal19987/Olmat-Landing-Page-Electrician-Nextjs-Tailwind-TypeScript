import Image from 'next/image';
import logoCompany from '@/assets/svg/logo-company.svg';
import Link from 'next/link';

export const Logo: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Link href="/">
      <Image
        src={logoCompany}
        alt="Logo firmy Olmat"
        aria-description="Logo firmy Olmat"
        priority
      />
    </Link>
  );
};
