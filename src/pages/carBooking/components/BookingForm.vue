<template>
    <section>
        <div class="container shadow">
            <h5>預約租車/Rental Services</h5>

            <div class="row row-cols-sm-1 mb-3 g-3">
                <div class="col">
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>選擇租車地點</option>
                        <optgroup label="台北市">
                            <option value="">台北大橋站</option>
                            <option value="">台北公館站</option>
                            <option value="">台北火車站</option>
                            <option value="">台北松山站</option>
                            <option value="">台北美麗華站</option>
                        </optgroup>
                        <optgroup label="新北市">
                            <option value="">捷運三民高中站</option>
                            <option value="">新北三重站</option>
                            <option value="">新北中和站</option>
                            <option value="">新北板橋站</option>
                        </optgroup>
                        <optgroup label="宜蘭縣">
                            <option value="">宜蘭站</option>
                        </optgroup>
                        <optgroup label="桃園市">
                            <option value="">桃園大園站</option>
                            <option value="">桃園中山站</option>
                            <option value="">桃園機場一航站</option>
                            <option value="">桃園機場二航站</option>
                        </optgroup>
                        <optgroup label="新竹市">
                            <option value="">新竹中華站</option>
                        </optgroup>
                        <optgroup label="新竹縣">
                            <option value="">新竹高鐵竹北站</option>
                        </optgroup>
                        <optgroup label="台中市">
                            <option value="">台中中港站</option>
                            <option value="">台中火車站</option>
                            <option value="">台中高鐵站(新烏日)</option>
                            <option value="">台中綠川站</option>
                        </optgroup>
                        <optgroup label="台南市">
                            <option value="">台南北門站</option>
                        </optgroup>
                        <optgroup label="高雄市">
                            <option value="">左營高鐵站</option>
                            <option value="">高雄三多站</option>
                            <option value="">高雄火車站</option>
                            <option value="">高雄航空站</option>
                        </optgroup>
                        <optgroup label="花蓮縣">
                            <option value="">花蓮站</option>
                        </optgroup>
                        <optgroup label="台東縣">
                            <option value="">台東站</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col">
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>選擇還車地點</option>
                        <optgroup label="台北市">
                            <option value="">台北大橋站</option>
                            <option value="">台北公館站</option>
                            <option value="">台北火車站</option>
                            <option value="">台北松山站</option>
                            <option value="">台北美麗華站</option>
                        </optgroup>
                        <optgroup label="新北市">
                            <option value="">捷運三民高中站</option>
                            <option value="">新北三重站</option>
                            <option value="">新北中和站</option>
                            <option value="">新北板橋站</option>
                        </optgroup>
                        <optgroup label="宜蘭縣">
                            <option value="">宜蘭站</option>
                        </optgroup>
                        <optgroup label="桃園市">
                            <option value="">桃園大園站</option>
                            <option value="">桃園中山站</option>
                            <option value="">桃園機場一航站</option>
                            <option value="">桃園機場二航站</option>
                        </optgroup>
                        <optgroup label="新竹市">
                            <option value="">新竹中華站</option>
                        </optgroup>
                        <optgroup label="新竹縣">
                            <option value="">新竹高鐵竹北站</option>
                        </optgroup>
                        <optgroup label="台中市">
                            <option value="">台中中港站</option>
                            <option value="">台中火車站</option>
                            <option value="">台中高鐵站(新烏日)</option>
                            <option value="">台中綠川站</option>
                        </optgroup>
                        <optgroup label="台南市">
                            <option value="">台南北門站</option>
                        </optgroup>
                        <optgroup label="高雄市">
                            <option value="">左營高鐵站</option>
                            <option value="">高雄三多站</option>
                            <option value="">高雄火車站</option>
                            <option value="">高雄航空站</option>
                        </optgroup>
                        <optgroup label="花蓮縣">
                            <option value="">花蓮站</option>
                        </optgroup>
                        <optgroup label="台東縣">
                            <option value="">台東站</option>
                        </optgroup>
                    </select>
                </div>
            </div>

            <div class="row row-cols-sm-2 row-cols-md-4 mb-5 g-3">
                <div class="col-12">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">租車日期</span>
                        <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon2">租車時間</span>
                        <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2">
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group">
                        <span class="input-group-text return" id="basic-addon3">還車日期</span>
                        <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon3">
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group">
                        <span class="input-group-text return" id="basic-addon4">還車時間</span>
                        <input type="time" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon4">
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button type="submit">查看車款</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BookingForm',
    }
</script>

<style lang='scss' scoped>
    $blue: #003060;
    $yellow: #ffc107;

    .container {
        padding: 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        h5 {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
            padding: 1rem;
            margin-bottom: 2rem;
            color: $blue;
        }
        select {
            font-size: 1.6rem;
        }
        span {
            font-size: 1.6rem;
            background-color: #ECF5FF;
        }
        .return {
            background-color:#FFECEC;
        }
        input {
            font-size: 1.6rem;
        }
        button {
            font-size: 1.6rem;
            padding: 1rem 2rem;
            border: 1px solid $blue;
            background: transparent;
            color: $blue;
            border-radius: 5px;
            &:hover {
                background: $blue;
                color: #fff;
                transition: .5s;
            }
        }
    }
</style>