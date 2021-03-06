// const { createScopedThreejs } = require('threejs-miniprogram')
import { createScopedThreejs } from 'threejs-miniprogram'

const { renderCube } = require('../test-cases/cube')
const { renderCubes } = require('../test-cases/cubes')
const { renderSphere } = require('../test-cases/sphere')
const { renderModel } = require('../test-cases/model')

const app = getApp()

Page({
  data: {},
  onLoad: function () {
    wx.createSelectorQuery()
    .select('#webgl')
    .node()
    .exec((res) => {
      const canvas = res[0].node
      this.canvas = canvas
      const THREE = createScopedThreejs(canvas)
      
      // renderSphere(canvas, THREE)
      // renderCube(canvas, THREE)
      // renderCubes(canvas, THREE)
      renderModel(canvas, THREE)
    })
  },
  touchStart(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchstart'})
  },
  touchMove(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchmove'})
  },
  touchEnd(e) {
    this.canvas.dispatchTouchEvent({...e, type:'touchend'})
  },


error(e) {
  const { detail } = e;
  //if (detail && detail.isCameraAuthDenied) {
    // 如果是权限问题，则向用户申请权限。
    const page = this;
    wx.showModal({
      title: "提示",
      content: "请给予“摄像头”权限",
      success() {
        wx.openSetting({
          success({ authSetting: { "scope.camera": isGrantedCamera } }) {
            if (isGrantedCamera) {
              //clearCollectionCache();
              page.aa();
              wx.redirectTo({ url: '/' + page.__route__ });
            } else {
              wx.showToast({ title: "获取“摄像头”权限失败！", icon: "none" });
            }
          }
        });
      }
    });
  //}
  console.error(e);
}
})
