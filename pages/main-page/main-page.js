var globalData = getApp().globalData;
Page({

  /** 数据绑定 */ 
  data: {
    listBtnTxt:'列表组件测试',
    appName:globalData.name
  },
  onLoad() {},
  buttonClick(){
    console.log("点击了按钮");
    // switch(id){
    //   case listCompoentBtn:
    //     console.log("点击了$listBtnTxt 按钮")
    //     break;
    // }

    // 页面跳转
      my.navigateTo({
      url: '/pages/list/list',
    });

    //返回上一级页面
    // my.navigateBack();
  }
});

