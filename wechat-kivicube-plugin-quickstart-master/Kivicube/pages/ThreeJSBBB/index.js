//const { setCollectionId, startCloudar, stopCloudar, cloudarTakePhoto } = requirePlugin("kivicube");

import { createScopedThreejs } from 'threejs-miniprogram'

const { renderModel } = require('../test-cases/model0')


    Page({
        
        data: {
          result: "",
          giftVisibility: false,
        },

        onLoad: function (options) {

          //this.setData({ giftVisibility: true });
          //console.log(this)

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

        },
        photo(){

        },
        // async start() {
        //   if (this._isStart) {
        //     return;
        //   }
        //   this._isStart = true;
      
        //   try {
        //     wx.showNavigationBarLoading();
        //     const { identifier, metadata } = await startCloudar();
      
        //     const {
        //       data: { projectId, sceneId },
        //     } = JSON.parse(metadata);
      
        //     this.setData({ giftVisibility: true });
      
        //     const result = JSON.stringify(
        //       {
        //         collectionId: projectId,
        //         identifier,
        //         sceneId,
        //       },
        //       null,
        //       "\t",
        //     );
        //     this.setData({ result });
        //   } catch (e) {
        //     console.error("云识别失败", e);
        //   } finally {
        //     wx.hideNavigationBarLoading();
        //     this._isStart = false;
        //   }
        // },
        // stop() {
        //   stopCloudar();
        // },
        error(e) {
          if (e && e.detail && e.detail.detail && e.detail.detail.errMsg) {
            if (e.detail.detail.errMsg.includes("auth")) {
              const page = this;
              wx.showModal({
                title: "提示",
                content: "请给予“摄像头”权限",
                success() {
                  wx.openSetting({
                    success({ authSetting: { "scope.camera": isGrantedCamera } }) {
                      if (isGrantedCamera) {
                        wx.redirectTo({ url: "/" + page.__route__ });
                      } else {
                        wx.showToast({
                          title: "获取“摄像头”权限失败！",
                          icon: "none",
                        });
                      }
                    },
                  });
                },
              });
            }
          }
        },
      });
      