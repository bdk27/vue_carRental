import { createApp } from 'vue'
import carBooking from './CarBooking.vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add( faFacebook, faLine, faInstagram, faArrowUp, faHouse )


createApp(carBooking)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#carBooking')