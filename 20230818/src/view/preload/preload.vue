<template>
  <div class="preload">
    <div>
      <button>
        <router-link to="/index">0s</router-link>
      </button>
    </div>
    <div>
      <button>
        <router-link to="/vfor">vfor</router-link>
      </button>
    </div>
    <div>
      <button>
        <router-link to="/vmodel">vmodel</router-link>
      </button>
    </div>
    <div>
      <button>
        <router-link to="/notepad">notepad</router-link>
      </button>
    </div>
    <img src="../../assets/logo.png" alt="">
    <h1>这是preload初始化页面</h1>
    <p>程序初始化的 动画页面</p>
    <p>可以获取本地存储的信息</p>
    <p>判断用户是否登录等操作</p>
    <p>……</p>
    在 HBuilder中修改 vue模板
    <!-- 初始化页面 -->
  </div>
</template>

<script>
export default {
  name: 'preload'
}
</script>

<style>
</style>
