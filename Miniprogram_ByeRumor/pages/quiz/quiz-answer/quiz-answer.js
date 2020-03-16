// pages/quiz/quiz-answer/quiz-answer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isActive: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleStyle(e){
      const index = e.currentTarget.dataset.index
      this.setData({
        isActive: index
      })
    },
    showBtnFn(){
      this.triggerEvent('exitClickFn')
    }
  }
})
