<script setup></script>

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
        <h1>BLOG</h1>
        <span>前端工程師 & 職涯諮詢師</span>
      </div>
    </div>
  </div>
  <div class="banner banner-bottom">
    <picture>
      <source
        media="(min-width: 769px)"
        srcset="
          https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/About%20Section.png?raw=true
        "
      />
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/About%20Section.png?raw=true"
        alt="自學前端不用怕：從零開始的三大關鍵"
        class="banner-two"
      />
    </picture>
    <div class="banner-bottom-content">
      <time datetime="2024/09/03">2024/10/21</time>
      <div class="banner-bottom-content-tags">
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
      <button type="button" class="banner-bottom-content-btn">閱讀內文</button>
    </div>
  </div>
  
  <section class="container">
    <div class="search-bar">
      <img src="../assets/image/search.png" alt="搜尋" />
      <input
        class="search-bar-content"
        type="text"
        placeholder="搜尋你感興趣的文章"
      
    </input>
  </div>
  <ul class="article-group">
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo10.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo4.png?raw=true"
          alt="React入門不再迷惘：三步驟帶你上手核心概念"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/10/11">2024/10/11</time>
        <div class="article-tags">
          <span>#React</span>
          <span>#入門基礎</span>
        </div>
        <h2>React入門不再迷惘：三步驟帶你上手核心概念</h2>
        <p>
          你是否對 React
          感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo1.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo1.png?raw=true"
          alt="前端作品集打造指南：讓你的專案成為履歷亮點"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/07">2024/09/07</time>
        <div class="article-tags">
          <span>#作品集</span>
          <span>＃求職攻略</span>
        </div>
        <h2>前端作品集打造指南：讓你的專案成為履歷亮點</h2>
        <p>
          對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
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

      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo3.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo6.png?raw=true"
          alt="前端轉職必讀：從自學者到工程師的心路歷程"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/07/08">2024/07/08</time>
        <div class="article-tags">
          <span>#轉職工程師</span>
          <span>#學習心法</span>
        </div>
        <h2>前端轉職必讀：從自學者到工程師的心路歷程</h2>
        <p>
          能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
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
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo5.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo5.png?raw=true"
          alt="Vue 3 新手指南：快速掌握 Composition API 與關鍵特色"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/06/29">2024/06/29</time>
        <div class="article-tags">
          <span>#Vue3</span>
          <span>#框架學習</span>
        </div>
        <h2>Vue 3 新手指南：快速掌握 Composition API 與關鍵特色</h2>
        <p>
          許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3
          上線，Composition API
          的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3
          的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo6.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo9.png?raw=true"
          alt="Git 與版本控制：前端協作的必修課"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/03">2024/05/04</time>
        <div class="article-tags">
          <span>#Git</span>
          <span>#協作流程</span>
        </div>
        <h2>Git 與版本控制：前端協作的必修課</h2>
        <p>
          當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo7.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo7.png?raw=true"
          alt="SEO 與前端最佳實踐：讓搜尋引擎看見你的網站"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/03">2024/05/01</time>
        <div class="article-tags">
          <span>#SEO</span>
          <span>#網頁曝光</span>
        </div>
        <h2>SEO 與前端最佳實踐：讓搜尋引擎看見你的網站</h2>
        <p>
          即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo8.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo8.png?raw=true"
          alt="穩定前端環境的祕訣：依賴管理與自動化流程"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/03">2024/02/17</time>
        <div class="article-tags">
          <span>#專案維護</span>
          <span>#自動化測試</span>
        </div>
        <h2>穩定前端環境的祕訣：依賴管理與自動化流程</h2>
        <p>
          前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。
        </p>
      </div>
      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo9.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo11.png?raw=true"
          alt="TypeScript 快速上手：強化前端程式碼的安全與可讀性"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/03">2024/02/17</time>
        <div class="article-tags">
          <span>#TypeScript</span>
          <span>#程式設計</span>
        </div>
        <h2>TypeScript 快速上手：強化前端程式碼的安全與可讀性</h2>
        <p>
          許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。
        </p>
      </div>

      <button type="button" class="article-btn">閱讀內文</button>
    </li>
    <li class="article-item">
      <picture class="article-image">
        <source
          srcset="
            https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/blog/photo11.png?raw=true
          "
          media="(max-width: 768px)"
        />
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/desktop/blog/photo10.png?raw=true"
          alt="掌握前端測試：從單元測試到端對端測試的完整攻略"
        />
      </picture>
      <div class="article-item-content">
        <time datetime="2024/09/03">2024/02/07</time>
        <div class="article-tags">
          <span>#測試框架</span>
          <span>#品質保證</span>
        </div>
        <h2>掌握前端測試：從單元測試到端對端測試的完整攻略</h2>
        <p>
          寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。
        </p>
      </div>

      <button type="button" class="article-btn">閱讀內文</button>
    </li>
  </ul>
  <div class="pagination">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left last-page" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
    <span class="page-number">1</span>
    <span class="page-number">2</span>
    <span class="page-number">3</span>
    <span class="page-number">4</span>
    <span class="page-number">5</span>
    <span class="page-number">...</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right next-page" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
    </svg>
  </div>
  <div class="theFooter-content">
    <span>alysewang@hexschool.com</span>
    <ul class="social-links">
      <li>
        <a href="#">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon.png?raw=true" alt="youtubeIcon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-1.png?raw=true" alt="podcastIcon" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/onlyIcon-2.png?raw=true" alt="facebookIcon" />
        </a>
      </li>
      <li class="social-link">
        <a href="#">
          <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2025-web-camp/mobile/index/icons8-linkedin%201.png?raw=true" alt="linkedinIcon" />
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
  </section>
</template>
<style scoped>

.theFooter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;
  max-width: 1296px;
  margin: 0 auto;
  @media (max-width: 767px) {
    display: none;
    padding: 0 24px;
  }
}

</style>
