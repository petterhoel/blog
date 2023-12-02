<style scoped>
    h2 {
        margin-bottom: 0;
        margin-top: 32px;
    }
    .published {
        font-size: .7em;
    }
    p {
        line-height: 1.2;
        margin: 10px 0;
    }
    .readme {
        text-transform: uppercase;
        font-size: .7em;
    }
</style>

<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        <span class="published">Published {{formatDate(post.frontmatter.date)}}</span>
        <p>{{ post.frontmatter.description }}</p>
        <p>
            <router-link :to="post.path" class="link">
                <a class="readme">readme</a>
            </router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
    methods: {
        formatDate(date) {
        date = new Date(date);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }
    }
}
</script>
