import Image from 'next/image';
import Link from 'next/link';

type ImageType = {
  id: string;
  src: string;
  width: number;
  height: number;
};
function ImageLink({
  src, id, width, height,
}: ImageType) {
  if (!src) {
    return null;
  }

  return (
    <Link href={id}>
      <Image
        src={src}
        alt={id}
        width={width}
        height={height}
        style={{ borderRadius: '9999px' }}
      />
    </Link>
  );
}

export default ImageLink;
