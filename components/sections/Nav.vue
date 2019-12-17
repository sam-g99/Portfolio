<template>
  <div class="nav">
    <li @click="scrollTo('#intro')">Intro</li>
    <li @click="scrollTo('#skills')">Skills</li>
    <li @click="scrollTo('#projects')">Projects</li>
    <li @click="scrollTo('#contact')">Contact</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lms: null,
    };
  },
  mounted() {
    // eslint-disable-next-line new-cap
    this.lms = new this.locomotiveScroll();
  },
  methods: {
    scrollTo(id) {
      const target = document.querySelector(id);
      this.lms.scrollTo(target);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 70px;
  list-style-type: none;
  display: flex;
  @include breakpoint-max(890) {
    flex-flow: column;
    text-align: center;
  }
  @include breakpoint-max(600) {
    flex-flow: column;
    text-align: center;
    margin-top: 15px;
  }
  li {
    color: #eaeaea;
    font-weight: 300;
    font-size: 30px;
    margin-right: 60px;
    transition-duration: 0.2s;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    &:last-of-type {
      margin-right: 0px;
    }

    &:hover {
      color: #80e3b7;
    }
    @include breakpoint-max(890) {
      margin: 0;
    }
  }
}
</style>
