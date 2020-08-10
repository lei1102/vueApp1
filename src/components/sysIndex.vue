<template>
  <div>
    <header>
      <img class="logo" src="../assets/img/logo.png" alt />
    </header>
    <main>
      <div class="screen">
        <div class="imgs" v-for="(v,k) in imgs.url" :key="k">
          <img class="mainImg" :src="v" alt />
          <div class="screenbord">
            <div class="text">...text</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "sysIndex",
  data() {
    return {
      imgs: {
        url: [
          require("../assets/img/img-1.jpg"),
          require("../assets/img/img-1.jpg"),
          require("../assets/img/img-1.jpg"),
        ],
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and (max-width: 768px) {
  header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-left: 15px solid #e79718;
    border-right: 50px solid #e79718;
    display: flex;
    align-items: center;
  }
  header .logo {
    height: 40px;
    margin-left: 10px;
  }
  main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  main .screen {
    width: 70%;
  }
  main .screen img {
    width: 100%;
    display: block;
  }
  .imgs {
    position: relative;
    margin: 40px 0;
    box-shadow: 0 0 10px rgb(19, 16, 16);
  }
  .screenbord {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .text {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    color: #ddd;
    font-size: 16px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
