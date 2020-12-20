import { memo } from 'react';
import { Layout } from '../layout/Layout';
import { Workshop } from '../workshop/Workshop';
import { Navigation } from '../navigation/Navigation';
import { Heading } from '../shared/components/heading/Heading';
import { Footer } from '../footer/Footer';

type ErrorProps = {
  readonly heading: string;
};

export const Error = memo<ErrorProps>(({ heading }) => {
  return (
    <>
      <Layout>
        <Navigation />
        <main id="main" className="error">
          <section className="error">
            <Heading tag="h1" variant="secondary">
              {heading}
            </Heading>
            <img src="images/sad-emoji.png" alt="" />
          </section>
        </main>
      </Layout>
      <Workshop />
      <Footer />
    </>
  );
});
