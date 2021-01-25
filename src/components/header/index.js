import Head from "next/head";

export default function Header({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={description} key="title" />
      <meta property="og:image" content={image} key="ogimage" />
    </Head>
  );
}
