import Image from 'next/image';
import { useHome } from './hooks/useHome';
import { Typography } from '@/app/shared/components';

export default function Home() {
  const {
    containerProps,
    imageProps,
    bibliographyProps,
    descriptionProps,
    typographyProps,
    typographyDescriptionProps,
  } = useHome();

  return (
    <div {...containerProps}>
      <div>
        <Image {...imageProps} />
      </div>
      <div {...bibliographyProps}>
        <Typography {...typographyProps} />
        <div {...descriptionProps}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Typography
              key={index.toString()}
              {...typographyDescriptionProps}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
