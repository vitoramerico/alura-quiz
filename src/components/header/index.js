import React from 'react';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
export default function Header({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={description} key="title" />
      <meta property="og:image" content={image} key="ogimage" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" type="image/svg" href="https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
