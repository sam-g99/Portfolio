<template>
  <section id="intro">
    <div class="content">
      <h3>About Me</h3>
      <p>
        I am always in awe of the web. How accessible it is and how open it can
        be. I want to be a part of its ever changing ways in any way that I can
        be.
        <span id="highlight"
          >I have a passion for many areas in web development including but not
          limited to ui/ux, front-end, and backend development.</span
        >
        I learn whatever let’s me bring out my creativity the most.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const highlight = document.getElementById('highlight');
    const el = document.getElementById('intro');
    const scrollEvent = () => {
      const defaultGrayscale = 100;
      const percentageScrolled =
        window.pageYOffset / (el.getBoundingClientRect().top - 200);
      const skillImages = document.querySelectorAll('.skill-image');
      highlight.style.filter = `grayscale(${defaultGrayscale -
        percentageScrolled}%)`;

      if (percentageScrolled <= 0) {
        highlight.style.filter = `grayscale(0%)`;
        return;
      }
      skillImages.forEach((e) => {
        e.style.filter = `grayscale(${defaultGrayscale - percentageScrolled}%)`;
      });
    };
    scrollEvent();
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
  padding-top: 20px;
  padding-bottom: 50px;
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
        color: #96b9ed;
        filter: grayscale(1);
        transition: filter 0.2s;
      }
    }
  }
}
</style>
