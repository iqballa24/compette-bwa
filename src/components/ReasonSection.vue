<template>
    <div class="reason-section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="img-fluid" src="../assets/gallery.png" alt="image galery">
                </div>
                <div class="col">
                    <h1 class="h1-reason">We help best people like you across the world</h1>
                    <ul>
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Mastering work-life-balance</li>
                        <li class="list-group-item"><img src="../assets/dot-yellow.svg" alt=""> Find the job based on your skills</li>
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Helping preparing the paperwork</li>
                        <li class="list-group-item"><img src="../assets/dot-yellow.svg" alt=""> 24/7 Best worker support</li>
                        <li class="list-group-item"><img src="../assets/dot-green.svg" alt=""> Trusted payment protection</li>
                    </ul>
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

<style>
    .reason-section{
        margin-top: 150px;
    }

    .h1-reason{
        margin-bottom: 50px;
        color: #0F1D37;
        font-size: 48px;
        line-height: 65px;
    }

    ul li.list-group-item{
        border: none;
        color: #0F1D37;
        font-size: 22px;
        font-weight: 400;
    }
</style>