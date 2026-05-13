export const profile = {
  nameZh: '周慶隆',
  nameEn: 'Andy Chou',
  title: {
    zh: '前端工程師 / UIUX 設計師',
    en: 'Frontend Engineer / UIUX Designer',
  },
  email: 'andychouforwk@gmail.com',
  github: 'https://github.com/AndyChouCoding',
  avatar: 'AC',
  bio: {
    zh: '您好，我是周慶隆 Andy，是一名前端工程師與 UIUX 設計師。精通 React 開發與 Figma 設計，擅長從設計稿到產品實作的完整流程，兼具工程思維與設計美感。',
    en: "Hi, I'm Andy Chou — a Frontend Engineer and UIUX Designer. Proficient in React and Figma, I specialize in bridging the gap between design and engineering, delivering pixel-perfect UI implementations with both technical precision and design sensibility.",
  },
}

export const aboutFacts = [
  {
    label: { zh: '目前職位', en: 'Current Role' },
    value: { zh: 'Frontend / UIUX', en: 'Frontend / UIUX' },
  },
  {
    label: { zh: '主力技術', en: 'Core Stack' },
    value: { zh: 'React + Figma', en: 'React + Figma' },
  },
  {
    label: { zh: '擅長領域', en: 'Specialty' },
    value: { zh: 'UI 設計實作', en: 'UI Implementation' },
  },
]

export const experiences = [
  {
    id: 1,
    period: '2025-06 ~ 現在 / Present',
    title: { zh: 'Frontend / UIUX Design', en: 'Frontend / UIUX Design' },
    company: { zh: '威力工業網絡股份有限公司', en: 'Power Industrial Network Co., Ltd.' },
    isCurrent: true,
    items: [
      {
        zh: '針對客戶與 PM 需求生產 Figma 設計稿，並針對設計稿細節還原 UI 元件',
        en: 'Produced Figma design specs based on client and PM requirements; pixel-perfectly implemented UI components from designs',
      },
      {
        zh: '開發產品新功能，從 UI 細節到功能實作',
        en: 'Developed new product features from UI details through to full functional implementation',
      },
    ],
  },
  {
    id: 2,
    period: '2023-08 ~ 2025-05',
    title: { zh: '個人生涯規劃', en: 'Career Break' },
    company: { zh: '育兒', en: 'Childcare' },
    isCurrent: false,
    isPersonal: true,
    items: [
      {
        zh: '因想陪伴小孩直到上學，暫離職場',
        en: 'Took time away from the workforce to care for my child until school age',
      },
    ],
  },
  {
    id: 3,
    period: '2023-04 ~ 2023-08',
    title: { zh: 'Frontend / UIUX Design', en: 'Frontend / UIUX Design' },
    company: { zh: '大博數據', en: 'DaBo Data' },
    isCurrent: false,
    items: [
      {
        zh: '使用 React、TypeScript、Tailwind、Git 等進行前端開發',
        en: 'Frontend development using React, TypeScript, Tailwind, and Git',
      },
      {
        zh: '使用 AdobeXD、Photoshop 提供 wireframe、素材與設計建議',
        en: 'Provided wireframes, assets, and design recommendations using AdobeXD and Photoshop',
      },
    ],
  },
  {
    id: 4,
    period: '2019-01 ~ 2020-01',
    title: { zh: '理財顧問', en: 'Financial Advisor' },
    company: { zh: '新光銀行', en: 'Shin Kong Bank' },
    isCurrent: false,
    items: [
      {
        zh: '管理客戶與銷售理財產品',
        en: 'Managed client relationships and sold financial products',
      },
    ],
  },
]

export const skillGroups = [
  {
    label: { zh: '前端框架', en: 'Frontend Frameworks' },
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
  },
  {
    label: { zh: '樣式 / UI', en: 'Styling / UI' },
    skills: ['Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
  },
  {
    label: { zh: '程式語言 / 工具', en: 'Languages / Tools' },
    skills: ['JavaScript', 'Git', 'Firebase', 'RWD'],
  },
  {
    label: { zh: '設計工具', en: 'Design Tools' },
    skills: ['Figma', 'AdobeXD', 'Photoshop'],
  },
  {
    label: { zh: 'AI 工具', en: 'AI Tools' },
    skills: ['Hermes Agent', 'Open Claw'],
  },
]

export const education = {
  school: { zh: '景文科技大學', en: 'Jinwen University of Science and Technology' },
  department: { zh: '財務金融系', en: 'Department of Finance' },
  degree: { zh: '學士', en: "Bachelor's Degree" },
  period: '2015-09 ~ 2018-06',
}
