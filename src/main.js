import Vue from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

AOS.init();

// Change color when scroll
const nav = document.getElementById('bg-darkblue');
const textnav = document.querySelectorAll('.nav-link');

window.onscroll = (()=> {
    for (let x = 0; x < textnav.length; x++) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            textnav[x].classList.add('scrolled');        
        } else {
            nav.classList.remove('scrolled');
            textnav[x].classList.remove('scrolled');
        }
    } 
});
