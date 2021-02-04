<template>
    <header>
        <nav class="navbar fixed-top bg-navbar navbar-expand-lg ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" class="d-inline-block align-top" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto p-3">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Learn <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Partner</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Investor</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    .bg-navbar{
        background-color: transparent;
    }

    .navbar ul li.nav-item a{
        color: #B0C3C9;
        margin-right: 25px;
    }

    .navbar ul li.nav-item a:hover{
        color: #F2AD5F;
    }

    .navbar ul li.nav-item.active a{
        color: #F2AD5F;
        border-bottom: 1px solid #F2AD5F;
    }
</style>