import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import SidebarStandard from '../components/sidebars/SidebarStandard.vue';
import SidebarBuild from '../components/sidebars/SidebarBuild.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // in order to use this, the server needs to be configured to support it (works fine now because we are using webpack dev server)
  routes: [{
    path: '/', name: 'Home', components: { sidebar: SidebarStandard, default: HomePage },
  },
  {
    path: '/build', name: 'Build', components: { sidebar: SidebarBuild, default: RobotBuilder },
  },
  {
    path: '/parts/browse',
    name: 'Browse',
    component: BrowseParts,
    children: [
      { name: 'BrowseHeads', path: 'heads', component: RobotHeads },
      { name: 'BrowseArms', path: 'arms', component: RobotArms },
      { name: 'BrowseTorsos', path: 'torsos', component: RobotTorsos },
      { name: 'BrowseBases', path: 'bases', component: RobotBases },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }],
});
