import { createApp } from 'vue'
import App from './App.vue'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapLocationDot, faCalendarDays, faCar, faGauge, faInfinity, faClock, faLock, faShield } from '@fortawesome/free-solid-svg-icons'
library.add(faMapLocationDot, faCalendarDays, faCar, faGauge, faInfinity, faClock, faShield, faLock)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
