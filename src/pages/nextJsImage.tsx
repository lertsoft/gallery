import React from 'react';

import Image from 'next/image';
import { PhotoProps } from 'react-photo-album';

type NextJsImageProps = PhotoProps & {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

const nextJsImage = ({ photo, imageProps, wrapperProps }: NextJsImageProps) => {
  const { width, height } = photo;
  const { src, alt, title, style, sizes, className, onClick } = imageProps;
  const { style: wrapperStyle, ...restWrapperProps } = wrapperProps ?? {};

  return (
    <div
      style={{
        width: style.width,
        padding: style.padding,
        marginBottom: style.marginBottom,
        ...wrapperStyle,
      }}
      {...restWrapperProps}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};

export default nextJsImage;
