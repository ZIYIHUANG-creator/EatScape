<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const cards = [
  {
    icon: "🍜",
    title: "营养识别",
    desc: "拍照识别食物，获取营养信息",
    path: "/identification"
  },
  {
    icon: "🗺️",
    title: "美食地图",
    desc: "发现附近特色美食",
    path: "/map"
  },
  {
    icon: "💚",
    title: "健康管理",
    desc: "记录饮食，管理健康",
    path: "/health"
  },
  {
    icon: "💬",
    title: "创新互动",
    desc: "分享美食体验",
    path: "/interaction"
  }
]

const goPage = (path)=>{
  router.push(path)
}
</script>

<template>
  <div class="home">

    <!-- 顶部导航 -->
    <header class="header">
      <div class="logo">风物食鉴</div>

      <nav class="nav">
        <a @click="goPage('/identification')">Identification</a>
        <a @click="goPage('/map')">Map</a>
        <a @click="goPage('/health')">Health</a>
        <a @click="goPage('/interaction')">Interaction</a>
      </nav>
    </header>

    <!-- Hero大图 -->
    <section class="hero">
      <div class="hero-content">
        <h1>
          识一方风物，鉴一味营养，<br/>
          记一路美食，守一身健康。
        </h1>

        <button class="hero-btn" @click="goPage('/identification')">
       立即识别，吃出健康
        </button>
      </div>
    </section>

    <!-- slogan -->
    <section class="slogan">

  <h2>探索地方美食的营养密码</h2>

  <p>
    识别地方美食 · 记录风味足迹 · 管理健康饮食 · 分享美食故事
  </p>

</section>

    <!-- 功能卡片 -->
    <section class="cards">

      <div 
  class="card"
  v-for="item in cards"
  :key="item.title"
  @click="goPage(item.path)"
>

        <div class="icon">
          {{ item.icon }}
        </div>

        <h3>{{ item.title }}</h3>

        <p>{{ item.desc }}</p>

      </div>

    </section>

  </div>
</template>

<style scoped>

.home{
  min-height:100vh;

  background-color:#f6efe5;

  /* 祥云纹理 */
  background-image:url("https://www.transparenttextures.com/patterns/chinese-pattern.png");

  background-repeat:repeat;
}

/* ---------- 导航栏 ---------- */

.header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:16px 80px;

  background:white;
  box-shadow:0 2px 6px rgba(0,0,0,0.05);
}

.logo{
  font-size:20px;
  font-weight:600;
}

.nav{
  display:flex;
  gap:30px;
}

.nav a{
  color:#333;
  cursor:pointer;
}

.user{
  color:#333;
}

/* ---------- hero ---------- */

/* ---------- hero ---------- */

.hero{
  position:relative;
  height:420px;
  background-image:url('/images/food-banner.jpg');
  background-size:cover;
  background-position:center;

  display:flex;
  align-items:center;
  justify-content:center;
}

/* 图片暗化遮罩 */
.hero::before{
  content:"";
  position:absolute;
  inset:0;
  background:rgba(0,0,0,0.35);
}

.hero-content{
  position:relative;
  text-align:center;
  color:white;
}

.hero-content h1{
  font-size:32px;
  line-height:1.6;
}

.hero-btn{

  margin-top:20px;

  background:#e67e22;

  color:white;

  border:none;

  padding:12px 28px;

  border-radius:30px;

  font-size:16px;

  cursor:pointer;

  transition:all .25s;
}

.hero-btn:hover{

  background:#cf6d17;

  transform:translateY(-2px);
}

/* ---------- slogan ---------- */

.slogan{

  text-align:center;

  margin:60px 0 30px;

  color:#5a3e2b;
}

.slogan h2{

  font-size:28px;

  margin-bottom:12px;
}

.slogan p{

  font-size:16px;

  color:#7a5c46;
}

/* ---------- cards ---------- */

.cards{
  width:800px;
  margin:0 auto;

  display:grid;
  grid-template-columns:repeat(2,1fr);

  gap:24px;

  padding:20px 0 80px;
}

.card{

  background:white;

  border-radius:12px;

  padding:22px;

  border:1px solid #e6d5c3;

  box-shadow:0 4px 10px rgba(0,0,0,0.05);

  min-height:120px;

  transition:all .25s;
}

.card:hover{

  transform:translateY(-4px);

  box-shadow:0 8px 20px rgba(0,0,0,0.12);

  border-color:#e67e22;
}

.icon{

  font-size:32px;

  margin-bottom:10px;
}

.card h3{

  margin:8px 0;

  font-size:20px;
}

.card p{

  color:#666;

  line-height:1.6;
}
.card{
  cursor:pointer;
  transition:all 0.25s;
}

.card:hover{
  transform:translateY(-6px);
  box-shadow:0 10px 25px rgba(0,0,0,0.15);
}

</style>