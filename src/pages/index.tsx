import { GetServerSideProps } from 'next';
import { fetchPage } from '../lib/helpers';
import { HomeProps } from '../types';
import Meta from '../components/Meta';
import Layout from '../components/layout/layout';

const Index = ({ data }: HomeProps) => {
  console.log(data.attributes);
  return (
    <>
      <Meta {...data.attributes.metaData} />
      <Layout>
        <div className="hero">
          <div className="hero-inner">
            <h1>
              <span>{data.attributes.pageTitle.smallText}</span>
              {data.attributes.pageTitle.largeText}
            </h1>
            <div
              className="hero-intro"
              dangerouslySetInnerHTML={{ __html: data.attributes.introduction }}
            />
          </div>
        </div>
      </Layout>
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
          populate:
            'pageTitle,metaData.metaSocial.image,aboutMe.skills,aboutMe.image',
        },
      })),
    },
  };
};
