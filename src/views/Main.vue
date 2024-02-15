
<template>
  <myheader></myheader>
  <div class="container">
    <div id="page2"></div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <transition name="fade" @before-enter="beforeEnter" @enter="enter">
          <div class="firstLeft" v-if="showFirstLeft">
            <div class="head">全平台兼容的、即开即用的</div>
            <div class="middle">人体姿态识别系统</div>
            <div class="foot">POSEMASTER</div>
            <a-button @click="redirectToAnotherPage" type="primary" shape="round" size="large" class="tryBtn">
              在线尝试
              <template #icon>
                <CheckOutlined />
              </template>
            </a-button>
          </div>
        </transition>
        <transition name="slide-fade">
          <!-- 使用动态绑定的方式控制 div 的显示和位置 -->
          <div v-if="showDiv" class="animated-div" :style="divStyles"></div>
        </transition>
        <div class="firstFoot">
          <div class="blink-div" :style="{ opacity: blinking ? 1 : 0 }">
            <CaretDownOutlined style="font-size: 1.5rem;" />
          </div>
        </div>
      </div>
      <div class="section">

        <a-row>
          <div class="secTitle">
            <div>从现在开始，定义你的姿态识别。</div>
            <div class="smallTitle">化繁为简 · 即开即用 · 强大的兼容性</div>
          </div>
          <a-col :span="8">
            <div class="secondImg">
              <div class="inforImg"></div>
              <div class="textInfor">
                <div class="firstLine">强大的浏览器兼容性</div>
                <div class="SecondLine">在浏览器中运行机器学习模型，无需服务器端处理</div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="secondImg">
              <div class="inforImg"><img src="../assets/tensorflowAPI.png" alt=""></div>
              <div class="textInfor">
                <div class="firstLine">TensorFlow.js集成</div>
                <div class="SecondLine">简化机器学习模型到 Web 应用程序的集成</div>
              </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="secondImg">
              <div class="inforImg"><img src="../assets/posenet.png" alt=""></div>
              <div class="textInfor">
                <div class="firstLine">实时的姿势估计</div>
                <div class="SecondLine">使用 PoseNet 模型进行处理，实时渲染识别结果</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <!-- <div class="section">
        
      </div> -->
      <div class="section lastone">
        <div class="footer">
          <a-row style="line-height:5rem;">
            <a-col :span="8">
              <img class="logo" src="../assets/logo.png" alt="" style="height:3rem;">
            </a-col>
            <a-col :span="8" class="footerMiddle">
              <div style="line-height:1.2rem;">Developed by the PoseMaster Dev Team</div>
              <div style="line-height:1.2rem;">©2023-2024 posemaster.cn 版权声明 | 备案号：<a
                  href="https://beian.miit.gov.cn">滇ICP备2024019373号</a></div>
            </a-col>
            <a-col :span="8" class="lastRight">
              <!-- <div class="fans">关注我们：</div> -->
              <button class="btn" onclick="window.location.href='https://github.com/tyabase?tab=repositories'">
                <svg width="2rem" height="2rem" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"
                  viewBox="0 0 24 24" id="github">
                  <path
                    d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z">
                  </path>
                </svg>
              </button>
            </a-col>
          </a-row>
        </div>
      </div>
    </full-page>

  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  z-index: 1;
  background: #f8f9fb url(../assets/bc.png) repeat center center/1.23rem .23rem;
  position: relative;
}

.animated-div {
  top: 22%;
  width: 35rem;
  height: 25rem;
  border-radius: 8px;
  background-color: #3498db;
  /* 设置背景颜色 */
  position: absolute;
  transition: all 1s ease;
  /* 使用 all 属性实现宽高、位置和透明度的过渡 */
}

/* 定义过渡效果的类名和初始状态 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease;
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active 在 <2.1.8 中适用 */
  {
  right: 20%;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.firstLeft {
  width: 600px;
  /* 调整宽度和高度以适应您的需求 */
  height: 350px;
  opacity: 0;
  /* 初始状态为透明 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: PingFang SC, Microsoft Yahei, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
}

.head {
  font-size: 2.8rem;
}

.middle {
  margin-top: 1rem;
  font-size: 2.8rem;
}

.foot {
  font-size: 4rem;
  margin-top: 1rem;
  background: linear-gradient(blue, #3498db);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.tryBtn {
  margin-top: 1.8rem;
}

.firstFoot {
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 0;
  width: 100%;
}

.blink-div {
  transition: opacity 0.3s ease-in-out;
  /* 可选：添加过渡效果 */
  margin-bottom: 0.5rem;
}

.footer {
  /* position: absolute; */
  background-color: white;
  width: 100%;
  text-align: center;
  bottom: 0px;
  height: 5rem;
}

.button-icon {
  display: flex;
  border: 3px #fff solid;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}

.icon {
  background-color: #fff;
  padding: 10px 10px 5px 10px;
}

.icon svg {
  width: 25px;
  height: 25px;
}

.cube {
  transition: all 0.4s;
  transform-style: preserve-3d;
  width: 200px;
  height: 20px;
}

.button-icon:hover {
  border-color: white;
}

.button-icon:hover .cube {
  transform: rotateX(90deg);
}

.side {
  position: absolute;
  height: 47px;
  width: 200px;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
}

.top {
  background: white;
  color: black;
  transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
}

.front {
  background: #222229;
  color: #fff;
  transform: translate3d(0, 0, 1em);
}

.footerMiddle {
  margin-top: 1.3rem;
}

.lastone {
  max-height: 5rem;
}

.btn {
  display: grid;
  place-items: center;
  background: #e3edf7;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
  transition: transform 0.5s;
}

.btn:hover {
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
    0px 12px 10px -10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.btn svg {
  transition: transform 0.5s;
}

.btn:hover svg {
  transform: scale(0.9);
  fill: #333333;
}

.fans {
  line-height: 5rem;
  width: 5rem;
  display: inline-block;
}

.lastRight {
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondImg {
  margin: 0 auto;
  margin-top: 3rem;
  width: 22rem;
  height: 28rem;
  border-radius: 5%;
  background-color: white;
  overflow: hidden;
}

.secondImg:hover{
  transform: translateY(-2px);
  transition: all .2s ease-in-out;
  box-shadow: 0px 0px 1.5px 0px rgba(0, 0, 0, 0.2);
}

.inforImg {
  width: 100%;
  height: 22rem;
  overflow: hidden;
}

.inforImg img {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
}

.secondImg:hover .inforImg img{
  transform: scale(1.05);
  transition: all .5s ease-in-out;
}

.firstLine {
  margin: 0.3rem 0;
  padding-left: 1rem;
  line-height: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.SecondLine {
  font-size: 0.9rem;
  padding-left: 1rem;
}

.secTitle {
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
}

.smallTitle{
  margin-top: 1rem;
  font-size: 1rem;
}
</style>

<script>
import myHeader from '../components/myHeader.vue'
export default {
  name: 'Main',
  components: {
    'myheader': myHeader
  },
  data() {
    return {
      blinking: true,
      showDiv: true,
      showFirstLeft: false,
      divStyles: {
        right: 0,
        opacity: 0
      },
      options: {
        credits: { enabled: true, label: '', position: 'right' },
        licenseKey: 'gplv3-license',
        navigation: false,
        slidesNavigation: true
      },
    }
  },
  methods: {
    beforeEnter(el) {
      // 在进入动画开始前，设置初始位置
      el.style.transform = 'translateX(-100%)';
    },
    enter(el, done) {
      // 在进入动画中，设置最终状态和透明度
      el.offsetHeight; // 触发重绘，以便应用初始状态
      el.style.transition = 'all 3s';
      el.style.transform = 'translateX(20%)';
      el.style.opacity = '1';
      done();
    },
    startBlinking() {
      setInterval(() => {
        this.blinking = !this.blinking;
      }, 500); // 闪烁间隔为500毫秒
    },
    redirectToAnotherPage() {
      this.$router.push('/tensor-flow');
    },
    pageMoveTo(page) {
      this.$refs.fullpage.api.moveTo(page, 0);
    },

  },
  mounted() {
    let block = document.getElementsByClassName("fp-watermark")[0];
    block.remove()
    setTimeout(() => {
      this.divStyles.right = '11%'; // 移动到页面中间
      this.divStyles.opacity = 1; // 透明度变为 1
    }, 1000); // 1000 毫秒后触发过渡效果，你可以根据需要调整延迟时间
    this.showFirstLeft = true;
    this.startBlinking();
  },
  provide() {
    return {
      pageMoveTo: this.pageMoveTo,
    };
  },

}
</script>
