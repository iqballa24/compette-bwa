<template>
    <div class="reason-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <img class="img-fluid" src="../assets/gallery.png" alt="image galery" style="width: 95%;">
                </div>
                <div class="col-lg-6">
                    <h1 class="h1-reason">We help best people <br> like you across the world</h1>
                    <ul class="list-reason">
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Mastering work-life-balance</li>
                        <li class="list-group-item"><img src="../assets/dot-yellow.svg" alt=""> Find the job based on your skills</li>
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Helping preparing the paperwork</li>
                        <li class="list-group-item"><img src="../assets/dot-yellow.svg" alt=""> 24/7 Best worker support</li>
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Trusted payment protection</li>
                    </ul>
                    <div class="more">
                        <a class="a-custom" href="#">LEARN MORE ABOUT OUR BENEFIT</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ReasonSection' 
    }
</script>

<style scoped>
    .reason-section{
        margin-top: 150px;
    }

    .h1-reason{
        color: #0F1D37;
        font-size: 48px;
        line-height: 65px;
    }

    .list-reason{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    ul li.list-group-item{
        border: none;
        color: #0F1D37;
        background: #FAFAFF;
        font-size: 22px;
        font-weight: 400;
        margin-left: -60px;
    }

    @media (max-width: 992px) {
       .h1-reason{
           margin-top: 30px;
           text-align: center;
       } 
    }

    @media (max-width: 1199px) {
        .h1-reason{
            font-size: 40px;
        }
    }

</style>