import {createScopedThreejs} from 'threejs-miniprogram'
const { renderModel } = require('../test-cases/model0')

const app = getApp()


Component({
  onLoad () {
    console.log(this)

  },
  properties: {
    fps: {
      type: Number,
      default: 60,
    },
  },


  
  
  async ready() {

    console.log("*****************************")
    wx.createSelectorQuery()
    .select('#webgl')
    .node()
    .exec((res) => {
      const canvas = res[0].node
      this.canvas = canvas
      const THREE = createScopedThreejs(canvas)
      
       // 设置背景透明
      var gl = canvas.getContext('webgl', {
         alpha: true
      });
      if (canvas != undefined) {
        //  canvas.width 和canvas.style都需要设置，否则无法显示渲染
        canvas.width = canvas._width;
        canvas.height = canvas._height;
        //requestAnimationFrame = canvas.requestAnimationFrame;
       
        renderModel(canvas, THREE)
      }

    })
  }


});