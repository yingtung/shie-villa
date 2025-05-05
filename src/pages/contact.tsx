import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Banner from '../components/banner';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pt-(--navbar-height) min-h-screen">
        {/* Banner Section */}
        <Banner titleText="聯繫我們" />
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="pb-4">社群媒體</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <StaticImage
                    src={'../images/fbQrCode.png'}
                    alt={'FB QR code'}
                    height={200}
                  />
                  <h3 className="pb-4">FB 粉絲專頁QR Code</h3>
                </div>
                <div>
                  <StaticImage
                    src={'../images/igQrCode.jpg'}
                    alt={'IG QR code'}
                    height={200}
                  />
                  <h3 className="pb-4">IG 粉絲專頁QR Code</h3>
                </div>
              </div>
            </div>
            <div>
              <h1 className="pb-4 pt-4 md:pt-0">聯絡方式</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1/2">
                <div className="pb-4">
                  <p>地址：雲林縣虎尾鎮新吉里155號</p>
                  <p>TEL：0937294184</p>
                  <p>民宿合法編號： 雲林縣民宿 102</p>
                </div>
                <StaticImage
                  src={'../images/lisence.jpg'}
                  alt={'lisence'}
                  className="x-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
