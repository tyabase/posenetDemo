<template>
  <div>
    <a-row class="menu">
      <a-col :flex="10" class="headerLeft">
        <div class="logoLeft">
          <img class="logo" src="../assets/logo.png" alt="">
        </div>
      </a-col>
      <a-col :flex="1" class="headerRight">
        <div class="navItem">
          <a-button type="primary" class="try" @click="navigateToMain">返回首页</a-button>
        </div>
      </a-col>
    </a-row>
    <div class="containerPose">
      <div class="poseMasterDiv">
        <div class="left">
          <div class="imfor">
            <div class="p">Input</div>
          </div>
          <video ref="videoElement" :width="width" :height="height" autoplay></video>
        </div>
        <div class="right">
          <div class="imfor">
            <div class="p">Output</div>
          </div>
          <canvas ref="canvas" :width="width" :height="height"></canvas>
        </div>
      </div>
    </div>

  </div>
</template>



<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import router from '../router';
import { application } from 'express';

const width = 480;
const height = 360;
const videoElement = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);

const navigateToMain = () => {
  // 获取router实例并使用push方法跳转到'/a'
  router.push('/');
};

onMounted(async () => {
  if (!videoElement.value || !canvas.value) return;

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.value.srcObject = stream;
    videoElement.value.play();

    const net = await posenet.load();
    detectPose(net);
  } catch (error) {
    console.error('Error loading video or PoseNet model:', error);
  }
});

const detectPose = async (net: posenet.PoseNet) => {
  if (!videoElement.value || !canvas.value) return;

  const ctx = canvas.value.getContext('2d');
  if (ctx) {
    const pose = await net.estimateSinglePose(videoElement.value, {
      flipHorizontal: false,
    });
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(videoElement.value, 0, 0, width, height);
    drawPose(pose, ctx);
  }

  requestAnimationFrame(() => detectPose(net));
};

const drawPose = (pose: posenet.Pose, ctx: CanvasRenderingContext2D) => {
  if (pose.score >= 0.1) {
    drawKeypoints(pose.keypoints, 0.5, ctx);
    drawSkeleton(pose.keypoints, 0.5, ctx);
  }
};
var faceData = []
const drawKeypoints = (keypoints, minConfidence, ctx) => {
  keypoints.forEach((keypoint) => {
    if (keypoint.score >= minConfidence) {
      const { x, y } = keypoint.position;
      drawCircle(x, y, 5, 'aqua', ctx);
    }
  });
};

const drawSkeleton = (keypoints, minConfidence, ctx) => {

  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(keypoints, minConfidence);
  if (adjacentKeyPoints.length > 0) {
    adjacentKeyPoints.forEach((keypoints) => {
      drawSegment(keypoints[0].position, keypoints[1].position, 'lime', ctx);
    });
  }
};

const drawCircle = (x, y, radius, color, ctx) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawSegment = ({ x, y }, position2, color, ctx) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(position2.x, position2.y);
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.stroke();
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.containerPose {
  z-index: 1;
  background: #f8f9fb url(../assets/bc.png) repeat center center/1.23rem .23rem;
  height: 100vh;
}

.poseMasterDiv {
  width: 100%;
  display: flex;
  padding-top: 5%;
  height: 80%;
}

canvas{
  height: 360px !important;
  width: 480px !important;
}

.left{
  margin-left: 5%;
  display: flex;
  width: 45%;
  justify-content: center;
  flex-wrap: wrap;
}

.right{
  margin-right: 5%;
  display: flex;
  width: 45%;
  justify-content: center;
  flex-wrap: wrap;
}

.imfor{
  padding-top: 3rem;
  display: flex;
  width: 100%;
  height: 1.6rem;
  justify-content: center;
}

.p{
  font-size: 1.4rem;
}
</style>