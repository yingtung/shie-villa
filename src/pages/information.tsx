import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const tabMenu = [
  { key: 'tab1', title: '入/退住須知' },
  { key: 'tab2', title: '訂房方式' },
  { key: 'tab3', title: '匯款資訊' },
  { key: 'tab4', title: '取消或延期' },
];
const InformationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <div className="pt-(--navbar-height) min-h-screen">
          {/* Banner Section */}
          <Banner titleText="訂房須知" />
          <div className="max-w-6xl mx-auto px-6 py-16">
            <TabGroup>
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
                <TabPanel>
                  {/* 入住須知 */}
                  <div className="py-2">
                    <h1>入住須知</h1>
                    <ul className="list-disc list-outside">
                      <li>
                        入住時間：當日 15:00~20:00，請於入住前 30 分鐘告知。
                        <b className="underline">
                          入住時請出示身分證件並匯款全額住宿費用
                        </b>
                        ，以便辦理入住手續，倘若
                        <span className="text-(--color-dangerous)">
                          晚上八點過後才辦理入住，需加500元(每小時)
                        </span>
                        。
                      </li>
                      <li>
                        提早入住服務：可於中午十二點先至民宿辦理入住手續，並搶先體驗我們豐富的戶外設施，待下午三點後房務人員完成房間的清潔與消毒工作，即可正式入住。
                      </li>
                      <li>
                        本民宿為親子友善空間，提供一張嬰兒床、兩個澡盆、一台溫奶器、一台消毒鍋及兩張兒童餐椅使用。
                      </li>
                      <li>
                        提供零食車(含飲品、泡麵及餅乾，不固定的數量提供)，不供三餐
                      </li>
                      <li className="underline">
                        如需加備品棉被，需酌收清潔費。
                      </li>
                      <li>
                        續住的旅客，本民宿不提供打掃清潔、不換床單等備品。
                      </li>
                      <li>
                        配合政府政策，響應環保，不主動提供個人衛生用品(如：牙刷、牙膏、大浴巾、小毛巾及一次性使用備品，皆不提供)。
                      </li>
                      <li>
                        本民宿包棟入住平日最低人數為10人，一天只接待一組客人；臨時變更增加入住的人數或無法遵守以上規定，恕我們無法接待。
                      </li>
                      <li>
                        如要攜帶寵物，須提前告知且獲得民宿方同意，並
                        <b>已匯款「額外收取押金二萬元」</b>
                        ，方可攜帶寵物，寵物請勿任意放養、禁止進入戲水池、沙坑及民宿住宿室內空間。
                      </li>
                      <li>
                        如有特殊需求請先告知(例如：寄放行李或延後退房)，本民宿竭誠為每位旅客熱誠服務。
                      </li>
                    </ul>
                  </div>
                  <div className="py-2">
                    <h1>退房須知</h1>
                    <ul className="list-disc list-outside">
                      <li>
                        退房時間：隔日 11:00前(
                        <b>退房時，務必請交還房門及大門鑰匙</b>
                        )，倘若
                        <span className="text-(--color-dangerous)">
                          延後退房，需加500元(每小時)
                        </span>
                        。
                      </li>
                      <li>
                        屋内之傢俱、電器、擺設、器具系列等皆為本民宿之財產，上列物品如有折損或遺失，敬請照價賠償，並請勿任意移動室內擺設(如床舖、電視、展示櫃內物品等)。
                      </li>
                      <li>
                        等待房務人員打掃清潔完畢，確認沒有損壞及違規事項後，會將押金兩萬元退還至您指定的帳戶
                      </li>
                      <li>
                        個人貴重物品，請自行妥善保管，如有遺失，恕不負責，敬請見諒。
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  {/* 訂房方式 */}
                  <div className="py-4">
                    <h1>訂房方式 </h1>
                    <ul className="list-decimal list-outside">
                      <li>
                        查詢空房： 請先參考，
                        <a
                          href="#available-date"
                          className="text-(--color-highlight)"
                        >
                          下方行事曆
                        </a>
                        確認您欲入住的日期是否可預訂。
                      </li>
                      <li>
                        聯繫訂房： 透過我們的{' '}
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
                        方式支付剩餘的全額住宿費用。貼心提醒：本民宿不收現金、也不接受信用卡付款方式。
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
                          .並私訊官方帳號告知帳號末五碼，以便查核，我們將為您保留訂房。
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
