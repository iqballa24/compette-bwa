<template>
  <div id="app">
    <Navbar/>
    <HeroSection/>
    <PartnerSection/>
    <ReasonSection/>
    <FeatureJobSection/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue'
import PartnerSection from './components/PartnerSection.vue'
import ReasonSection from './components/ReasonSection.vue'
import FeatureJobSection from './components/FeatureJob.vue'
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    PartnerSection,
    ReasonSection,
    FeatureJobSection
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600&display=swap');

  *
  {
    box-sizing: border-box;
  }

  body
  {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Asap', sans-serif;
  }

  h1{
    font-weight: 600;
  }

  a:hover
  {
    text-decoration: none;
  }

  .btn-primary
  {
    padding: 14px 38px;
    border-radius: 56px;
    font-weight: 600;
    color: #986121;
    background: #F2AD5F;
    transition: all .2s ease-in-out;
  }

  .btn-primary:hover
  {
    color: #88561e;
    background-color:#f5a243 ;  
  }

  @media (min-width: 992px) and (max-width: 1199.98px) { 

    .container
    {
      margin-left: 90px;
      margin-right: 90px;
    }

  }


</style>
