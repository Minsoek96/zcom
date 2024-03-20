import Image from "next/image";

type ImageType = {
  alt: string;
  src: string;
  width: number;
  height: number;
};
const MyImage = ({ src, alt, width, height }: ImageType) => {
  if (!src) {
    return null;
  }

  return <Image 
      src={src} 
      alt={alt}
      width={width}
      height={height} 
    />;
};

export default MyImage;
