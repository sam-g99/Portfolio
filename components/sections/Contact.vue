<template>
  <footer id="contact">
    <h2>
      Want to get in touch?
    </h2>
    <p>I'm always ready for a new challenge</p>
    <a ref="contact" href="mailto:samuel.graham099dev@gmail.com">Email Me</a>
    <p class="copyright">©{{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  position: relative;
  text-align: center;
  h2 {
    color: white;
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    color: rgb(199, 199, 199);
    margin-bottom: 28px;
    font-style: italic;
  }

  a {
    cursor: pointer;
    color: $green;
    font-size: 30px;
    font-weight: 100;
    transition: 0.1s;

    &:hover {
      transform: scale(1.1);
    }
  }
  .copyright {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
}
</style>
