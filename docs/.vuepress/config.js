module.exports = {
    title: "bits && pixels",
    description: 'Tiny snippet reminders',
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'What\'s this?', link: '/about/' },
        ],
        repo: 'petterhoel/blog',
        lastUpdated: 'Last Updated',
    },
    plugins: [
        '@vuepress/blog',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-135025003-1'
            }
        ],
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment');
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                }
            }
        ],
    ]
  }
