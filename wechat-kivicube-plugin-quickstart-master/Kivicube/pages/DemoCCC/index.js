const { setCollectionId, startCloudar,  stopCloudar,cloudarTakePhoto} = requirePlugin("kivicube");

import { createScopedThreejs} from 'threejs-miniprogram'
const {renderModel} = require('../test-cases/model0')


// Kivicube/pages/DemoCCC/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modelData: {
      ContactBy: "微信测试片段",
      ContactPhoneNo: "13019999999",
      Remark: "",
      TotalPrice: 0.01,
      PayState: "UnPaid",
      State: "Processing",
      HandleState: "OrderPlaced"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  async init(){
    if (this._isStart) {
      return;
    }
    this._isStart = true;

    try {
      wx.showNavigationBarLoading();
      const { identifier,metadata} = await startCloudar();
      const {data: { projectId, sceneId},} = JSON.parse(metadata);

      this.setData({giftVisibility: true});

      const result = JSON.stringify({collectionId: projectId,identifier, sceneId,},null,"\t",);
      this.setData({result});
    } catch (e) {
      console.error("云识别失败", e);
    } finally {
      wx.hideNavigationBarLoading();
      this._isStart = false;
    }
  },

  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  onCode(e) {
    console.log(e)
  },
  error(e) {
    console.log(e.detail)
  },
  //相机是否加载成功
  loadSuccess(e) {
    console.log('相机是否加载成功', e);
  },
  //扫码成触发的事件
  scanSuccess(e) {
    console.log('扫码成功得到的结果', e);
    console.log('扫码成功,期望值', e.detail.result);    
    wx.showToast({
      title: '扫码成功',
    })
  },
  //关闭扫码
  closeCamera() {
    console.log('用户主动关闭');
  }

})