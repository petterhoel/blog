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

const theme_color = '#d4d8e6';

module.exports = {
    title: "Bits && Pixels",
    description: 'Tiny snippet reminders for a developer.',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/touch/icon.png' }],
        ['link', { rel: 'mainfest', href: '/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: theme_color }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/images/touch/icon152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/images/touch/transparent.svg', color: theme_color }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/images/touch/icon144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: theme_color }],
    ],
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'What\'s this?', link: '/about/' },
        ],
        repo: 'petterhoel/blog',
        lastUpdated: 'Last updated',
    },
    plugins: [
        '@vuepress/blog',
        [ '@vuepress/pwa'],
        [ '@vuepress/google-analytics', analytics_info ],
        [ '@vuepress/last-updated', updated_transformer ],
        [ 'feed', feed_options ],
    ]
  };
