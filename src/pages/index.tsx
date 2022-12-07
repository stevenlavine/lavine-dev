import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { fetchPage } from '../lib/helpers';
import { HomeProps } from '../types';
import Meta from '../components/Meta';

const Index = ({ data }: HomeProps) => {
  console.log(data);
  return (
    <>
      <Meta {...data.attributes.metaData} />
      {/*<Layout>*/}
      {/*  <Home />*/}
      {/*</Layout>*/}
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.cookies || '',
      ...(await fetchPage({
        path: '/api/homepage',
        locale: 'en',
        token: req.cookies?.jwt || '',
        params: {
          populate: '*',
        },
      })),
    },
  };
};
