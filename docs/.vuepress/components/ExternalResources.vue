<style scoped>
    @media (max-width: 450px) {
      #external-resources {
        display: none;
      }
    }
    #external-resources {
      position: fixed;
      right: 0;
      bottom: 0;
      padding: 1em;
      background: #fbfbff;
    }
    h2 {
      font-size: 1em;
      margin: 0;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    a {
      display: block;
    }
    a:hover {
      text-decoration: underline;
      text-decoration-color: #dc6299;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
    li {
      font-size: .7em;
    }
</style>

<template>
<aside id="external-resources">
  <h2>External goodies 🥰</h2>
  <ul>
    <li><a href="https://austingil.com/how-to-build-html-forms-right-semantics" target="_blank" rel="noopener noreferrer">Build Html Forms Right</a> By Austin Gil</li>
    <li><a href="https://bhagesh.tech/trick-to-write-css-and-html-100x-faster" target="_blank" rel="noopener noreferrer">Emmet cheatcheet</a> By Bhagesh Hunakunti</li>
    <li><a href="https://modern-web.dev" target="_blank" rel="noopener noreferrer" class="repo-link">Modern web</a>By modernweb-dev</li>
  </ul>
</aside>
</template>

<script>
export default {
    computed: {
        
    },
    methods: {
        
    }
}
</script>
