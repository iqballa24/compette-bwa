<template>
    <div class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="h1-hero">Build Your Career. </h1>
                    <h1 class="h1-hero mb-5">Grow Together & Faster.</h1>
                    <a href="#" class="btn-primary">Explore More</a>
                </div>
                <div class="col-12 text-center hero-image">
                    <img src="../assets/illustration.svg" alt="Gambar ilustrasi" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>

<style scoped>
    .hero-section
    {
        background-image: url('../assets/bg.png');
        min-height: 807px;
        height: 100%;
        padding-top: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .h1-hero
    {
        color: white;
        font-size: 65px;
        line-height: 80px;
    }

    .hero-section .hero-image
    {
        top:64%;
        left: 0%;
        position: absolute;
    }

    @media (max-width: 537px) {
        .hero-section .hero-image{

        }
    }

    @media (max-width: 537px) {
        .hero-section .hero-image{
            top: 80%;
        }
    }

     @media (max-width: 768px) {
        .h1-hero{
            font-size: 48px;
        }
    }

     

</style>