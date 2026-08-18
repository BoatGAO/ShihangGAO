"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "en" | "ja" | "zh";

type EducationItem = {
  period: string;
  school: string;
  degree: string;
};

const content = {
  en: {
    languageName: "English",
    nav: {
      home: "Homepage",
      about: "About Me",
      news: "News",
      publications: "Publications",
      honors: "Honors and Awards",
      education: "Educations",
      services: "Services",
      internships: "Internships",
    },
    name: "Shihang GAO",
    title: "PhD Student",
    location: "Beijing",
    affiliation: "Beijing Institute of Technology",
    interests:
      "Research interests span data science, machine learning, deep learning, intelligent systems, and AI + Mental Health.",
    aboutTitle: "About Me",
    about:
      "I am building an academic profile across data science, machine learning, and intelligent systems, with a mathematical foundation and interdisciplinary training.",
    newsTitle: "News",
    news: ["This homepage is being updated with recent academic news."],
    publicationsTitle: "Publications",
    publications: ["Publications will be added here."],
    honorsTitle: "Honors and Awards",
    honors: [
      "First Class Honours, BSc Mathematics, University of Leicester.",
      "Additional honors and awards will be added here.",
    ],
    educationTitle: "Educations",
    education: [
      {
        period: "Sep 2026 - Present",
        school: "Beijing Institute of Technology",
        degree:
          "PhD in Management Science and Engineering · Information Management and Information Systems",
      },
      {
        period: "Sep 2025 - Jun 2026",
        school: "City University of Hong Kong",
        degree: "Master of Science in Data Science",
      },
      {
        period: "Sep 2021 - Jul 2025",
        school: "University of Leicester",
        degree: "Bachelor of Science in Mathematics, First Class Honours",
      },
      {
        period: "Sep 2021 - Jun 2025",
        school: "Dalian University of Technology",
        degree: "Bachelor of Science in Foundations of Mathematical Science",
      },
    ] satisfies EducationItem[],
    servicesTitle: "Services",
    services: ["Academic services will be added here."],
    internshipsTitle: "Internships",
    internships: ["Internship experience will be added here."],
    footer: "Academic homepage",
    skip: "Skip to main content",
  },
  ja: {
    languageName: "日本語",
    nav: {
      home: "ホーム",
      about: "自己紹介",
      news: "ニュース",
      publications: "発表論文",
      honors: "受賞歴",
      education: "学歴",
      services: "学術活動",
      internships: "インターン",
    },
    name: "Shihang GAO",
    title: "博士課程学生",
    location: "北京",
    affiliation: "北京理工大学",
    interests:
      "研究関心はデータサイエンス、機械学習、深層学習、知能システム、AI + メンタルヘルスにわたります。",
    aboutTitle: "自己紹介",
    about:
      "数学を基盤として、データサイエンス、機械学習、知能システムを横断する学術プロフィールを構築しています。",
    newsTitle: "ニュース",
    news: ["このホームページでは最近の学術ニュースを更新していきます。"],
    publicationsTitle: "発表論文",
    publications: ["発表論文は今後掲載します。"],
    honorsTitle: "受賞歴",
    honors: [
      "レスター大学 数学理学士 第一級優等学位。",
      "その他の受賞歴は今後掲載します。",
    ],
    educationTitle: "学歴",
    education: [
      {
        period: "2026年9月 - 現在",
        school: "北京理工大学",
        degree: "博士課程 · 管理科学・工学 · 情報管理・情報システム",
      },
      {
        period: "2025年9月 - 2026年6月",
        school: "香港城市大学",
        degree: "データサイエンス修士",
      },
      {
        period: "2021年9月 - 2025年7月",
        school: "レスター大学",
        degree: "数学理学士（第一級優等学位）",
      },
      {
        period: "2021年9月 - 2025年6月",
        school: "大連理工大学",
        degree: "数理科学基礎 理学士",
      },
    ] satisfies EducationItem[],
    servicesTitle: "学術活動",
    services: ["学術活動は今後掲載します。"],
    internshipsTitle: "インターン",
    internships: ["インターン経験は今後掲載します。"],
    footer: "アカデミックホームページ",
    skip: "本文へ移動",
  },
  zh: {
    languageName: "中文",
    nav: {
      home: "主页",
      about: "关于我",
      news: "动态",
      publications: "发表成果",
      honors: "荣誉奖励",
      education: "教育经历",
      services: "学术服务",
      internships: "实习经历",
    },
    name: "Shihang GAO",
    title: "博士研究生",
    location: "北京",
    affiliation: "北京理工大学",
    interests:
      "研究兴趣涵盖数据科学、机器学习、深度学习、智能系统与 AI + Mental Health。",
    aboutTitle: "关于我",
    about:
      "我以数学训练为基础，正在围绕数据科学、机器学习与智能系统方向构建自己的学术经历与研究能力。",
    newsTitle: "动态",
    news: ["该个人主页将持续更新近期学术动态。"],
    publicationsTitle: "发表成果",
    publications: ["发表内容将在这里更新。"],
    honorsTitle: "荣誉奖励",
    honors: [
      "莱斯特大学数学理学学士，一等荣誉学位。",
      "更多荣誉奖励将在这里更新。",
    ],
    educationTitle: "教育经历",
    education: [
      {
        period: "2026年9月 - 至今",
        school: "北京理工大学",
        degree: "博士研究生 · 管理科学与工程 · 信息管理与信息系统",
      },
      {
        period: "2025年9月 - 2026年6月",
        school: "香港城市大学",
        degree: "数据科学理学硕士",
      },
      {
        period: "2021年9月 - 2025年7月",
        school: "莱斯特大学",
        degree: "数学理学学士（一等荣誉）",
      },
      {
        period: "2021年9月 - 2025年6月",
        school: "大连理工大学",
        degree: "数学科学基础理学学士",
      },
    ] satisfies EducationItem[],
    servicesTitle: "学术服务",
    services: ["学术服务经历将在这里更新。"],
    internshipsTitle: "实习经历",
    internships: ["实习经历将在这里更新。"],
    footer: "个人学术主页",
    skip: "跳转到主要内容",
  },
} as const;

const languageOptions: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";

    const stored = window.localStorage.getItem("academic-homepage-language");
    return stored === "en" || stored === "ja" || stored === "zh" ? stored : "en";
  });
  const [profileSrc, setProfileSrc] = useState("");
  const copy = useMemo(() => content[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    window.localStorage.setItem("academic-homepage-language", locale);
  }, [locale]);

  useEffect(() => {
    let isActive = true;

    fetch(`${assetBasePath}/profile.b64`)
      .then((response) => response.text())
      .then((imageData) => {
        if (isActive) {
          setProfileSrc(`data:image/jpeg;base64,${imageData.trim()}`);
        }
      })
      .catch(() => {
        if (isActive) setProfileSrc("");
      });

    return () => {
      isActive = false;
    };
  }, []);

  const navItems = [
    ["top", copy.nav.home],
    ["about", copy.nav.about],
    ["news", copy.nav.news],
    ["publications", copy.nav.publications],
    ["honors", copy.nav.honors],
    ["education", copy.nav.education],
    ["services", copy.nav.services],
    ["internships", copy.nav.internships],
  ] as const;

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map(([href, label]) => (
              <a href={`#${href}`} key={href}>
                {label}
              </a>
            ))}
          </nav>

          <div className="language-switcher" aria-label="Language">
            {languageOptions.map((option) => (
              <button
                className={locale === option.code ? "active" : ""}
                key={option.code}
                onClick={() => setLocale(option.code)}
                type="button"
                aria-pressed={locale === option.code}
                title={content[option.code].languageName}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="page-shell" id="main">
        <aside className="profile-panel" id="top" aria-label={copy.name}>
          <figure className="portrait-wrap">
            <div className="portrait-frame">
              {profileSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profileSrc} alt="Portrait of Shihang GAO" />
              ) : (
                <div className="portrait-placeholder" aria-hidden="true">
                  SG
                </div>
              )}
            </div>
          </figure>

          <div className="profile-copy">
            <h1>{copy.name}</h1>
            <p className="profile-title">{copy.title}</p>
            <p className="profile-interests">{copy.interests}</p>
          </div>

          <ul className="profile-links" aria-label="Profile details">
            <li>
              <span aria-hidden="true">●</span>
              {copy.location}
            </li>
            <li>
              <span aria-hidden="true">◆</span>
              {copy.affiliation}
            </li>
            <li>
              <span aria-hidden="true">✉</span>
              <a href="mailto:boatgao@outlook.com">boatgao@outlook.com</a>
            </li>
          </ul>
        </aside>

        <div className="content-column">
          <section className="content-section about-section" id="about">
            <h2>{copy.aboutTitle}</h2>
            <p className="lead">{copy.about}</p>
          </section>

          <section className="content-section" id="news">
            <h2>{copy.newsTitle}</h2>
            <ul className="simple-list">
              {copy.news.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-section" id="publications">
            <h2>{copy.publicationsTitle}</h2>
            <ol className="numbered-list">
              {copy.publications.map((item, index) => (
                <li key={item}>
                  <span>[P{copy.publications.length - index}]</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="content-section" id="honors">
            <h2>{copy.honorsTitle}</h2>
            <ul className="simple-list">
              {copy.honors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-section" id="education">
            <h2>{copy.educationTitle}</h2>
            <div className="timeline-list">
              {copy.education.map((item) => (
                <article className="timeline-item" key={`${locale}-${item.school}`}>
                  <p className="period">{item.period}</p>
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="services">
            <h2>{copy.servicesTitle}</h2>
            <ul className="simple-list">
              {copy.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-section" id="internships">
            <h2>{copy.internshipsTitle}</h2>
            <ul className="simple-list">
              {copy.internships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shihang GAO</p>
        <p>{copy.footer}</p>
      </footer>
    </>
  );
}
