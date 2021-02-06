<template>
    <div class="footer-section">
        <div class="container">
            <div class="row bg-footer">
                <div class="col-12 footer-content">
                    <h1 class="h1-footer">Subscribe New Job</h1>
                    <p class="p-footer">We promise never send you a spam</p>
                    <div class="search-container">
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
    name: 'Footer'
}
</script>

<style scoped>
    .footer-section{
        margin-top: 150px;
        margin-bottom: 150px;
    }

    .bg-footer{
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

    .footer-content{
        padding-top: 40px;
        padding-bottom: 57px;
    }

    .h1-footer{
        color: white;
        font-size: 26px;
        font-weight: 500;
    }

    .p-footer{
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

</style>