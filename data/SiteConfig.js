const config = {
  siteTitle: 'مجتمع روف',
  siteTitleShort: 'مجتمع روف',
  siteTitleAlt: 'مجتمع روف',
  siteLogo: '/logos/logo-1024.png.png',
  siteUrl: 'https://www.roovhost.com',
  repo: 'https://github.com/aissa-bouguern/tutomena.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'معاً نحقق مجتمع تقني واعد ومزدحم بالمعرفة وبلغة عربية لكل مواطن ينطق بالعربية ، نحن هنا لنبني مسار جديد يوجه الجميع لنجاح',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-60278591-1',
  postDefaultCategoryID: 'تقنية',
  userName: 'عبدالرحمن',
  userEmail: 'admin@roovhost.com',
  userTwitter: 'roov_sa',
  gatsby_disqus_name: 'aissa',
  menuLinks: [
    {
      name: 'عن روف ؟',
      link: '/about-us/'
    },
    {
      name: 'المنشورات',
      link: '/blog/'
    },
    {
      name: 'اتصل بنا',
      link: '/contact/'
    }
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff'
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
