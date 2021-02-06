 <template>
    <div class="partner-section">
        <div class="container">
            <div class="row text-center d-flex d-flex justify-content-center">
                <div class="img-partner col-6 col-lg-3 col-sm-4">
                    <img class="img-fluid" src="../assets/Facebook.svg" alt="">
                </div>
                <div class="img-partner col-6 col-lg-3 col-sm-4">
                    <img class="img-fluid" src="../assets/microsoft.svg" alt="">
                </div>
                <div class="img-partner col-6 col-lg-3 col-sm-4">
                    <img class="img-fluid" src="../assets/google.svg" alt="">
                </div>
                <div class="img-partner col-6 col-lg-3 col-sm-4">
                    <img class="img-fluid" src="../assets/spotify.svg" alt="">
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script>
 export default {
     name: 'PartnerSection'
 }
 </script>
 
 <style scoped>
    .partner-section{
        margin-top: 260px;
    }

    @media (max-width: 992px) {
        .partner-section .img-partner {
            margin-top: 15px;
        }
    }

    @media (max-width: 530px) {
        .partner-section{
            margin-top: 200px;
        }
    }

    @media (max-width: 425px){
        .partner-section{
            margin-top: 130px;
        }
    }

 </style>