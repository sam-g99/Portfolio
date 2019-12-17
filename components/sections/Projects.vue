<template>
  <section id="projects">
    <div class="content">
      <h3>My Projects</h3>
      <div class="status-keys">
        <div class="key completed">
          <div class="dot"></div>
          Completed
        </div>
        <div class="key in-progress">
          <div class="dot"></div>
          In Progress
        </div>
      </div>
      <div class="projects-container">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          :class="{ inProgress: project.inProgress }"
          @click="$emit('showProject', index)"
          class="project"
        >
          <div class="status"></div>
          <div class="layer">
            <h2>{{ project.title }}</h2>
            <p>
              {{ project.description }}
            </p>
            <button class="learn-more">
              Learn More
            </button>
          </div>
          <img :src="require(`@/assets/images/projects/${project.img}.png`)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: { ...mapState(['projects']) },
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
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  .content {
    width: 100%;
  }

  .status-keys {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .key {
      display: flex;
      align-items: center;
      font-size: 18px;
      @include horizontal-spacing(10px);

      .dot {
        padding: 5px;
        border-radius: 100%;
        margin-right: 5px;
      }
    }
    .completed {
      color: #46c059;
      .dot {
        background: #46c059;
      }
    }
    .in-progress {
      color: #ce8bf8;
      .dot {
        background: #ce8bf8;
      }
    }
  }

  .projects-container {
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    user-select: none;

    @include breakpoint-max(1250) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-max(800) {
      grid-template-columns: repeat(1, 1fr);
    }
    .project {
      margin: 0;
      height: 100%;
      width: 100%;
      position: relative;
      transition-duration: 0.2s;
      border: rgba(255, 255, 255, 0) solid 2px;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      .status {
        padding: 7px;
        background: $green;
        position: absolute;
        z-index: 100;
        border-radius: 100%;
        margin: 10px;
      }

      &:hover {
        transform: scale(1.02);
        border: $green solid 2px;
      }

      &:hover > .layer {
        transform: translateY(0);
      }

      img {
        width: 100%;
        height: 100%;
        bottom: 0;
      }
      .layer {
        position: absolute;
        background: rgba(0, 0, 0, 0.897);
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        color: white;
        transform: translateY(-100%);
        transition: transform 0.3s;
        will-change: transform;
        h2 {
          text-align: center;
          margin-bottom: 15px;
        }
        p {
          text-align: center;
          margin-bottom: 15px;
          width: 90%;
        }
        .learn-more {
          border: none;
          width: 200px;
          padding: 15px;
          background: rgb(238, 238, 238);
          border-radius: 100px;
          font-size: 16px;
          color: rgb(32, 32, 32);
          cursor: pointer;
          outline: none;
        }
      }
    }
    .inProgress {
      .status {
        background: #ce8bf8;
      }
      &:hover {
        border-color: #ce8bf8;
      }
    }
  }
}
</style>
<style></style>
