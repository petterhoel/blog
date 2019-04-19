const feed_options = {
    canonical_base: 'https://bitsnpixels.io',
};

const analytics_info = {
    'ga': 'UA-135025003-1'
}
const updated_transformer = {
    transformer: (timestamp, lang) => {
        const moment = require('moment');
        moment.locale(lang);
        return moment(timestamp).fromNow();
    }
}

module.exports = {
    title: "Bits && Pixels",
    description: 'Tiny snippet reminders for a dev',
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
        [ '@vuepress/pwa'],
        [ '@vuepress/google-analytics', analytics_info ],
        [ '@vuepress/last-updated', updated_transformer ],
        [ 'feed', feed_options ],
    ]
  };
