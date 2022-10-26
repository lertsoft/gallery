import Head from 'next/head';

const Fallback = () => (
  <>
    <Head>
      <title>Gallery du Coste</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>You are disconnected from the internet in this moment.</h2>
  </>
);

export default Fallback;
