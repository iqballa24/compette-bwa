<template>
    <div class="job-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text-center" data-aos="zoom-in">
                        <h1 class="h1-job">Our Feature Jobs</h1><h1>That Might You Need</h1>
                    </div>
                </div>
                <div class="col-12 card-feature">
                    <div class="row" >
                        <div class="col-lg-3 col-md-6 " data-aos="zoom-in">
                            <div class="card">
                                <div class="card-body">
                                    <div class="header-c d-flex flex-row">
                                        <img class="img-fluid" src="../assets/logo-twitter.svg" alt="twitter">
                                        <div class="text">
                                            <h5 class="card-title">Twitter</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Parahyangan, Bandung</h6>
                                        </div>
                                    </div>                                    
                                    <h1 class="card-price">$190K <span>/ year</span></h1>
                                    <div class="footer-c">
                                        <h5 class="text-footer">User-Experience <br>Designer</h5>
                                        <a class="btn btn-price" href="#" role=" button">Full time</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 " data-aos="zoom-in">
                            <div class="card">
                                <div class="card-body">
                                    <div class="header-c d-flex flex-row">
                                        <img class="img-fluid" src="../assets/logo-google.svg" alt="Google">
                                        <div class="text">
                                            <h5 class="card-title">Google</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Cimahi, Bandung</h6>
                                        </div>
                                    </div>                                    
                                    <h1 class="card-price">$563K <span>/ year</span></h1>
                                    <div class="footer-c">
                                        <h5 class="text-footer">Expert Software <br>Developer</h5>
                                        <a class="btn btn-price" href="#" role=" button">Full time</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6" data-aos="zoom-in">
                            <div class="card">
                                <div class="card-body">
                                    <div class="header-c d-flex flex-row">
                                        <img class="img-fluid" src="../assets/logo-amazon.svg" alt="amazon">
                                        <div class="text">
                                            <h5 class="card-title">Amazon</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Ciputat, Jakarta</h6>
                                        </div>
                                    </div>                                    
                                    <h1 class="card-price">$921K <span>/ year</span></h1>
                                    <div class="footer-c">
                                        <h5 class="text-footer">User-Interface <br>Designer</h5>
                                        <a class="btn btn-price" href="#" role=" button">Full time</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6" data-aos="zoom-in">
                            <div class="card">
                                <div class="card-body">
                                    <div class="header-c d-flex flex-row">
                                        <img class="img-fluid" src="../assets/logo-linkedin.svg" alt="linkedin">
                                        <div class="text">
                                            <h5 class="card-title">LinkedIn</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">Parung, Bogor</h6>
                                        </div>
                                    </div>                                    
                                    <h1 class="card-price">$21K <span>/ year</span></h1>
                                    <div class="footer-c">
                                        <h5 class="text-footer">Human Resource <br>Development</h5>
                                        <a class="btn btn-price" href="#" role=" button">Full time</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="a-custom" href="#" data-aos="zoom-in">VIEW MORE INCOMING JOBS</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureJobSection'
}
</script>

<style scoped>
    .job-section{
        margin-top: 150px;
    }

    .card-feature{
        margin-top: 70px;
    }

    .card{
        border: none;
        border-radius: 16px;
    }

    .card-body{
        padding: 30px 0 30px 30px;
    }

    .card-feature .card .header-c img{
        margin-right: 16px;
    }

    .card-feature .card .header-c .card-title{
        font-size: 22px;
        color: #0F1D37; 
    }

    .card-feature .card .header-c .card-subtitle{
        font-size: 14px;
        color: #CACAD2;
    }

    .card-feature .card .card-price{
        margin: 67px auto 67px auto;
        font-size: 48px;
        color: #10495C;
        font-weight: 500;
    }

    .card-feature .card .card-price>span{
        font-size: 22px;
        color: #0F1D37;
        font-weight: 400;
    }

    .card-feature .card .footer-c .text-footer{
        color: #0F1D37;
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
    }

    .card-feature .card .footer-c .btn-price{
       margin-top: 12px;
       background: #EBFAFC; 
       color: #65D9E4;
       border-radius: 6px;
       text-transform: uppercase;
    }

    @media (max-width: 1199px) {
        h1{
            font-size: 40px;
        }
    }

    @media (max-width: 991px) {
        .card{
            margin-bottom: 20px;
        }
    }

    @media (max-width: 390px){
        h1{
            font-size: 34px;
        }
    }
    
</style>