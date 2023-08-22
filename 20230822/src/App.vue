<template>
  <div class="box">
    <div class="header d-flex justify-between align-center">
      <div class="logo_box iconfont icon-weixinzhifu">灵活用工服务平台</div>
      <div class="head_box flex-1 d-flex justify-between">
        <div class="head-lef-box">
          <i class="change iconfont icon-fenlei2"></i>
          <i class="iconfont icon-qianbao"></i>
        </div>
        <div class="head-rig-box">
          <span>中服云（北京）文化发展有限公司</span>
          <i class="set iconfont icon-gengduo1"></i>
        </div>
      </div>
    </div>
    <div class="bodyer d-flex justify-between">
      <div class="main-lef-box">
        <div>
          <p>常规操作</p>
          <h3 class="iconfont icon-baokuan-">首页</h3>
        </div>
        <div>
          <p>业务管理</p>
          <ul>
            <li v-for="item in list" :key="item.id">
              <h3 @click="changeIndex(item.id)" :class="[item.icon, {active: showIndex !== item.id?false:true}]">{{ item.title }}</h3>
              <dl :class="{'height0': showIndex === item.id?false:true}">
                <dd v-for="list in item.list" :key="list.id">
                  <a class="iconfont icon-gengduo" :href="list.router">{{ list.name }}</a>
                  <!-- <router-link :to="list.router">{{ list.name }}</router-link> -->
                </dd>
              </dl>
            </li>
          </ul>
        </div>
        <div>
          <p>服务中心</p>
          <h3 class="iconfont icon-baokuan-">身份&安全</h3>
        </div>
      </div>
      <div class="main-rig-box flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showIndex: '',
      list: [
        {
          id: 1,
          title: '项目任务',
          icon: 'iconfont icon-baokuan-',
          list: [
            {id: 1, name: '批量新建订单', router: '/projectNew'},
            {id: 2, name: '项目列表', router: '/projectNew1'},
            {id: 3, name: '任务列表', router: '/projectNew2'},
            {id: 4, name: '订单列表', router: '/projectNew3'}
          ]
        },
        {
          id: 2,
          title: '资金发票',
          icon: 'iconfont icon-baokuan-',
          list: [
            {id: 5, name: '专属账户', router: '/projectNew4'},
            {id: 6, name: '账户余额', router: '/projectNew5'},
            {id: 7, name: '发票申请记录', router: '/projectNew6'},
            {id: 8, name: '发票收件地址', router: '/projectNew7'}
          ]
        },
        {
          id: 3,
          title: '企业管理',
          icon: 'iconfont icon-baokuan-',
          list: [
            {id: 9, name: '企业信息资料', router: '/projectNew8'}
          ]
        }
      ]
    }
  },
  methods: {
    changeIndex (id) {
      // 如果点击的是同一个元素,则让showIndex为 空 默认关闭
      if (this.showIndex === id) {
        this.showIndex = ''
        return
      }
      this.showIndex = id
    }
  }
}
</script>


<style>
  @import url("./css/base.css");
  @import url("./assets/font/iconfont.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
  .box{
  }
  .header{
    height: 63px;
    font-size: 18px;
  }
  .logo_box{
    background-color: #d0121b;
    width: 250px;
    --h:63px;
    height: var(--h);
    line-height: var(--h);
    color: #fff;
  }
  .head_box{
    background-color: #2c4198;
    --h:63px;
    height: var(--h);
    line-height: var(--h);
    color: #fff;
    padding: 0 25px;
  }
  .head_box i{
    font-size: 23px;
  }
  .head-rig-box .set{
    margin-left: 68px;
  }
  .head-lef-box .change{
    margin-right: 34px;
  }
  .height0{
    height: 0;
    overflow: hidden;
  }
  .bodyer{
    background: #f5f5f5;
  }
  .main-lef-box{
    width: 250px;
    padding: 0 8px;
    background-color: #fff;
    box-sizing: border-box;
    height: calc(100vh - 63px);
    text-align: left;
  }
  .main-lef-box p{
    font-size: 13px;
    line-height: 45px;
    color: #868e96;
    padding: 0 10px;
  }
  .main-lef-box h3{
    padding: 0 23px;
    font-size: 18px;
    --h:56px;
    height: var(--h);
    line-height: var(--h);
    border-radius: calc(var(--h)/2);
    color: ##555555;
  }
  .main-lef-box h3::before{
    margin-right: 15px;
  }
  .main-lef-box h3.active{
    color: #2c4198;
    background: #e1e0e0;
  }
  .main-lef-box dl dd{
    padding-left: 20px;
    font-size: 16px;
    line-height: 50px;
    color: #70797d;
  }
  .main-lef-box dl dd a::before{
    margin-right: 20px;
  }
</style>
