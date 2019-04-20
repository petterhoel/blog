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
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#fbfbff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: '#fbfbff' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/images/touch/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/images/touch/icon.svg', color: theme_color }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/images/touch/icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: theme_color }],
    ],
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'What\'s this?', link: '/about/' },
        ],
        logo: '/assets/images/touch/icon.svg',
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
