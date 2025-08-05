import { graphql, type HeadFC, type PageProps } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { SEO } from '../components/seo';
import { PortableText } from '@portabletext/react';
import components from '../components/protableTextComponents';

interface InformationPageProps extends PageProps {
  data: {
    allSanityRegulation: {
      nodes: {
        title: string;
        _rawContent: any;
      }[];
    };
  };
}

const tabMenu = [
  { key: 'tab1', title: '查詢訂房日期', hash: 'available-date' },
  { key: 'tab2', title: '住宿須知', hash: 'regulation' },
  { key: 'tab3', title: '匯款資訊', hash: 'payment' },
  { key: 'tab4', title: '取消或延期', hash: 'cancel-or-delay' },
];

const PAGE_TITLE = '訂房須知';

export const query = graphql`
  query {
    allSanityRegulation(sort: { order: ASC }) {
      nodes {
        title
        _rawContent
      }
    }
  }
`;

const InformationPage: React.FC<InformationPageProps> = ({ data }) => {
  const regulations = data.allSanityRegulation.nodes;

  // 根據URL hash決定初始選中的tab
  const getInitialSelectedIndex = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const index = tabMenu.findIndex((tab) => tab.hash === hash);
      return index >= 0 ? index : 0;
    }
    return 0;
  };

  const [selectedIndex, setSelectedIndex] = useState(getInitialSelectedIndex);

  // 監聽URL hash變化
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const index = tabMenu.findIndex((tab) => tab.hash === hash);
      if (index >= 0) {
        setSelectedIndex(index);
      }
    };

    // 監聽hashchange事件
    window.addEventListener('hashchange', handleHashChange);

    // 初始化時檢查hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // 處理tab切換
  const handleTabChange = (index: number) => {
    setSelectedIndex(index);
    const hash = tabMenu[index].hash;
    window.location.hash = hash;
  };

  return (
    <Layout>
      <div>
        <div className="pt-(--navbar-height) min-h-screen">
          {/* Banner Section */}
          <Banner titleText={PAGE_TITLE} />
          <div className="max-w-6xl mx-auto px-6 py-16">
            <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
              <TabList className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-center">
                {tabMenu.map(({ key, title }) => {
                  return (
                    <Tab
                      key={key}
                      className={`rounded-lg px-4 py-2 text-lg bg-(--button-color-secondary)
     focus:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2
     data-hover:bg-(--button-color)/40 hover:bg-(--button-color)/40
     data-selected:bg-(--button-color) data-selected:data-hover:bg-(--button-color)/80
     transition-colors duration-200 ease-in-out`}
                    >
                      {title}
                    </Tab>
                  );
                })}
              </TabList>
              <TabPanels>
                <TabPanel id="calendar">
                  {/* 訂房方式 */}
                  <div className="py-4">
                    <div className="flex flex-col justify-center">
                      <h1>查詢訂房日期</h1>
                      <p className="py-2">
                        未標示"已預訂"的日期皆可私訊小編預約
                      </p>
                      <iframe
                        title="calendar"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FTaipei&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=%E6%AD%87%E6%B0%91%E5%AE%BF%E5%8F%AF%E9%A0%90%E8%A8%82%E6%99%82%E9%96%93&showTitle=0&showNav=1&src=ZDczZjQ0MjYzODQ5YjZlMjdjOWQxMmViYmMxNzRhNGQwZGViMzhiNmU2NzliZTI4YWVjZTQ0M2Q1MGNlMmY2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33"
                        className="mb-8 mt-4 border-base"
                        // width="800"
                        height="600"
                      ></iframe>
                    </div>
                    <h1>訂房方式 </h1>
                    <ul className="list-decimal list-outside">
                      <li>
                        查詢空房： 請先參考，
                        <a
                          href="#calendar"
                          className="text-(--color-highlight)"
                        >
                          上方行事曆
                        </a>
                        確認您欲入住的日期是否可預訂。
                      </li>
                      <li>
                        聯繫訂房： 透過我們的
                        <a
                          href="https://www.facebook.com/profile.php?id=61570093144442"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--color-highlight) underline"
                        >
                          Facebook
                        </a>
                        或
                        <a
                          href="https://www.instagram.com/shie_villa_2024/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--color-highlight) underline"
                        >
                          Instagram
                        </a>
                        官方帳號私訊我們，告知您的
                        <b>入住日期、入住大人人數及3 歲以下兒童人數</b>
                        。民宿管家將會提供您詳細的住宿費用。
                      </li>
                      <li>
                        匯款訂金： 確認入住時間、人數及費用後，請匯款訂金新台幣
                        <b>兩萬元</b>至我們指定的帳戶。
                      </li>
                      <li>
                        完成訂房：
                        匯款完成後，請私訊小編您的匯款帳號末五碼，待我們確認款項後，即完成訂房手續。
                      </li>
                      <li>
                        入住付款： 抵達民宿辦理入住時，請以<b>轉帳匯款</b>
                        方式支付全額住宿費用。貼心提醒：本民宿不收現金、也不接受信用卡付款方式。
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  {regulations.map((regulation) => {
                    return (
                      <div className="py-4">
                        <h1>{regulation.title}</h1>
                        <PortableText
                          value={regulation._rawContent}
                          components={components}
                        />
                      </div>
                    );
                  })}
                </TabPanel>
                <TabPanel>
                  {/* 匯款資訊 */}
                  <div className="py-4">
                    <h1>匯款資訊</h1>
                    <div>
                      <ul className="list-disc list-outside">
                        <li>第一銀行 (007) 虎尾分行</li>
                        <li>戶名：陳育附</li>
                        <li>帳號：533-68-304917</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <ul className="list-decimal list-outside">
                        <li>
                          訂金金額為<b>兩萬塊</b>
                          並私訊官方帳號告知帳號末五碼，以便查核，我們將為您保留訂房。
                        </li>
                        <li>
                          本民宿不收現金、不使用信用卡付款方式，入住時請以
                          <b>匯款轉帳</b>的方式支付全額住宿費用。
                        </li>
                        <li>
                          訂房時所先支付的訂金，入住時轉為<b>押金使用</b>
                          ，並於「退房後，待民宿清潔人員打掃完畢並確認無任何損壞與違規事項後，才會全數進行退款」，請於退房時私訊官方帳號並主動提供退款帳號，謝謝您的配合。
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/* 取消或延期 */}
                  <div className="py-4">
                    <h1>取消或延期</h1>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>住宿日前３日內不得延期</b>
                        (除人力不可抗拒因素外)，延期訂金保留３個月（僅限延期一次），並請重新訂房，恕不另行通知。
                      </li>
                      <li className="text-(--color-dangerous)">
                        <b>
                          當日不接受退房，如欲更改入住人數、房型、房數或延期請於一週前通知。
                        </b>
                      </li>
                      <li>
                        天災延期：如遇天災（颱風、地震）經各縣市政府或旅客所在地政府發佈停止上班上課，可辦理延期住宿，並保留訂金三個月，請於期限內擇期住宿。
                      </li>
                      <li>
                        取消訂房：前十五天全額退費，十五天內依觀光局規定扣成數，
                        <b className="text-(--color-dangerous)">當日恕不退訂</b>
                        。
                      </li>
                      <li>
                        本民宿訂金之收取，依照觀光局頒佈《定型化契約》規定，並依法令規定比率進行取消訂房之扣款如下：
                      </li>
                      <ul className="list-decimal list-outside px-4">
                        <li className="text-(--color-dangerous)">
                          旅客住宿日當日取消訂房扣預付訂金金額100%
                        </li>
                        <li>
                          旅客於住宿日前1日內取消訂房扣房價預付訂金金額80%
                        </li>
                        <li>
                          旅客於住宿日前2-3日內取消訂房扣房價預付訂金金額70%
                        </li>
                        <li>
                          旅客於住宿日前4-6日內取消訂房扣房價預付訂金金額60%
                        </li>
                        <li>
                          旅客於住宿日前7-9日內取消訂房扣房價預付訂金金額50%
                        </li>
                        <li>
                          旅客於住宿日前10-13日內取消訂房扣房價預付訂金金額30%
                        </li>
                        <li>
                          旅客於住宿日前14日前(含14日)取消訂房扣房價預付訂金金額0%。(或可延期半年以一次為限)。
                        </li>
                      </ul>
                    </ul>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InformationPage;
export const Head: HeadFC = () => <SEO title={PAGE_TITLE} />;
