/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, disabled, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a
        {...props}
        style={{
          opacity: disabled ? 0.25 : 1,
          pointerEvents: disabled ? 'none' : 'initial',
        }}
      >
        {children}
      </a>
    </NextLink>
  );
}
