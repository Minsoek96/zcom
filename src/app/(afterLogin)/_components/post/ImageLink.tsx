import TemporaryImage from '@/app/_components/ui/TemporaryImage';

import Link from 'next/link';

type ImageType = {
  id: string;
  src: string;
  width: number;
  height: number;
};
function ImageLink({
  src, id = '', width, height,
}: ImageType) {
  if (!src) {
    return null;
  }

  return (
    <Link href={id}>
      <TemporaryImage
        src={src}
        alt={id}
        imageWidth={`${width}px`}
        imageHeight={`${height}px`}
        imageStyle={{ borderRadius: '9999px' }}
      />
    </Link>
  );
}

export default ImageLink;

// Vercel 402 payment
// d<Image
// src={src}
// alt={id}
// width={width}
// height={height}
// style={{ borderRadius: '9999px' }}
// />
