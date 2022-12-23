<template>
  <CARentNav></CARentNav>
  <CARentHome></CARentHome>
  <CARentIntro></CARentIntro>
  <CARentBanner></CARentBanner>
  <CARentServe></CARentServe>
</template>

<script>
  import CARentNav from './components/CARentNav';
  import CARentHome from './components/CARentHome';
  import CARentIntro from './components/CARentIntro';
  import CARentBanner from './components/CARentBanner';
  import CARentServe from './components/CARentServe';
  import 'animate.css';

  export default {
    name: 'App',
    components: {
      CARentNav,
      CARentHome,
      CARentIntro,
      CARentBanner,
      CARentServe,
    }

  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans TC', sans-serif;
    }
    html {
      font-size: 62.5%;
    }
    section {
      padding: 5rem 0;
    }

</style>
