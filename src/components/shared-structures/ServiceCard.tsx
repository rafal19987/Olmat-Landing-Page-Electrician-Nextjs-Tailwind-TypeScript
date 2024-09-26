import Image from 'next/image';
import Link from 'next/link';
import * as Typography from '@/components/Typography';
import { type Service } from '@/types';

export const ServiceCard: React.FC<{
  variant?: 'default' | 'simple';
  service: Service;
}> = ({ variant = 'default', service }) => {
  if (variant === 'default')
    return (
      <li className='flex flex-col gap-8 items-center justify-between px-4 py-8 md:max-w-[var(--max-card-width)] min-h-64  transition duration-300 rounded-md border border-primary lg:self-stretch lg:w-96 lg:gap-6 lg:min-w-[96px] lg:border-secondary hover:border-primary'>
        <div className='flex flex-col items-center justify-center gap-8 w-full lg:flex-row lg:items-center  lg:gap-4'>
          <Image src={service.icon} width={50} alt='' aria-hidden />
          <Typography.H4>{service.headline}</Typography.H4>
        </div>
        <Typography.Paragraph className='text-center lg:text-start lg:text-base'>
          {service.text}
        </Typography.Paragraph>

        <Link
          className='w-fit self-end rounded-md text-black hover:text-blue-600 underline underline-offset-4 transition-opacity'
          href={`/uslugi/${service.link}`}
        >
          Czytaj więcej
        </Link>
      </li>
    );

  return (
    <li
      className='flex items-center gap-4 w-full md:w-fit  max-w-[370px] group'
      key={service.headline}
    >
      <Link
        className='flex items-center gap-4 w-full h-full px-4 py-2 border group-hover:border-sky-500 transition-colors'
        href={`/uslugi/${service.link}`}
      >
        <Image src={service.icon} width={50} alt='' aria-hidden />
        {service.headline}
      </Link>
    </li>
  );
};
