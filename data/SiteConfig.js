const config = {
  siteTitle: 'مدونة توتومينا',
  siteTitleShort: 'مدونة توتومينا',
  siteTitleAlt: 'مدونة توتومينا',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.tutomena.com',
  repo: 'https://github.com/aissa-bouguern/tutomena.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'في مدونة توتومينا ننشر كل ما له علاقة بأحدث تقنيات تطوير الويب، ونولي اهتماما خاصا للغة البرمجة جافاسكريبت. مقالاتنا تتسم بأسلوب سلس وسهل حتى على المبتدئين.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-60278591-1',
  postDefaultCategoryID: 'تقنية',
  userName: 'عيسى',
  userEmail: 'contact@tutomena.com',
  userTwitter: 'tutomena',
  gatsby_disqus_name: 'tutomena',
  menuLinks: [
    {
      name: 'عن توتومينا ؟',
      link: '/about-us/',
    },
    {
      name: 'المنشورات',
      link: '/blog/',
    },
    {
      name: 'اتصل بنا',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
  patreonPageUrl: 'https://www.patreon.com/tutomena',
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
