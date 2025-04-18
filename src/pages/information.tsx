import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Information page</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FTaipei&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=%E6%AD%87%E6%B0%91%E5%AE%BF%E5%8F%AF%E9%A0%90%E8%A8%82%E6%99%82%E9%96%93&showTitle=0&showNav=1&src=ZDczZjQ0MjYzODQ5YjZlMjdjOWQxMmViYmMxNzRhNGQwZGViMzhiNmU2NzliZTI4YWVjZTQ0M2Q1MGNlMmY2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33"
        className="my-32 border-base"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </Layout>
  );
};

export default AboutPage;
