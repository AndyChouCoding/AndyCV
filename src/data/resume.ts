export const profile = {
  nameZh: '周慶隆',
  nameEn: 'Andy Chou',
  title: {
    zh: '全端工程師 / UIUX 設計師',
    en: 'Full-Stack Engineer / UIUX Designer',
  },
  email: 'andychouforwk@gmail.com',
  github: 'https://github.com/AndyChouCoding',
  avatar: 'AC',
  bio: {
    zh: '您好，我是周慶隆 Andy，是一名全端工程師與 UIUX 設計師。精通 React 開發與 Figma 設計，擅長從設計稿到產品實作的完整流程，兼具工程思維與設計美感。',
    en: "Hi, I'm Andy Chou — a Full-Stack Engineer and UIUX Designer. Proficient in React and Figma, I specialize in bridging the gap between design and engineering, delivering pixel-perfect UI implementations with both technical precision and design sensibility.",
  },
}

export const aboutFacts = [
  {
    label: { zh: '目前職位', en: 'Current Role' },
    value: { zh: 'Full-Stack / UIUX', en: 'Full-Stack / UIUX' },
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
    period: '2026-07 ~ 現在 / Present',
    title: { zh: '中階前端工程師 | UI/UX', en: 'Mid-level Frontend Engineer | UI/UX' },
    company: { zh: 'ORing Industrial Networking Corp.', en: 'ORing Industrial Networking Corp.' },
    isCurrent: true,
    items: [
      {
        zh: '主導 NMS 專案導入 IEC 62443 資安規範，落實輸入驗證、權限控管與安全性稽核機制',
        en: 'Led the adoption of IEC 62443 security requirements for the NMS platform, implementing input validation, access control, and security audit mechanisms',
      },
      {
        zh: '提升前端開發、維運與 UI/UX 優化的主導角色，更深度參與產品迭代決策',
        en: 'Took on greater ownership of frontend development, maintenance, and UI/UX improvements, playing a more active role in product iteration decisions',
      },
      {
        zh: '主導擴大 CI/CD 建置，強化自動化部署與測試流程',
        en: 'Led the expansion of CI/CD pipelines, strengthening automated deployment and testing workflows',
      },
    ],
  },
  {
    id: 2,
    period: '2025-06 ~ 2026-06',
    title: { zh: '前端工程師 | UIUX', en: 'Frontend Engineer | UIUX' },
    company: { zh: 'ORing Industrial Networking Corp.', en: 'ORing Industrial Networking Corp.' },
    isCurrent: false,
    items: [
      {
        zh: '負責 NMS（網路管理系統）產品的 UI/UX 設計與前端功能開發，涵蓋測試與後續產品優化',
        en: 'Designed and developed UI/UX and frontend features for a Network Management System (NMS), including testing and ongoing product improvements',
      },
      {
        zh: '以 Figma 完成設計稿，並運用 MUI 實作對應 React 元件，確保設計與實作一致性',
        en: 'Delivered design specs in Figma and implemented corresponding React components with MUI, ensuring consistency between design and implementation',
      },
      {
        zh: '建立前端單元測試機制，提升程式碼品質與穩定性',
        en: 'Established unit testing practices for the frontend codebase, improving code quality and stability',
      },
    ],
  },
  {
    id: 3,
    period: '2023-08 ~ 2025-06',
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
    id: 4,
    period: '2023-04 ~ 2023-08',
    title: { zh: '前端工程師 / UIUX 設計', en: 'Frontend / UIUX Design' },
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
    id: 5,
    period: '2017-06 ~ 2018-07',
    title: { zh: '理財顧問', en: 'Financial Advisor' },
    company: { zh: '新光金控', en: 'Shin Kong Financial Holdings' },
    isCurrent: false,
    items: [
      {
        zh: '提供客戶服務與金融商品銷售，培養與客戶溝通及需求釐清的能力',
        en: 'Delivered customer service and financial product sales, developing client communication and requirement-clarification skills',
      },
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'ViteNMS',
    description: {
      zh: '為 Windows 平板打造的單機版網路管理系統，透過 SNMP/LLDP 提供即時網路拓樸視覺化與設備監控，並以 IEC 62443 安全原則進行架構設計。',
      en: 'A standalone Network Management System for Windows tablets, providing real-time network topology visualization and device monitoring via SNMP/LLDP, architected against IEC 62443 security principles.',
    },
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Tauri', 'Rust'],
    github: 'https://github.com/AndyChouCoding/viteNMS',
    demo: null as string | null,
    image: '/projects/vitenms-topology.png',
  },
  {
    id: 2,
    name: 'SnmpTrafficVerifier',
    description: {
      zh: '互動式 CLI 工具，用於驗證交換器連接埠的流量監測是否正確：透過 SNMP v2c 輪詢 ifHCInOctets/ifHCOutOctets 計算即時速率，並可產生指定 kpps 的 UDP 流量供交叉比對。以 Node.js 開發，打包成內嵌 runtime 的 Windows 單一執行檔。',
      en: 'An interactive CLI tool for verifying switch port traffic monitoring: polls ifHCInOctets/ifHCOutOctets via SNMP v2c to compute real-time rates, and can generate UDP traffic at a fixed kpps for cross-checking. Built with Node.js and packaged as a self-contained Windows executable.',
    },
    techStack: ['Node.js', 'net-snmp', 'Windows SEA'],
    github: 'https://github.com/AndyChouCoding/SnmpTrafficVerifier',
    demo: null as string | null,
    image: '/projects/snmp-traffic-verifier-cli.png',
  },
  {
    id: 3,
    name: 'fakeIG',
    description: {
      zh: '仿 Instagram 介面的前端練習專案，還原限時動態、貼文動態牆（按讚／留言／分享）與追蹤名單側欄等核心互動元件。',
      en: 'A front-end Instagram clone built as a practice project, replicating core UI/interaction patterns — stories, a post feed with like/comment/share, and a following sidebar.',
    },
    techStack: ['React', 'TypeScript'],
    github: 'https://github.com/AndyChouCoding/fakeIG',
    demo: 'https://fake-ig-three.vercel.app',
    image: '/projects/fakeig-demo.png',
  },
]

export const skillGroups = [
  {
    label: { zh: '前端框架', en: 'Frontend Frameworks' },
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
  },
  {
    label: { zh: '後端框架', en: 'Backend Frameworks' },
    skills: ['Node.js', 'Python'],
  },
  {
    label: { zh: '樣式 / UI', en: 'Styling / UI' },
    skills: ['Tailwind CSS', 'MUI', 'Bootstrap', 'HTML', 'CSS'],
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
