<template>
  <div class="home">
    <div class="container">
      <h1 style="font-size: 90px" class="typingEffect_h">Hello I am</h1>
      <h1 style="font-size: 90px" class="typingEffect_name">
        <mark>Aditya Ranjan</mark>
      </h1>
      <p class="typingEffect_p">(Yes, that's me!)</p>
    </div>
  </div>
  <div class="buttonGroup q-gutter-lg">
    <button class="btn">Lorem</button>
    <button class="btn">Lorem</button>
    <button class="btn">Lorem</button>
  </div>
</template>
<script></script>
<style lang="scss">
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
  left: 21%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
}
.btn {
  background-color: #ff6663;
  border-radius: 50px;
}
.btn:hover {
  box-shadow: 5px 5px #ff6663;
  transition: all 0.2s ease;
}
.typingEffect_h {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid rgb(0, 0, 0); /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s forwards;
  animation: typing 2s steps(30) forwards, blink 1s infinite;
}
.typingEffect_name {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid rgb(0, 0, 0); /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s forwards;
  animation: typing 2s steps(30) forwards, blink 1s infinite;
  animation-delay: 2s;
}
.typingEffect_p {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid rgb(0, 0, 0); /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s forwards;
  animation: typing 2s steps(30) forwards, blink 1s infinite;
  animation-delay: 4s;
}
mark {
  background-color: antiquewhite;
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
