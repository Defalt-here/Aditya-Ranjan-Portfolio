<template>
  <div class="title">
    <q-toolbar
      v-model="headerActive"
      show-if-above
      :width="200"
      :breakpoint="700"
      elevated
    >
      <q-toolbar-title>Games</q-toolbar-title>
      <router-link class="nav-link" to="/">
        <q-btn flat round dense icon="home" />
      </router-link>
    </q-toolbar>
  </div>
  <div class="pageContainer">
    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 100vh; max-width: 100vw"
    >
      <div class="spaceBars">
        <div class="content">
          <h1>Space Bars!</h1>
          <div class="pic">
            <img src="src/assets/SpaceBars.png" class="pic_sb" />
          </div>
          <div class="text">
            <p>
              Space Bars is a 2D space shooter where the goal is to kill off as
              many enemy spaceships as possible without colliding. The game is
              made completely from scratch in C++ with SDl without the use of
              any game engines. The project boasts working score systems,
              powerups, sound systems, graphics and more.
            </p>
            <a
              href="https://github.com/Defalt-here/Space-Bars-Unleashed"
              target="_blank"
            >
              <button class="btn_sb">GitHub</button>
            </a>
          </div>
        </div>
      </div>
      <div class="diab">
        <div class="content">
          <h1>Diabolical</h1>
          <div><img src="src/assets/Diab.png" class="pic_d" /></div>
          <div class="text">
            <p>
              Diabolical is a C based game that plays directly on your windows
              console. It follows the story of a man who mysteriously lost his
              family and have no memories about it. You must complete puzzles
              and unreveal clues to find out the plot. The game boasts the
              optimal use of batch functions and an animation mechanic that
              plays directly on the console.
            </p>
            <a
              href="https://github.com/Defalt-here/Diabolical-Game"
              target="_blank"
            >
              <button class="btn_d">GitHub</button>
            </a>
          </div>
        </div>
      </div>
      <div class="maze_g">
        <div class="content">
          <h1>Maze Generator</h1>
          <div><img src="src/assets/MazeGenerator.png" class="pic_mg" /></div>
          <div class="text">
            <p>
              Generates a new maze everytime it's run displayed on console
              written in C. A component to be used on all the games that uses
              mazes(pacman clones and such). Uses an algorithm to go from the
              start point to the end point and traces back if borders or visited
              blocks are reached. Finally ends with adding random spaces for
              extra complications.
            </p>
            <a
              href="https://github.com/Defalt-here/Maze-Generator"
              target="_blank"
            >
              <button class="btn_mg">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>
<style>
q-toolbar-title {
  margin-left: 10px;
}
.pageContainer {
  animation: fadeInAnimation ease 0.5s, upAnim ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  scroll-behavior: auto;
  scroll-snap-type: y mandatory;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes upAnim {
  0% {
    margin-top: 50px;
  }
  100% {
    margin-top: 0px;
  }
}
.spaceBars {
  position: sticky;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #100a14;
  color: #fe5400;
  margin-bottom: 0px;
  scroll-snap-align: start;
}
.diab {
  position: sticky;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgb(19, 19, 19);
  color: #f2f2f2;
  margin-top: 0px;
  margin-bottom: 0px;
  scroll-snap-align: start;
}
.maze_g {
  position: sticky;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: #f3f9d2;
  color: #63264a;
  margin-top: 0px;
  margin-bottom: 0px;
}
.content {
  padding-top: 3vh;
  padding-left: 20vh;
  margin-left: 0vw;
}
.pic_sb {
  height: 50vh;
  width: 35vw;
  border-color: #fe5400;
  border-style: solid;
  border-width: 12px;
  box-shadow: 5px 5px #f2f2f2;
  transition: all 0.2s ease;
  margin-top: 2vh;
}
.pic_sb:hover {
  box-shadow: 0px 0px;
  transition: all 0.2s ease;
}
.pic_d {
  height: 50vh;
  width: 35vw;
  border-color: rgba(181, 217, 252, 0.106);
  border-style: solid;
  border-width: 12px;
  box-shadow: 5px 5px #f2f2f2;
  transition: all 0.2s ease;
  margin-top: 2vh;
}
.pic_d:hover {
  box-shadow: 0px 0px;
  transition: all 0.2s ease;
}
.pic_mg {
  height: 50vh;
  width: 35vw;
  border-color: #cbeaa6;
  border-style: solid;
  border-width: 12px;
  box-shadow: 5px 5px #3d0b37;
  transition: all 0.2s ease;
  margin-top: 2vh;
}
.pic_mg:hover {
  box-shadow: 0px 0px;
  transition: all 0.2s ease;
}
h1 {
  margin-top: 0vh;
  margin-bottom: 5vh;
  font-size: 7vw;
}
.text {
  position: absolute;
  top: 67vh;
  left: 57vw;
  min-width: 30%;
  max-width: 100%;
  transform: translate(-19%, -79%);
  padding-top: 10px;
  font-size: 1.5vw;
}
.btn_sb {
  background-color: #fe5400;
  border-radius: 50px;
  border-color: black;
  border-style: solid;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn_d {
  background-color: #f2f2f2;
  border-radius: 50px;
  border-color: black;
  color: rgb(19, 19, 19);
  border-style: solid;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn_mg {
  background-color: #cbeaa6;
  border-radius: 50px;
  border-color: #3d0b37;
  border-style: solid;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn_mg:hover {
  box-shadow: 5px 5px #3d0b37;
  transition: all 0.2s ease;
}
.btn_sb:hover {
  box-shadow: 5px 5px #fe5400;
  transition: all 0.2s ease;
}
.btn_d:hover {
  box-shadow: 5px 5px #f2f2f2;
  transition: all 0.2s ease;
}
</style>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#00000",
        width: "9px",
        opacity: 0.2,
      },
      headerActive: ref(false),
    };
  },
};
</script>
