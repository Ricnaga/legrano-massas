import Image from 'next/image';
import {
  bibliographyStyles,
  container,
  descriptionStyles,
  imgStyles,
} from './page.css';
import { Typography } from '@/app/shared/components';

export default function Home() {
  return (
    <div className={container}>
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width="800"
          height="600"
          className={imgStyles}
        />
      </div>
      <div className={bibliographyStyles}>
        <Typography variant="h3">Legrano</Typography>
        <div className={descriptionStyles}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Typography variant="p" key={index.toString()}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}
