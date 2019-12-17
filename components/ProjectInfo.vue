<template>
  <div :class="{ show: show }" class="project-info-container">
    <div class="project-banner">
      <button @click="close()" class="close-project">Close Projects</button>
      <h3>Projects</h3>
    </div>
    <div ref="mainContent" class="main-content">
      <div ref="content" class="content">
        <h1>{{ current.title }}</h1>
        <img :src="require(`@/assets/images/projects/${current.img}.png`)" />
        <p class="desc">{{ current.description }}</p>
        <div class="links">
          <a
            v-if="current.link.live"
            :href="current.link.live"
            class="live"
            target="_blank"
            rel="noopener noreferrer"
            >View Live</a
          >
          <a
            v-if="current.link.github"
            :href="current.link.github"
            class="github"
            target="_blank"
            rel="noopener noreferrer"
            >View Code</a
          >
        </div>
        <div class="figma">
          <a
            v-if="current.figma"
            :href="current.figma"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div class="project-content">
          <div class="tech">
            <p>Tech: {{ tech }}</p>
          </div>
          <div v-if="current.video" class="video">
            <h3>Demo Video</h3>
            <div class="video-container">
              <iframe
                :src="current.video"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <p class="disclaimer">
            {{ current.content.disclaimer }}
          </p>
          <div class="learned">
            <h3>What I learned</h3>
            <ul>
              <li v-for="learned in current.content.learned" :key="learned">
                {{ learned }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <OtherProjects :currentProject="page" @showProject="project" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import OtherProjects from './OtherProjects';

export default {
  components: { OtherProjects },
  props: {
    page: {
      type: Number,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState(['projects']),
    current() {
      return this.projects[this.page];
    },
    tech() {
      return this.current.tech
        .map((t, index) =>
          index + 1 === this.current.tech.length ? t : `${t},`,
        )
        .join(' ');
    },
  },
  watch: {
    page() {
      setTimeout(() => {
        this.$refs.mainContent.scrollTop = 0;
        this.$refs.content.scrollTop = 0;
      });
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    project(page) {
      this.$emit('showPage', page);
    },
  },
};
</script>

<style lang="scss" scoped>
.project-info-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: $lightDark;
  z-index: 1000;
  display: flex;
  flex-flow: column;
  transform: translateY(-100%);
  transition: transform 0.3s;
  will-change: transform;
  color: rgb(235, 235, 235);

  h1 {
    color: rgb(248, 248, 248);
    margin-bottom: 10px;
    font-weight: 400;
  }

  .project-banner {
    background: black;
    width: 100%;
    display: flex;
    padding: 5px;
    align-items: center;

    button {
      width: 200px;
      background: rgb(255, 255, 255);
      outline: none;
      border: none;
      border-radius: 100px;
      padding: 10px;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background: rgb(87, 87, 87);
        color: white;
      }
    }

    h3 {
      margin-left: auto;
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
  $phone: 800;
  .main-content {
    display: flex;
    flex-flow: row-reverse;
    overflow: hidden;
    @include breakpoint-max($phone) {
      overflow-y: auto;
      flex-flow: column;

      .other-projects-container,
      .content {
        overflow: visible;
      }
    }
  }

  .content {
    width: 95%;
    max-width: 1000px;
    padding-bottom: 120px;
    overflow-y: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    h3 {
      font-weight: bold;
    }
    img {
      border-radius: 5px;
      margin-bottom: 5px;
      box-shadow: 0px 2px 2px rgb(8, 8, 8);
      width: 100%;
      max-width: 630px;
    }

    .learned {
      margin-top: 15px;
    }

    .tech {
      font-size: 20px;
      margin-top: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
  }
}
.links {
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    background: white;
    color: rgb(34, 34, 34);
    padding: 5px;
    width: 160px;
    height: 50px;
    text-align: center;
    border-radius: 5px;
  }
  .live {
    background: #1e9e64;
    color: white;
    margin-right: 10px;
  }
}
.show {
  transform: translateY(0);
}

.learned {
  ul {
    li {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 300;
    }
  }
}

.desc {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}

.video {
  width: 100%;
  height: 100%;
}

.video-container {
  width: 537px;
  height: 296px;
  position: relative;

  @include breakpoint-max(800) {
    width: 100%;
    max-width: 530px;
    padding-top: 56.25%;
    height: 0;
    max-height: 200px;
  }
}

.disclaimer {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
}
iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
}
</style>
