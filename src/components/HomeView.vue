<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goToArticleDetail() {
  router.push("/hex-blog/detail");
}
</script>
<template>
  <div class="banner banner-top">
    <picture>
      <source
        media="(min-width: 769px)"
        srcset="
          https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/Hero%20Section.png?raw=true
        "
      />
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/Hero%20Section.png?raw=true"
        alt="banner-one"
        class="banner-one"
      />
    </picture>
    <div class="banner-top-container">
      <div class="banner-top-container-content">
        <h1>Alyse Wang</h1>
        <span>前端工程師 & 職涯諮詢師</span>
      </div>
    </div>
  </div>
  <div class="introduce-container">
    <p>嗨，我是Alyse一名深耕前端技術的工程師。</p>
    <p>
      擅長 React、Vue
      等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
    </p>
    <ul class="social-links">
      <li>
        <a href="#">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon.png?raw=true"
            alt="youtubeIcon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-1.png?raw=true"
            alt="podcastIcon"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-2.png?raw=true"
            alt="facebookIcon"
          />
        </a>
      </li>
      <li class="social-link">
        <a href="#">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/icons8-linkedin%201.png?raw=true"
            alt="linkedinIcon"
          />
        </a>
      </li>
      <li class="social-link">
        <a href="#">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-3.png?raw=true"
            alt="InstagramIcon"
            class="ig-img"
          />
        </a>
      </li>
    </ul>
  </div>
  <section class="container">
    <h2>專業服務與方案</h2>
    <ul class="plan-list">
      <li class="item item-one">
        <div class="item-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo.png?raw=true"
            alt="履歷健檢"
          />
        </div>
        <div class="item-content">
          <span class="border"></span>
          <h3>履歷健檢</h3>
          <p>
            履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。
          </p>
        </div>
      </li>
      <li class="item item-two">
        <div class="item-content-pc">
          <span class="border"></span>
          <h3>線上諮詢</h3>
          <p>
            想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
          </p>
        </div>
        <div class="item-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo2.png?raw=true"
            alt="線上諮詢"
          />
        </div>
        <div class="item-content item-content-mb">
          <span class="border"></span>
          <h3>線上諮詢</h3>
          <p>
            想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。
          </p>
        </div>
      </li>
      <li class="item item-three">
        <div class="item-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo3.png?raw=true"
            alt="網頁開發"
          />
        </div>
        <div class="item-content">
          <span class="border"></span>
          <h3>網頁開發</h3>
          <p>
            想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。
          </p>
        </div>
      </li>
      <li class="item item-four">
        <div class="item-content-pc">
          <span class="border"></span>
          <h3>企業內訓</h3>
          <p>
            想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。
          </p>
        </div>
        <div class="item-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo4.png?raw=true"
            alt="企業內訓"
          />
        </div>
        <div class="item-content item-content-mb">
          <span class="border"></span>
          <h3>企業內訓</h3>
          <p>
            想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。
          </p>
        </div>
      </li>
    </ul>
    <div class="connect">
      <span>聯繫我，取得更多資訊</span>
      <div class="connect-image">
        <img src="../assets/image/arrow.png" alt="箭頭" />
      </div>
    </div>
  </section>
  <div class="line"></div>
  <!-- 部落格精選 -->
  <section class="container">
    <h2>部落格精選</h2>
    <ul class="article-group">
      <li class="article-item">
        <picture class="article-image">
          <source
            media="(max-width: 768px)"
            srcset="
              https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/About%20Section.png?raw=true
            "
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/About%20Section.png?raw=true"
            alt="自學前端不用怕：從零開始的三大關鍵"
          />
        </picture>
        <div class="article-item-content">
          <time datetime="2024/09/03">2024/10/21</time>
          <div class="article-tags">
            <span>#前端開發</span>
            <span>#職涯成長</span>
            <span class="tag-popular">人氣文章</span>
          </div>
          <h2>自學前端不用怕：從零開始的三大關鍵</h2>
          <p>
            嗨，我是
            Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
            其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
          </p>
          <button type="button" class="article-btn" @click="goToArticleDetail">
            閱讀內文
          </button>
        </div>
      </li>
      <li class="article-item">
        <picture class="article-image">
          <source
            srcset="
              https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo4.png?raw=true
            "
            media="(max-width: 768px)"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo3.png?raw=true"
            alt="前端面試不再慌：破解常見提問的三大策略"
          />
        </picture>
        <div class="article-item-content">
          <time datetime="2024/07/09">2024/07/09</time>
          <div class="article-tags">
            <span>#面試準備</span>
            <span>#工程師求職</span>
            <span class="tag-popular">人氣文章</span>
          </div>
          <h2>前端面試不再慌：破解常見提問的三大策略</h2>
          <p>
            面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。
          </p>
        </div>
        <button type="button" class="article-btn" @click="goToArticleDetail">
          閱讀內文
        </button>
      </li>
      <li class="article-item">
        <picture class="article-image">
          <source
            srcset="
              https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo2.png?raw=true
            "
            media="(max-width: 768px)"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo2.png?raw=true"
            alt="CSS 魔法大揭密：排版與設計的三大關鍵技巧"
          />
        </picture>
        <div class="article-item-content">
          <time datetime="2024/09/03">2024/09/03</time>
          <div class="article-tags">
            <span>#CSS設計</span>
            <span>#視覺體驗</span>
          </div>
          <h2>CSS 魔法大揭密：排版與設計的三大關鍵技巧</h2>
          <p>
            在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭
            CSS，打造兼具美感與功能性的網頁。
          </p>
        </div>
        <button type="button" class="article-btn" @click="goToArticleDetail">
          閱讀內文
        </button>
      </li>
    </ul>
  </section>
  <div class="line"></div>
  <section class="container">
    <h2>職涯諮詢成功案例</h2>
    <div class="success-case-banner">
      <div class="banner-bg">
        <picture>
          <source
            srcset="
              https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/photo8.png?raw=true
            "
            media="(max-width: 768px)"
          />
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo8.png?raw=true"
            alt=""
          />
        </picture>
      </div>
      <div class="success-case-banner-content">
        <div class="banner-content">
          <span class="border"></span>
          <p>
            在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
            <span>突破原有的舒適圈</span>
            。
          </p>
        </div>
        <div class="reserve-list">
          <span class="border"></span>
          <div class="reserve-content">
            <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
            <button type="button" class="btn reserve-btn">立即預約諮詢</button>
          </div>
        </div>
      </div>
    </div>

    <ul class="case-list">
      <li class="case-item">
        <div class="case-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people.png?raw=true"
            alt="人物"
          />
        </div>
        <div class="case-content">
          <ul class="check-list">
            <h3>無經驗到前端工程師 Offer</h3>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>打造前端專案與履歷亮點</span>
            </li>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>深度強化面試表現</span>
            </li>
          </ul>
          <span class="bottom-line"></span>
          <button type="button" class="btn go-podcast-btn">
            前往聆聽podcast
          </button>
        </div>
      </li>
      <li class="case-item">
        <div class="case-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people2.png?raw=true"
            alt="人物"
          />
        </div>
        <div class="case-content">
          <ul class="check-list">
            <h3>轉職迷茫到明確學習規劃</h3>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>制訂階段性目標與時間安排</span>
            </li>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>鼓勵參與前端社群或活動</span>
            </li>
          </ul>
          <span class="bottom-line"></span>
          <button type="button" class="btn go-podcast-btn">
            前往聆聽podcast
          </button>
        </div>
      </li>
      <li class="case-item">
        <div class="case-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people3.png?raw=true"
            alt="人物"
          />
        </div>
        <div class="case-content">
          <ul class="check-list">
            <h3>面試緊張到從容應對</h3>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>透過面試模擬找出常犯的邏輯漏洞</span>
            </li>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>討論遇到不熟悉議題時的回應方式</span>
            </li>
          </ul>
          <span class="bottom-line"></span>
          <button type="button" class="btn go-podcast-btn">
            前往聆聽podcast
          </button>
        </div>
      </li>
      <li class="case-item">
        <div class="case-image">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/people4.png?raw=true"
            alt="人物"
          />
        </div>
        <div class="case-content">
          <ul class="check-list">
            <h3>面試緊張到從容應對</h3>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>擬定進階框架或技術研究目標</span>
            </li>
            <li class="check-item">
              <img src="../assets/image/check.png" alt="打勾圖示" />
              <span>培養跨團隊溝通與簡報能力</span>
            </li>
          </ul>
          <span class="bottom-line"></span>
          <button type="button" class="btn go-podcast-btn">
            前往聆聽podcast
          </button>
        </div>
      </li>
    </ul>
  </section>
  <div class="banner banner-top banner-line">
    <picture>
      <source
        media="(min-width: 769px)"
        srcset="
          https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/index/photo9.png?raw=true
        "
      />
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/photo9.png?raw=true"
        alt="banner-one"
        class="banner-one"
      />
    </picture>
    <div class="subscribe-email-container">
      <div class="subscribe-email">
        <h2>訂閱電子報</h2>
        <p>
          立即訂閱，搶先掌握
          <span>前端 x 職涯</span>
          的獨家資訊！
        </p>
        <div class="subscribe-email-form">
          <input type="text" placeholder="請輸入您的大名" />
          <input type="email" placeholder="請輸入您的電子信箱" />
        </div>
        <button type="submit" class="btn subscribe-email-btn">啟動訂閱</button>
      </div>
    </div>
  </div>
  <div class="container">
    <h2>與我聯繫</h2>
    <ul class="content-links">
      <li class="link">
        <div class="link-title">
          <span>alysewang@hexschool.com</span>
          <span>合作洽談</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
      <li class="link">
        <div class="link-title">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon.png?raw=true"
            alt="youtube logo"
          />
          <span>Youtube 職涯諮詢室</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
      <li class="link">
        <div class="link-title">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-1.png?raw=true"
            alt="podcast logo"
          />
          <span>podcast 職涯諮詢室</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
      <li class="link">
        <div class="link-title">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-2.png?raw=true"
            alt="Facebook logo"
          />
          <span>Facebook 前端社群</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
      <li class="link">
        <div class="link-title">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/icons8-linkedin%201.png?raw=true"
            alt="linkedin logo"
          />
          <span>linkedin 職涯交流</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
      <li class="link">
        <div class="link-title">
          <img
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-3.png?raw=true"
            alt="Instagram logo"
          />
          <span>Instagram 日常分享</span>
        </div>
        <div class="arrow-right">
          <img src="../assets/image/arrow-right.png" alt="箭頭圖示" />
        </div>
      </li>
    </ul>
  </div>
  <div class="line"></div>
</template>
