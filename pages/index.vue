<template>
  <div class="main-container">
    <MainSection />
    <Intro />
    <Skills />
    <Projects @showProject="show" />
    <ProjectInfo
      :page="page"
      :show="visible"
      @close="close()"
      @showPage="show"
    />
    <Contact />
  </div>
</template>

<script>
import MainSection from '@/components/sections/Main';
import Intro from '@/components/sections/Intro';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ProjectInfo from '@/components/ProjectInfo';
import Contact from '@/components/sections/Contact';

export default {
  components: { MainSection, Intro, Skills, Projects, ProjectInfo, Contact },
  data() {
    return {
      page: 0,
      visible: false,
    };
  },
  methods: {
    show(page) {
      this.page = page;
      this.visible = true;
      document.documentElement.style.overflow = 'hidden';
    },
    close() {
      console.log('closed');
      this.visible = false;
      document.documentElement.style.overflowY = 'auto';
    },
  },
};
</script>
