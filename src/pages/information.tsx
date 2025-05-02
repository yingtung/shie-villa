import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Banner from '../components/banner';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "livingroom.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
interface InformationPageProps extends PageProps {
  data: {
    banner: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const tabMenu = [
  { key: 'tab1', title: '入/退住須知' },
  { key: 'tab2', title: '訂房方式' },
  { key: 'tab3', title: '匯款資訊' },
  { key: 'tab4', title: '取消或延期' },
];
const AboutPage: React.FC<InformationPageProps> = ({ data }) => {
  const bannerImg = getImage(data.banner?.childImageSharp?.gatsbyImageData);
  return (
    <Layout>
      <div>
        <div className="pt-(--navbar-height) min-h-screen">
          {/* Banner Section */}
          {bannerImg && <Banner image={bannerImg} titleText="訂房須知" />}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <TabGroup>
              <TabList className="flex gap-4 justify-center">
                {tabMenu.map(({ key, title }) => {
                  return (
                    <Tab
                      key={key}
                      className="rounded-lg px-3 py-1 text-lg bg-(--button-color)"
                    >
                      {title}
                    </Tab>
                  );
                })}
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* 入住須知 */}
                  <div className="py-4">
                    <h1>入住須知</h1>
                    <ul className="list-disc list-inside">
                      <li>
                        入住時間(Check in)：PM 3:00；退房時間(Check out)：AM
                        11:00。延時退房將以每小時500元計算。
                      </li>
                      <li>
                        每房依預定房型人數入住，若未事先告知加入人數，本民宿有權拒絕入住，不便之處敬請見諒。
                      </li>
                      <li>
                        特別聲明：拒絕吸毒者，禁止室內抽煙以及攜帶檳榔，如造成民宿毀損、污漬，即沒收全部押金。
                      </li>
                      <li>
                        廚房不開放煎炒炸的烹調，只提供電鍋、微波爐和IH爐。
                      </li>
                      <li>無電梯設備。</li>
                      <li> 不提供塑瓶礦泉水有設置飲水機請自備環保瓶。</li>
                      <li>
                        同意訂房表示您們(包含同行友人)看過房型.業者不接受到達現場因房型不喜歡而要求換房.退房之理由
                      </li>
                      <li>
                        環保旅店只提供牙刷組、沐浴乳、洗髮精、浴巾和吹風機，其他請自備。
                      </li>
                    </ul>
                  </div>
                  <div className="py-4">
                    <h1>退房須知</h1>
                    <ul className="list-disc list-inside">
                      <li>損壞民宿所有物品依造價賠償，敬請愛惜。</li>
                      <li>
                        客房所有物品皆為極宿主人心血結晶作品，請勿任意取走。
                      </li>
                      <li>
                        退房時請仔細檢查確認個人物品是否有帶走，業者恕不負責。
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/* 訂房方式 */}
                  <div className="py-4">
                    <h1>訂房方式 </h1>
                    <p className="py-2">
                      可透過
                      <a
                        href="#available-date"
                        className="text-(--color-highlight)"
                      >
                        下方行事曆
                      </a>
                      事先查詢可預訂的日期，再以下列任一方式告知入住日期，入住大人及12歲以下兒童人數之後，會由民宿管家告知是否可供訂房
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        Facebook留言預約：到
                        <a
                          href="https://www.facebook.com/profile.php?id=61570093144442"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--color-highlight) underline"
                        >
                          官方臉書紛絲專頁
                        </a>
                        ，私訊小編訂房。
                      </li>
                      <li>
                        Instagram留言預約： 到
                        <a
                          href="https://www.instagram.com/shie_villa_2024/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-(--color-highlight) underline"
                        >
                          官方IG紛絲專頁
                        </a>
                        ，私訊小編訂房。
                      </li>
                    </ul>
                  </div>
                  <div
                    className="py-4 flex flex-col justify-center"
                    id="available-date"
                  >
                    <h1>可預約日期</h1>
                    <p className="py-2">未標示“已預訂”的日期皆可私訊小編預約</p>
                    <iframe
                      title="calendar"
                      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FTaipei&showPrint=0&showTabs=0&showCalendars=0&showTz=0&title=%E6%AD%87%E6%B0%91%E5%AE%BF%E5%8F%AF%E9%A0%90%E8%A8%82%E6%99%82%E9%96%93&showTitle=0&showNav=1&src=ZDczZjQ0MjYzODQ5YjZlMjdjOWQxMmViYmMxNzRhNGQwZGViMzhiNmU2NzliZTI4YWVjZTQ0M2Q1MGNlMmY2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33"
                      className="mb-16 mt-4 border-base"
                      // width="800"
                      height="600"
                    ></iframe>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/* 匯款資訊 */}
                  <div className="py-4">
                    <h1>匯款資訊</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <h2 className="py-2">ATM轉帳</h2>
                        <ul className="list-disc list-inside">
                          <li>銀行名稱：第一銀行</li>
                          <li>銀行代號：007</li>
                          <li>轉帳帳號：12345-12356-2345</li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="py-2">臨櫃匯款</h2>
                        <ul className="list-disc list-inside">
                          <li>銀行名稱：第一銀行</li>
                          <li>戶名：陳老闆</li>
                          <li>帳號：12345-12356-2345</li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-8">
                      <ul className="list-decimal list-inside">
                        <li>
                          訂金金額為總額之50%.並私訊FB或IG官方帳號告知已匯款及匯款帳號後三碼
                        </li>
                        <li>
                          2日內未匯款視同放棄訂房，本民宿得開放他人訂房，不另行通知
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/* 取消或延期 */}
                  <div className="py-4">
                    <h1>取消或延期</h1>
                    <p>依據交通部觀光局訂房定型化契約公告條例:</p>
                    <ul className="list-decimal list-inside">
                      <li>若於住宿當日取消訂房.需扣除已付訂金100%</li>
                      <li>若於住宿日1天前取消訂房.需扣除已付訂金80%</li>
                      <li>若於住宿日2至3日前取消訂房.需扣除已付訂金70%</li>
                      <li>若於住宿日4至6日前取消訂房.需扣除已付訂金60%</li>
                      <li>若於住宿日7至9日前取消訂房.需扣除已付訂金50%</li>
                      <li>若於住宿日10至13日前取消訂房.需扣除已付訂金30%。</li>
                      <li>
                        若於住宿日14日前取消訂房.訂金全額退費.需收取手續費100元
                      </li>
                      <li>取消訂房退訂金需一星期內的工作天</li>
                      <li>
                        如發生不可抗力之因素.如遇天然災害導致交通中斷.或中央氣象局發布陸上颱風警報等(以民宿所在地縣市政府頒布狀況為判定準則).可接受訂房延期1年或取消
                      </li>
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

export default AboutPage;
