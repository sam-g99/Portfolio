<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>
<style>
html {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  background: #232323;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #0e0e0e;
}
* {
  scrollbar-color: rgb(14, 14, 14) #424242;
  scrollbar-width: 2px;
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #424242;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(14, 14, 14);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 12, 12);
}
h3 {
  color: #eaeaea;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}
</style>
