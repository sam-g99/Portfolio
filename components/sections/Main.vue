<template>
  <main ref="main">
    <div ref="name" class="greeting" data-tilt-full-page-listening>
      <h1>Samuel Graham</h1>
      <p>Your friendly earthling web developer.</p>
      <Nav />
    </div>
    <div
      v-tooltip="{
        content: 'My Github',
        placement: 'left',
        classes: ['info'],
        targetClasses: ['it-has-a-tooltip'],
        offset: 10,
        delay: { show: 300, hide: 100 },
      }"
      class="github-area"
    >
      <a
        href="http://github.com/sam-g99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="~/assets/images/github.svg" />
      </a>
    </div>
  </main>
</template>

<script>
import tilt from 'vanilla-tilt';

import Nav from './Nav';

export default {
  components: { Nav },
  mounted() {
    // eslint-disable-next-line new-cap
    // const scroll = new this.locomotiveScroll({
    //   el: this.$refs.main,
    //   smooth: true,
    // });
    // console.log(scroll);
    // eslint-disable-next-line no-undef
    VANTA.FOG({
      el: this.$refs.main,
      highlightColor: 0x525252,
      midtoneColor: 0x484848,
      lowlightColor: 0x1e1e1e,
      baseColor: 0x161616,
    });
    tilt.init(this.$refs.name, {
      max: 15,
      speed: 100,
    });
  },
};
</script>

<style lang="scss" scoped>
main {
  align-items: center;
  background: $lightDark;
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;
  .greeting {
    align-items: center;
    display: flex;
    flex-flow: column;
  }
  h1 {
    animation: title 0.8s linear 0.3s 1 forwards;
    color: white;
    font-size: 90px;
    opacity: 0;
    text-shadow: 0px 1px 0px rgba(20, 20, 20, 0.75);
    transform: translateY(-10px);
    cursor: default;

    @include breakpoint-max(870) {
      font-size: 70px;
    }
    @include breakpoint-max(600) {
      font-size: 13vw;
    }
  }

  p {
    animation: subtitle 0.2s linear 0.8s 1 forwards;
    color: #b5b5b5;
    font-size: 30px;
    font-style: italic;
    font-weight: 400;
    margin-top: 10px;
    opacity: 0;
    text-align: center;
    transform: skewX(10deg);
    cursor: default;
    @include breakpoint-max(870) {
      font-size: 25px;
    }
    @include breakpoint-max(600) {
      font-size: 5vw;
    }
  }
  .github-area {
    animation: github 0.2s linear 1s 1 forwards;
    bottom: 20px;
    position: absolute;
    right: 20px;
    transform: translateX(100px);
    img {
      transition-duration: 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        transform: scale(1);
      }
    }
  }
}

// animations
@keyframes title {
  from {
    color: white;
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    color: $blue;
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtitle {
  from {
    opacity: 0;
    transform: skewX(10deg);
  }
  to {
    opacity: 1;
    transform: skewX(0deg);
  }
}

@keyframes github {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

<style lang="scss">
.tooltip {
  // ...

  &.info {
    $color: rgba(rgb(255, 255, 255), 0.9);

    .tooltip-inner {
      background: $color;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
      color: black;
      max-width: 250px;
      padding: 15px;
    }

    .tooltip-arrow {
      border-color: $color;
    }
  }
  // &[aria-hidden='true'] {
  //   visibility: hidden;
  //   opacity: 0;
  //   transition: opacity 0.5s, visibility 0.5s;
  // }

  // &[aria-hidden='false'] {
  //   visibility: visible;
  //   opacity: 1;
  //   transition: opacity 0.5s;
  // }
}
</style>
