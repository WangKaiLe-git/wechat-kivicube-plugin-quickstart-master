Page({
  data: {
  },
  // 事件处理函数
  openSence() {
    wx.navigateTo({
      url: '/Kivicube/pages/scene/index'
    })
  },
  openCollectScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/collection/index'
    })
  },
  openTagsScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/tags/index'
    })
  },

  openTagsAScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/tagsA/index'
    })
  },

  openThreeScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/ThreeJS/index'
    })
  },


  openBBBScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/ThreeJSBBB/index'
    })
  },

  openCCCScene() {
    wx.navigateTo({
      url: '/Kivicube/pages/DemoCCC/index'
    })
  },
})
