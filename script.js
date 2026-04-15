// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== Korean Translation =====
const translations = {
  ko: {
    // Nav
    'nav.about': '소개',
    'nav.education': '학력',
    'nav.experience': '경력',
    'nav.projects': '프로젝트',
    'nav.skills': '기술',
    'nav.certifications': '자격증',
    'nav.contact': '연락처',

    // Hero
    'hero.greeting': '안녕하세요',
    'hero.title': '데이터 사이언티스트 & 연구원',
    'hero.subtitle': '산업 데이터 사이언스 & 공학 석박사 통합과정',
    'hero.contact': '연락하기',

    // About
    'about.title': '소개',
    'about.p1': '저는 부경대학교와 부산대학교 공동학위 프로그램으로 산업 데이터 사이언스 및 공학 석박사 통합과정에 재학 중이며, 경성대학교에서 빅데이터 통계학과 경영학을 전공했습니다.',
    'about.p2': '저의 연구는 운영 연구(Operations Research)와 데이터 기반 최적화에 중점을 두고 있으며, 특히 경로 설정, 스케줄링, 제약 조건 하에서의 의사결정에 관심이 있습니다. 전통적인 최적화 방법과 머신러닝 및 대규모 언어 모델(LLM)을 결합하여 복잡한 산업 및 실제 문제를 해결하는 방법을 탐구하고 있습니다.',
    'about.p3': '통계 모델링을 위한 Python과 R, 그리고 SAS, SPSS 등의 도구 사용 경험이 있습니다. 마케팅과 경제학 배경은 기술적 업무를 보완하여 분석적 엄밀성과 비즈니스 맥락을 모두 갖춘 최적화 문제 접근을 가능하게 합니다.',
    'about.p4': '현재 CFA 프로그램을 통해 재무 분석 전문성을 확장하고 있으며, 물류, 금융 및 지능형 의사결정 시스템에서의 최적화와 데이터 사이언스 응용을 탐구하고 있습니다.',
    'about.p5': '최적화, AI, 실제 시스템의 교차점에서의 연구 및 협업 기회에 특히 관심이 있습니다.',

    // Education
    'edu.title': '학력',
    'edu.date1': '2026년 3월 \u2013 현재',
    'edu.degree1': '석박사 통합과정',
    'edu.field1': '산업 데이터 사이언스 및 공학',
    'edu.school1': '부경대학교 & 부산대학교 (공동학위)',
    'edu.detail1': 'TEAMLAB 연구원 (산업 AI 연구실)',
    'edu.date2': '2021년 3월 \u2013 2025년 2월',
    'edu.degree2': '복수학위',
    'edu.field2': '빅데이터 통계학 학사 & 경영학 학사',
    'edu.school2': '경성대학교',
    'edu.detail2': '누적 GPA: 3.9 / 4.5 (~8.7 / 10.0)',

    // Experience
    'exp.title': '경력',
    'exp.role1': '비즈니스 분석가 인턴',
    'exp.date1': '2025년 12월 \u2013 2026년 1월',
    'exp.task1a': 'Square, Thrive, Shopify에서 판매 데이터를 추출 및 통합하여 비즈니스 분석을 지원했습니다.',
    'exp.task1b': '성과를 모니터링하고 트렌드를 파악하기 위해 일일 및 주간 판매 보고서를 작성했습니다.',
    'exp.task1c': '이벤트별 판매 보고서를 작성하여 결과를 평가하고 의사결정을 지원했습니다.',
    'exp.role2': '비즈니스 마케팅 개발자',
    'exp.date2': '2024년 8월 \u2013 2025년 4월',
    'exp.task2a': '시장 조사를 수행하여 제품 출시를 위한 전략적 권장 사항을 개발하고 발표했습니다.',
    'exp.task2b': 'Medium 블로그를 관리하고 제품 홍보를 위한 콘텐츠 게시를 감독했습니다.',
    'exp.task2c': 'AWS와 CLI를 활용하여 제품 사용 데이터를 모니터링하고 성과를 추적했습니다.',
    'exp.role3': '데이터 분석가 인턴',
    'exp.date3': '2024년 3월 \u2013 2024년 6월',
    'exp.task3a': '인턴 그룹의 팀 리더로서 프로젝트 조정을 감독했습니다.',
    'exp.task3b': '판매 데이터를 분석하여 다양한 카테고리에서 가장 많이 판매된 제품을 파악했습니다.',
    'exp.task3c': '데이터를 활용하여 재고 수준을 최적화하고 품절 상황을 최소화했습니다.',
    'exp.task3d': 'Python을 사용하여 데이터 시각화를 위한 인터랙티브 대시보드를 처음부터 제작했습니다.',

    // Projects
    'proj.title': '프로젝트',
    'proj.tag1': '캡스톤',
    'proj.name1': 'Odyssey \u2013 지식으로의 여정을 설계하세요',
    'proj.desc1': '인터랙티브 학습 도구로서의 디지털 학습 플랫폼을 개발했습니다. 접근 가능하고 매력적인 교육 자료를 제공하기 위한 웹사이트를 설계하고 구현했습니다. 기능을 향상시키고 사용자 경험을 개선하기 위한 새로운 기능을 연구하고 개발했습니다.',
    'proj.link1': '발표 보기 \u2192',
    'proj.tag2': '데이터 분석',
    'proj.name2': '인도네시아 Z세대 실업 (2022)',
    'proj.desc2': '2022년 인도네시아 Z세대의 실업 상황을 조사하기 위해 실제 데이터셋을 분석했습니다. Looker Studio를 활용하여 데이터를 시각화하는 인터랙티브 대시보드를 제작했습니다.',
    'proj.link2': '대시보드 보기 \u2192',
    'proj.tag3': '시장조사',
    'proj.name3': '고객 만족도 \u2013 부산의 라네즈',
    'proj.desc3': '부산에서 라네즈 브랜드의 고객 만족도에 영향을 미치는 요인을 분석했습니다. 가장 중요한 요인을 찾기 위해 데이터 수집, 시각화 및 분석을 수행했습니다.',
    'proj.link3': '보고서 보기 \u2192',
    'proj.tag4': '언어 학습',
    'proj.name4': 'TOPIK 플래시카드',
    'proj.desc4': 'TOPIK(한국어능력시험) 대비를 위한 한국어 어휘 학습용 인터랙티브 플래시카드 웹 애플리케이션을 개발했습니다. 다양한 학습 모드, 검색 기능, 플립 애니메이션, 진행 상황 추적 기능을 단일 HTML5 페이지에 구현했습니다.',
    'proj.link4': '체험하기 \u2192',
    'proj.tag5': 'AI & 금융',
    'proj.name5': 'Neuro-Trader',
    'proj.desc5': '인도네시아 주식시장(IHSG)을 위한 멀티 에이전트 AI 트레이딩 리서치 플랫폼을 개발했습니다. 기술적 분석, 펀더멘털 분석, 뉴스 감성 분석, 멀티 에이전트 토론을 결합하여 매매 추천을 생성합니다. FastAPI, Next.js, OpenAI로 구축했습니다.',
    'proj.link5': 'GitHub에서 보기 \u2192',

    // Skills
    'skills.title': '기술',
    'skills.languages': '언어',
    'skills.langcerts': '어학 자격증',
    'skills.technical': '기술 역량',
    'skills.soft': '소프트 스킬',

    // Certifications
    'cert.title': '자격증 & 수상',
    'cert.awards': '수상',
    'cert.certs': '자격증',

    // Organizations
    'org.title': '단체 활동',
    'org.name1': 'MIKY \u2013 회원',
    'org.desc1': '경성대학교 인도네시아 학생 커뮤니티의 활동 회원. 커뮤니티 내에서 원활한 소통과 긍정적인 관계를 구축했습니다.',
    'org.name2': 'KKIB \u2013 리더',
    'org.desc2': '부산 인도네시아 가톨릭 교회 커뮤니티의 리더. 한국에서 인도네시아어 미사의 조직 및 기획에 참여하여 커뮤니티를 위한 의미 있는 종교 경험을 보장했습니다.',

    // Contact
    'contact.title': '연락하기',
    'contact.text': '저는 성장하고 의미 있는 영향을 만들 수 있는 협업, 연구 기회 및 전문적인 경험에 열려 있습니다.',

    // Footer
    'footer.text': '\u00A9 2026 Josepha Michiko Leo. All rights reserved.',
  }
};

// Store original English text
const originalTexts = {};

document.querySelectorAll('[data-i18n]').forEach(el => {
  originalTexts[el.getAttribute('data-i18n')] = el.innerHTML;
});

let currentLang = 'en';

const langToggle = document.getElementById('langToggle');
const langToggleText = langToggle.querySelector('.lang-toggle-text');

langToggle.addEventListener('click', () => {
  if (currentLang === 'en') {
    currentLang = 'ko';
    langToggle.classList.add('active');
    langToggleText.textContent = 'EN';
    langToggle.setAttribute('aria-label', 'Translate to English');
  } else {
    currentLang = 'en';
    langToggle.classList.remove('active');
    langToggleText.textContent = 'KO';
    langToggle.setAttribute('aria-label', 'Translate to Korean');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (currentLang === 'ko' && translations.ko[key]) {
      el.innerHTML = translations.ko[key];
    } else {
      el.innerHTML = originalTexts[key];
    }
  });

  document.documentElement.lang = currentLang;
});
