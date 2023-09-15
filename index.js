var btn = document.getElementById("dark-theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "./style.css";
    let darkTheme = "./dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);
}

const languageButton = document.getElementById('languageButton');
let currentLanguage = 'RU';

languageButton.addEventListener('click', () => {
    if (currentLanguage === 'RU') {
        document.documentElement.lang = 'ru';
        currentLanguage = 'EN';
    } else {
        document.documentElement.lang = 'en';
        currentLanguage = 'RU';
    }
    languageButton.textContent = currentLanguage;
});

const links = document.getElementById('languageButton');
let language = localStorage.getItem('currentLanguage') || 'ru';

links.addEventListener('click', function (event) {
    event.preventDefault();
    language = language === 'ru' ? 'en' : 'ru';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}

const i18n = {
    'en': {
        'navHome': 'Brella',
        'navOurPlan': 'Our Plan',
        'navEmployers': 'Employers',
        'navBrokers': 'Brokers',
        'navMembers': 'Members',
        'navAbout': 'About',
        'navBlog': 'Blog',
        'navRequestDemo': 'Request a demo',
        'navLogin': 'Login',
        'navLanguageButton': 'RU',
        'mainHeader': 'Give your team peace of mind with supplemental health insurance from Brella.',
        'mainParagraph': 'I\'m wondering...',
        'mainEmailPlaceholder': 'how Brella\'s plan works',
        'mainFindOut': 'Find out',
        'Morecoverage': 'More coverage',
        'MorecoverageDesc': 'Brella covers 13,000+ injuries and illnesses from concussions to cancer',
        'Fasterbenefits': 'Faster benefits',
        'FasterbenefitsDesc': 'One easy-to-manage plan with paperless install and online admin tools',
        'Lesshassle': 'Less hassle',
        'LesshassleDesc': 'Brella pays claims in hours–not weeks so your people can rest easy',
        'WhyBrella': 'Why Brella?',
        'HealthInsuranceDeductible': 'Today, any health insurance deductible can feel like a high deductible.',
        'HealthBenefitStrategy': "Brella's supplemental health plan enhances your health benefit strategy to ensure that health hardships don't become financial burdens.",
        'Seeourplan': 'See our plan',
        'BrellaBrings': 'brella brings',
        'Customizablebenefits': 'Customizable benefits',
        'Paperlessinstalladmin': 'Paperless install & admin',
        'Effortlessenrollment': 'Effortless enrollment',
        'Easyclaimsexperience': 'Easy claims experience',
        'Fastbenefitpayouts': 'Fast benefit payouts',
        'Conciergesupport': 'Concierge support',
        'BrellaPlanBenefits': 'Every Brella plan comes with a benefit for Moderate, Severe, and Catastrophic conditions. Employees can select the payout amounts that fit their needs and their budget.',
        'EmployersCanFund': 'Employers can fund part or all of the premiums—or offer Brella as a voluntary benefit. The choice is up to you.',
        'Oneplanmorecoverage': 'one plan, more coverage',
        'Noonecanpredict': 'No one can predict which health issues might come their way.',
        'SupplementalCoverage': "Our broad supplemental coverage gets rid of the guesswork and puts cash in your team’s pockets for most conditions that require urgent medical attention.",
        'CoveredInjuriesIllnesses': '5K',
        'FracturesAppendicitis': 'covered injuries and illnesses from fractures and appendicitis to cancer',
        'MoreCoveredConditions': '1X',
        'AccidentCriticalIllness': 'more covered conditions than Accident and Critical Illness plans—combined',
        'GuaranteedIssue': '40%',
        'NoMedicalUnderwriting': 'plans are 100% guaranteed issue. No medical underwriting required',
        'ZeroLimitations': '0',
        'NoLimitationsExclusions': 'Zero limitations or exclusions for pre-existing conditions',
        'BetterClaimsExperience': 'a better claims experience',
        'PlanPaysInHours': 'Give your people a plan that pays in hours—not weeks.',
        'FileAClaimSooner': 'Your team can’t wait for peace of mind. Brella pays on diagnosis, so members can file a claim sooner and get paid faster via our Member Portal or mobile app.',
        'PlayVideo': 'Play Video',
        'bg': 'bg',
        'forEmployers': 'for employers',
        'easyEnrollment': 'Easy enrollment meets simple administration.',
        'paperlessImplementation': 'Brella brings 100% paperless implementation, enrollment, and admin. Plug into our platforms or we’ll plug into yours.',
        'learnMore': 'Learn more',
        'proudlyBacked': 'Proudly backed by',
        'podcast': 'Podcast',
        'betterVoluntaryBenefits': 'Better Voluntary Benefits with NFP Voluntary Benefits Practice Leader, Kim Heald',
        'insuranceInnovation': 'Insurance Innovation',
        'designSimplerInsurance': 'How to Design Simpler Insurance Benefits',
        'benefitsStrategy': 'Benefits Strategy',
        'executiveBenefitsOutlook': 'Executive Benefits Outlook with Dan Aceti',
        'exploreSolution': 'Ready to explore Brella’s supplemental health solution?',
        'letsTalk': 'Let’s talk.',
        'getInTouch': 'Get In Touch',
        'footerLogo': 'Brella',
        'joinBrella': 'Join Brella',
        'ourPlan': 'Our Plan',
        'employers': 'Employers',
        'brokers': 'Brokers',
        'members': 'Members',
        'company': 'Company',
        'about': 'About',
        'blog': 'Blog',
        'careers': 'Careers',
        'contact': 'Contact',
        'latest': 'Get the latest',
        'latestText': 'Sign up to receive benefits news and insights in your inbox once a month.',
        'subscribeLink': 'Subscribe',
        'footerText1': 'Brella is a limited benefit policy; it is not a substitute for health insurance. The information provided on this website is illustrative only. A complete description of benefits, limitations, and exclusions are provided in your certificate of Insurance and applicable Riders. For a summary of limitations and exclusions, see our FAQ. Payout values listed do not guarantee an amount to be paid for listed conditions. Product not available in all states. All coverage is subject to the terms and conditions of the master group policy.',
        'footerText2': 'Brella is underwritten by Greenhouse Life Insurance Company (NAIC 80055). Form No. PFSB11-TX',
        'footerText3': 'Reach us by mail at 2093 Philadelphia Pike #2496, Claymont, DE 19703 and by phone at (844) 987-1070',
        'copyrightText': '© 2021 Brella Insurance Inc. All Rights Reserved.',
        'privacyLink': 'Privacy',
        'termsLink': 'Terms of Service'
    },
    'ru': {
        'navHome': 'Brella',
        'navOurPlan': 'Наш план',
        'navEmployers': 'Работодатели',
        'navBrokers': 'Брокеры',
        'navMembers': 'Члены',
        'navAbout': 'О нас',
        'navBlog': 'Блог',
        'navRequestDemo': 'Запросить демонстрацию',
        'navLogin': 'Вход',
        'navLanguageButton': 'RU',
        'mainHeader': 'Предоставьте вашей команде покой с дополнительным медицинским страхованием от Brella.',
        'mainParagraph': 'Мне интересно...',
        'mainEmailPlaceholder': 'как работает план Brella',
        'mainFindOut': 'Узнать больше',
        'Morecoverage': 'Больше покрытия',
        'MorecoverageDesc': 'Brella охватывает 13 000+ травм и заболеваний, от сотрясений до рака',
        'Fasterbenefits': 'Быстрые выплаты',
        'FasterbenefitsDesc': 'Один легкоуправляемый план с бесбумажной установкой и онлайн-административными инструментами',
        'Lesshassle': 'Меньше хлопот',
        'LesshassleDesc': 'Brella выплачивает средства в течение часов, а не недель, так что ваши сотрудники могут спать спокойно',
        'WhyBrella': 'Почему Brella?',
        'HealthInsuranceDeductible': 'Сегодня любой страховой дедакт может показаться высоким дедактом.',
        'HealthBenefitStrategy': "Супердополнительная страховая программа Brella улучшает вашу стратегию по обеспечению здоровья, чтобы обеспечить, что здоровотрудности не становятся финансовыми бременами.",
        'Seeourplan': 'Посмотреть наш план',
        'BrellaBrings': 'Brella предлагает',
        'Customizablebenefits': 'Настроенные преимущества',
        'Paperlessinstalladmin': 'Установка и администрирование без бумажной документации',
        'Effortlessenrollment': 'Безуслоный процесс регистрации',
        'Easyclaimsexperience': 'Простой опыт подачи заявок',
        'Fastbenefitpayouts': 'Быстрые выплаты',
        'Conciergesupport': 'Поддержка консьержа',
        'BrellaPlanBenefits': 'Каждый план Brella поставляется с пользой для умеренных, тяжелых и катастрофических состояний. Сотрудники могут выбрать суммы выплат, соответствующие их потребностям и бюджету.',
        'EmployersCanFund': 'Работодатели могут финансировать часть или все страховые взносы — или предлагать Brella как добровольное поощрение. Выбор за вами.',
        'Oneplanmorecoverage': 'Один план, больше покрытия',
        'Noonecanpredict': 'Никто не может предсказать, с какими здоровотрудностями они столкнутся.',
        'SupplementalCoverage': "Наше широкое супердополнительное покрытие избавляет от догадок и кладет деньги в карманы вашей команды для большинства состояний, требующих срочной медицинской помощи.",
        'CoveredInjuriesIllnesses': '5K',
        'FracturesAppendicitis': 'покрытые травмы и заболевания от переломов и аппендицита до рака',
        'MoreCoveredConditions': '1X',
        'AccidentCriticalIllness': 'больше покрытых состояний, чем в планах по несчастным случаям и критическим заболеваниям — в совокупности',
        'GuaranteedIssue': '40%',
        'NoMedicalUnderwriting': '100% гарантированный выпуск планов. Не требуется медицинское страхование',
        'ZeroLimitations': '0',
        'NoLimitationsExclusions': 'Нулевые ограничения или исключения для предварительных состояний',
        'BetterClaimsExperience': 'Лучший опыт подачи заявок',
        'PlanPaysInHours': 'Предоставьте своей команде план, который выплачивает в течение часов, а не недель.',
        'FileAClaimSooner': 'Вашей команде не терпится получить душевное спокойствие. Brella выплачивает средства при диагнозе, поэтому участники могут подать заявку раньше и получить выплату быстрее через наш Портал участника или мобильное приложение.',
        'PlayVideo': 'Смотреть видео',
        'bg': 'Фон',
        'forEmployers': 'для работодателей',
        'easyEnrollment': 'Простая регистрация встречает простое управление.',
        'paperlessImplementation': 'Brella предлагает 100% безбумажную реализацию, регистрацию и администрирование. Подключитесь к нашим платформам или мы подключимся к вашим.',
        'learnMore': 'Узнать больше',
        'proudlyBacked': 'С гордостью поддерживается',
        'podcast': 'Подкаст',
        'betterVoluntaryBenefits': 'Лучшие добровольные бенефиты с лидером практики добровольных бенефитов NFP, Ким Хилд',
        'insuranceInnovation': 'Инновации в страховании',
        'designSimplerInsurance': 'Как разработать более простые страховые бенефиты',
        'benefitsStrategy': 'Стратегия бенефитов',
        'executiveBenefitsOutlook': 'Прогноз исполнительных бенефитов с Дэном Асети',
        'exploreSolution': 'Готовы исследовать дополнительное здоровье Brella?',
        'letsTalk': 'Давайте поговорим.',
        'getInTouch': 'Свяжитесь с нами',
        'footerLogo': 'Брелла',
        'joinBrella': 'Присоединиться к Brella',
        'ourPlan': 'Наш план',
        'employers': 'Работодатели',
        'brokers': 'Брокеры',
        'members': 'Участники',
        'company': 'Компания',
        'about': 'О нас',
        'blog': 'Блог',
        'careers': 'Карьера',
        'contact': 'Контакты',
        'latest': 'Получить последние новости',
        'latestText': 'Подпишитесь, чтобы получать новости и аналитику по льготам в вашем почтовом ящике раз в месяц.',
        'subscribeLink': 'Подписаться',
        'footerText1': 'Brella - это полис ограниченного объема услуг; он не заменяет медицинскую страховку. Информация, предоставленная на этом веб-сайте, имеет иллюстративный характер. Полное описание льгот, ограничений и исключений предоставляется в вашем сертификате страхования и соответствующих дополнительных условиях. Для краткого описания ограничений и исключений см. наш раздел FAQ. Указанные суммы выплат не гарантируют определенную выплату по перечисленным заболеваниям. Продукт недоступен во всех штатах. Вся страховка подчиняется условиям и положениям мастер-групповой полис.',
        'footerText2': 'Brella страхуется Greenhouse Life Insurance Company (NAIC 80055). Форма № PFSB11-TX',
        'footerText3': 'Свяжитесь с нами по адресу: 2093 Philadelphia Pike #2496, Клеймонт, штат Делавэр, 19703, и по телефону: (844) 987-1070',
        'copyrightText': '© 2021 Brella Insurance Inc. Все права защищены.',
        'privacyLink': 'Конфиденциальность',
        'termsLink': 'Условия использования'
    }
};