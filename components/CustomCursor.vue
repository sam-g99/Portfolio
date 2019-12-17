<template>
  <div ref="cursor" class="cursor">
    <div ref="dot" class="dot"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let clientX = -100;
    let clientY = -100;
    document.addEventListener('mousemove', (e) => {
      clientX = e.clientX;
      clientY = e.clientY;
      this.$refs.cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
    document.addEventListener('mouseleave', (e) => {
      this.$refs.cursor.classList.add('hide');
    });
    document.addEventListener('mouseenter', (e) => {
      this.$refs.cursor.classList.remove('hide');
    });
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  background: none;
  border-radius: 100%;
  border: 2px solid white;
  height: 40px;
  pointer-events: none;
  position: fixed;
  transform: translate(-100px, -100px);
  transition: opacity 0.3s;
  width: 40px;
  will-change: transform;
  z-index: 100;
  @include breakpoint-max(890) {
    display: none;
  }
}
.dot {
  background: white;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  z-index: 100;
}

.hide {
  opacity: 0;
  transform: scale(0.4);
}
</style>
