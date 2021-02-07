<template>
    <div class="subscribe-section">
        <div class="container">
            <div class="row">
                <div class="col-12 subscribe-content bg-subscribe">
                    <h1 class="h1-subscribe" data-aos="zoom-in">Subscribe New Job</h1>
                    <p class="p-subscribe" data-aos="zoom-in">We promise never send you a spam</p>
                    <div class="search-container" data-aos="zoom-in">
                        <input placeholder="Type your email address" id="searchElement" type="search">
                        <button id="searchButtonElement" type="submit">Count Me In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribeSection'
}
</script>

<style scoped>
    .subscribe-section{
        margin-top: 150px;
        margin-bottom: 150px;
    }

    .bg-subscribe{
        background: #10495C;
        background-image: url('../assets/Union.svg');
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 750px;
        height: 100%;
        border-radius: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .subscribe-content{
        padding-top: 40px;
        padding-bottom: 57px;
    }

    .h1-subscribe{
        color: white;
        font-size: 26px;
        font-weight: 500;
    }

    .p-subscribe{
        color: #B0C3C9;
        font-size: 16px;
        font-weight: 400;
    }

    .search-container{
        margin-top: 50px;
        margin-right: auto;
        margin-left: auto;
        max-width: 519px;
        max-height: 45px;
        display: flex;
        background-color: white;
        border-radius: 90px;
    }

    .search-container > input {
        width: 70%;
        max-height: 45px;
        padding: 16px;
        border: none;
        border-radius: 9px;
    }

    .search-container > input:focus {
        outline: 0;
    }

    .search-container > input:focus::placeholder {
        color: #babac2;
    }

    .search-container >  input::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #CACAD2;
    }

    .search-container > button {
        width: 32%;
        cursor: pointer;
        margin-left: auto;
        background-color: #F2AD5F;
        color: #986121;
        font-size: 16px;
        font-weight: 500;
        border: 0;
        border-radius: 56px;
    }

    @media (max-width: 575px){
        .bg-subscribe{
            border-radius: 0px;
        }
    }

    @media (max-width: 370px){
        .search-container > button {
            font-size: 12px;
        }

        .search-container >  input::placeholder {
            font-size: 14px;
            font-weight: 400;
            color: #CACAD2;
        }
    }

</style>