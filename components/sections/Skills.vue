<template>
  <section id="skills">
    <div class="content">
      <h3>My Skills</h3>
      <p class="main">
        I’m always learning something new or expanding my knowledge in an area
        I’m already well aquainted with.
        <span id="highlightText"
          >That’s what I love about web development, new things to learn
          everyday and improve upon.</span
        >
        Here are a few of the things I’m most familiar with.
      </p>

      <div class="skills-container">
        <div v-for="skill in skills" :key="skill.text" class="skill">
          <img
            :src="require(`@/assets/images/skills/${skill.svg}.svg`)"
            :alt="`${skill.text} logo`"
            class="skill-image"
          />
          <p>{{ skill.text }}</p>
        </div>
      </div>

      <p class="future">
        For the future I plan to look into Rust, Golang, and Webgl/Threejs.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { text: 'HTML', svg: 'html' },
        { text: 'CSS', svg: 'css' },
        { text: 'JavaScript', svg: 'javascript' },
        { text: 'Sass/SCSS', svg: 'sass' },
        { text: 'Vue', svg: 'vue' },
        { text: 'Nuxt', svg: 'nuxt' },
        { text: 'React', svg: 'react' },
        { text: 'NodeJS', svg: 'nodejs' },
        { text: 'Socket.io', svg: 'socket' },
        { text: 'Postgress', svg: 'postgres' },
        { text: 'WebRTC', svg: 'webrtc' },
        { text: 'MongoDB', svg: 'mongodb' },
        { text: 'Digital Ocean', svg: 'digitalocean' },
      ],
    };
  },
  mounted() {
    const el = document.getElementById('skills');
    const highlightText = document.getElementById('highlightText');

    const scrollEvent = () => {
      const defaultGrayscale = 100;
      const percentageScrolled =
        window.pageYOffset / (el.getBoundingClientRect().top - 200);
      const skillImages = document.querySelectorAll('.skill-image');
      highlightText.style.filter = `grayscale(${defaultGrayscale -
        percentageScrolled}%)`;

      if (percentageScrolled <= 0) {
        highlightText.style.filter = `grayscale(0%)`;

        skillImages.forEach((e) => {
          e.style.filter = `grayscale(0%)`;
        });
        return;
      }
      skillImages.forEach((e) => {
        e.style.filter = `grayscale(${defaultGrayscale - percentageScrolled}%)`;
      });
    };

    document.addEventListener('scroll', scrollEvent);
  },
};
</script>

<style lang="scss" scoped>
section {
  align-items: center;
  background: #232323;
  display: flex;
  flex-flow: column;
  padding-bottom: 100px;
  padding-top: 20px;
  .content {
    width: 80%;
    max-width: 1150px;
    h3 {
      color: #eaeaea;
      font-size: 30px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    p {
      color: #c5c5c5;
      font-size: 25px;
      font-weight: 300;

      span {
        color: #80e9ba;
        filter: grayscale(1);
        transition: filter 0.2s;
      }
    }
    .main {
      margin-bottom: 30px;
    }
  }
  .skills-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);

    @include breakpoint-max(875) {
      grid-template-columns: repeat(3, 1fr);
    }
    @include breakpoint-max(655) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-max(391) {
      grid-template-columns: repeat(1, 1fr);
    }
    div {
      align-items: center;
      background: #2b2b2b;
      border-radius: 5px;
      display: flex;
      flex-flow: column;
      padding: 10px;
    }
    p {
      margin-top: 10px;
      font-size: 25px;
      @include breakpoint-max(655) {
        font-size: 22px;
      }
    }
    img {
      filter: grayscale(100%);
      transition: filter 0.2s;
      height: 90px;
      width: 90px;
    }
  }
  .future {
    margin-top: 20px;
  }
}
</style>
