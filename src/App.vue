<template>
  <div id="app">
    <app-github-corner />
    <LocaleSwitcher/>
    <main>
      <section class="a">
        <h1>Array Explorer</h1>
        <p class="subtitle"><em>Find the array method you need without digging through the docs</em></p>
        <app-method-primary />
      </section>
      <section class="b">
        <h3 class="usage">Usage</h3>
        <app-code />
      </section>
    </main>
  </div>
</template>

<script>
import AppMethodPrimary from './components/AppMethodPrimary'
import AppGithubCorner from './components/AppGithubCorner'
import AppCode from './components/AppCode'
import LocaleSwitcher from './components/LocaleSwitcher'

export default {
  components: {
    AppMethodPrimary,
    AppGithubCorner,
    AppCode,
    LocaleSwitcher
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  color: #2c3e50;
  background: #f6f7f7;
}

@font-face {
  font-family: 'Gill Sans W04 Book';
  src: url('./assets/Fonts/c4be5717-c19c-43a5-9ad3-b548ddf070d4.eot?#iefix');
  src: url('./assets/Fonts/c4be5717-c19c-43a5-9ad3-b548ddf070d4.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/4bfd13a9-3195-4d8f-87a9-83a212d18b16.woff2')
      format('woff2'),
    url('./assets/Fonts/63aa9f40-04be-453a-a672-aa8f9919115d.woff')
      format('woff'),
    url('./assets/Fonts/a82a5fb6-ad03-4675-801e-d3182a58ff5f.ttf')
      format('truetype'),
    url('./assets/Fonts/beb2cee2-1a51-44ca-848f-4f795394ee5a.svg#beb2cee2-1a51-44ca-848f-4f795394ee5a')
      format('svg');
}
@font-face {
  font-family: 'GillSansW01-MediumItali';
  src: url('./assets/Fonts/1f6af904-724d-4f75-b836-51c3d674a37e.eot?#iefix');
  src: url('./assets/Fonts/1f6af904-724d-4f75-b836-51c3d674a37e.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/b01b8a8a-cb45-4c4e-b2bb-e5b8853e6fe6.woff2')
      format('woff2'),
    url('./assets/Fonts/3e18b964-7a6f-4828-8e18-5cc698e1051f.woff')
      format('woff'),
    url('./assets/Fonts/a7622e06-0cde-414a-a25d-5e5f6f5bfcaa.ttf')
      format('truetype'),
    url('./assets/Fonts/ca4569d2-e4c3-4dec-8bfe-52712ef6bc31.svg#ca4569d2-e4c3-4dec-8bfe-52712ef6bc31')
      format('svg');
}
@font-face {
  font-family: 'Gill Sans W01 Bold';
  src: url('./assets/Fonts/1a6dec8e-26f9-4243-8495-835709538f92.eot?#iefix');
  src: url('./assets/Fonts/1a6dec8e-26f9-4243-8495-835709538f92.eot?#iefix')
      format('eot'),
    url('./assets/Fonts/2029e71f-067d-46a8-bc44-b5c64a258928.woff2')
      format('woff2'),
    url('./assets/Fonts/f05272f9-83e3-4de6-8423-5d57f730c87b.woff')
      format('woff'),
    url('./assets/Fonts/33f5d8d9-105f-4a49-9351-74ecae7f4a49.ttf')
      format('truetype'),
    url('./assets/Fonts/b56150eb-5caa-4385-b907-373e97ddb2ff.svg#b56150eb-5caa-4385-b907-373e97ddb2ff')
      format('svg');
}

#app {
  font-family: 'Gill Sans W04 Book', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 19px;
  letter-spacing: 0.005em;
}

select,
option {
  font-family: 'Gill Sans W04 Book', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

select:focus,
a:focus {
  outline: 1px dashed #ccc;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Gill Sans W01 Bold', Helvetica, Arial, sans-serif;
}

em {
  font-family: 'GillSansW01-MediumItali', Helvetica, Arial, sans-serif;
  font-style: normal;
  letter-spacing: -0.01em;
}

h1 {
  margin-bottom: 0;
}

.subtitle {
  color: #d86f5a;
  margin-top: 0;
}

a,
a:visited,
a:active {
  color: #d86f5a;
  text-decoration: none;
}

/* -- grid -- */
body {
  margin: 40px;
}

main {
  width: 90%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(500px, auto);
}

@media screen and (max-width: 850px) {
  main {
    grid-template-columns: 1fr;
  }
}

.usage {
  margin: 35px 0 0;
}
</style>
