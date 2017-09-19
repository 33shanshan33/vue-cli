<template>
    <div>
        <mt-header title="收支明细">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div @click="openPicker" class="timeBox">
            <img src="../assets/img/asset-detail-time.png" alt="" width="30px">
            <span>选择时间</span>
            <img src="../assets/img/asset-detail-arrdown1.png" alt="" width="17px">

        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">收入</mt-tab-item>
            <mt-tab-item id="2">支出</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <p>11111</p>
               
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <p>2222</p>
               
            </mt-tab-container-item>
          
        </mt-tab-container>

        <mt-datetime-picker ref="picker" v-model="pickerVisible" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">

        </mt-datetime-picker>

    </div>
</template>
<script>
export default {
    name: 'incomeDetail',
    data() {
        return {
            pickerVisible: '',
            time: '',
            selected: '1'

        }
    },
    methods: {
        openPicker() {
            this.$refs.picker.open();        
        }
        ,
        handleConfirm(value) {
            this.time = this.fromNowtime(value);
        },
        fromNowtime(now) {
            var d = new Date(now);
            return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        }
    }
}
</script>
<style scoped>
.mint-header {
    background: #000;
}

.center-my {
    background: #fff;
    font-size: 0.36rem;
    color: #fff;
    padding: 5px 0;
    overflow: hidden;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 10px;
}

.btnBox,
.msgBox {
    overflow: hidden;
}

.msgBox {
    padding: 10px 0;
}

.center-my .btnBox li {
    float: left;
    width: 50%;
    text-align: center;
    box-sizing: border-box;

    line-height: 40px;
    font-size: 0.26rem;
}

.center-my .msgBox li {
    float: left;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    font-size: 0.26rem;
}


.center-my .btnBox li span {
    padding: 10px 40px;
    border: 1px solid #06816c;
    color: #06816c;
    font-size: 0.24rem;
    border-radius: 5px;
}

.center_header {
    padding: 20px 0;
    background: #fff;
}

.person_photo {
    width: 60px;
    display: block;
    margin: 0px auto;
}

.money_num {
    font-size: 0.6rem;
    text-align: center;
    color: #fff;
}

.money_txt {
    font-size: 0.12rem;
    text-align: center;
    color: #fff;
}

.timeBox {
    text-align: center;
    padding: 20px 0;
}

.timeBox span {
    display: inline-block;
    line-height: 30px;
    vertical-align: top;
    font-size: 0.24rem;
}
</style>


