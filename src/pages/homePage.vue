<template>
  <div class="home">
    <div class="container">
      <h1 style="font-size: 90px">Hello I am</h1>
      <h1 style="font-size: 90px" class="typingEffect_name">Aditya Ranjan</h1>
      <p><mark>adityaranjan_2004@outlook.com</mark></p>
      <p id="p1">(Game developer | Python | Frontend)</p>
    </div>
  </div>
  <div class="image"></div>
  <div class="buttonGroup q-gutter-lg">
    <router-view>
      <router-link class="nav-link" to="/gamePage"
        ><button class="btn">Games</button></router-link
      >
      <a href="https://github.com/Defalt-here" target="_blank"
        ><button class="btn">GitHub</button>
      </a>
      <a
        href="https://www.linkedin.com/in/aditya-ranjan-89497b256/"
        target="_blank"
      >
        <button class="btn">LinkedIn</button>
      </a>
      <a
        href="https://drive.google.com/file/d/1zOx6AVj9h2pDZY2nJr4AHHpcfNIHRbuJ/view?usp=sharing"
        target="_blank"
      >
        <button class="btn">Resumé</button>
      </a>
    </router-view>
  </div>
  <img src="src/assets/alien-monster.svg" class="img" />
</template>
<style lang="scss">
.img {
  position: relative;
  translate: 820px 13px;
  height: 102vh;
  width: 33vw;
  animation: idle 0.7s ease-in-out alternate infinite;
  cursor: pointer;
}
.img:hover {
  animation-play-state: paused;
}
.img:active {
  filter: hue-rotate(180deg);
  transition: 1.2s;
}
@keyframes idle {
  0% {
    translate: 820px 5px;
  }
  100% {
    translate: 820px 13px;
  }
}
.home {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #ddffea;
}
.container {
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
}
h1 {
  margin-bottom: 0;
  margin-top: 0;
}
.buttonGroup {
  position: absolute;
  top: 78%;
  left: 27%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
  margin-top: 10px;
}
.btn {
  background-color: #ff6663;
  border-radius: 50px;
  border-color: black;
  border-style: solid;
  transition: all 0.2s ease;
}
.btn:hover {
  box-shadow: 5px 5px #ff6663;
  transition: all 0.2s ease;
  cursor: pointer;
}
.typingEffect_name {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid rgb(0, 0, 0); /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s forwards;
  animation: typing 2s steps(30) forwards, blink 1s infinite;
}
mark {
  background-color: antiquewhite;
  transition: all 0.2s ease;
}
mark:hover {
  background-color: rgb(234, 255, 189);
  transition: all 0.2s ease;
}
p {
  margin-bottom: 10px;
}
/* The typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: black;
  }
}
</style>
