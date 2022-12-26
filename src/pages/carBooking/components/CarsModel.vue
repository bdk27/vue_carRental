<template>
    <section>
        <div class="container">
            <h3>車款介紹</h3>
            <div class="row row-cols-sm-2 row-cols-md-3 g-5">
                <div class="col-12" v-for="item in vehicle.sedan" :key="item.id">
                    <div class="card p-3">
                        <img :src="item.img" class="card-img-top p-5">
                        <div class="card-body">
                            <h4 class="card-title">{{ item.name }}</h4>
                            <div class="card-text">
                                <div class="d-flex align-items-center justify-content-between py-2 text-secondary">
                                    <div><font-awesome-icon icon="fa-solid fa-car" class="icon"/>{{ item.cc }}cc</div>
                                    <div><font-awesome-icon icon="fa-solid fa-users" class="icon"/>{{ item.number }}</div>
                                    <div><font-awesome-icon icon="fa-solid fa-gear" class="icon"/>{{ item.system }}</div>
                                    <div><font-awesome-icon icon="fa-solid fa-gas-pump" class="icon"/>{{ item.gas }}</div>
                                </div>
                                <p>{{ item.content }}</p>
                            </div>
                            <div class="card-bottom d-flex align-items-center justify-content-between">
                                <h4>NT$ <span>{{ item.price }}</span>/日</h4>
                                <a href="#">我要預約</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { reactive } from 'vue'
    import { sedan } from '../../../assets/js/vehicle'

    export default {
        name: 'CarsModel',
        setup() {
            const vehicle = reactive({
                sedan,
            });
            
            return {
                vehicle,
            }
        }   
    }
</script>

<style lang='scss' scoped>
    $blue: #003060;
    $yellow: #ffc107;

    h3 {
        text-align: center;
        font-size: 3rem;
        color: $blue;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    .card-title {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2rem;
    color: $blue;
    }
    .card-text  {
        font-size: 1.6rem;
        .icon {
            margin-right: .5rem;
        }
    }
    .card-bottom {
        span {
            color: red;
            font-size: 2rem;
        }
        a {
            font-size: 1.6rem;
            color: $blue;
            background: $yellow;
            padding: 1rem;
            text-decoration: none;
            border-radius: 5px;
            &:hover {
                background-color:#FFD306;
            }
        }
    }
   
</style>