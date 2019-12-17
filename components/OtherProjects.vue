<template>
  <div class="other-projects-container">
    <h3>My Projects</h3>
    <div
      v-for="(project, index) in projects"
      :key="project.title"
      @click="$emit('showProject', index)"
      class="project"
    >
      <img :src="require(`@/assets/images/projects/${project.img}.png`)" />
      <div class="layer">
        <p class="title">{{ project.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    currentProject: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(['projects']),
  },
};
</script>

<style lang="scss" scoped>
.other-projects-container {
  left: 0;
  top: 50px;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-flow: column;
  @include breakpoint-max(800) {
    height: auto;
  }
  .project {
    cursor: pointer;
    position: relative;
    border: 3px solid rgba(204, 204, 204, 0);
    @include vertical-spacing(12px);
    @include breakpoint-max(800) {
      width: 90%;
      margin: 0 auto;
      @include vertical-spacing(12px);
    }
    &:hover {
      border-color: blue;
      transform: scale(1.05);
    }
    .layer {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.315);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
      p {
        color: white;
        font-size: 20px;
        text-shadow: 1px 1px 1px rgb(31, 31, 31);
        position: absolute;
        top: 0;
        background: rgb(32, 32, 32);
        width: 100%;
        text-align: center;
      }
      &:hover {
        background: rgba(0, 0, 0, 0);
      }
    }
    img {
      width: 100%;
      max-width: 300px;
      height: 100%;

      @include breakpoint-max(800) {
        max-width: none;
      }
    }
  }
}
</style>
