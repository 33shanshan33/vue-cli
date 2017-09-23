<template>
    <div>
        <mt-header title="我的资产">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="center-my">
            <ul class="msgBox">
                <li>
                    <img src="../assets/img/asset-cash-icon1.png" alt="" width="50px">
                    <p style="color:#212121;padding:10px 0;">现金</p>
                </li>
                <li>
                     <p style="font-size:1rem;color:#212121;">32.00</p>
                </li>
            </ul>
            <ul class="btnBox">
                <li>
                    <span>充值</span>
                </li>
                <li>
                     <span>提现</span>
                </li>
            </ul>
        </div>
        <div class="center-my">
            <ul class="msgBox">
                <li>
                    <img src="../assets/img/asset-cash-icon4.png" alt="" width="40px">
                    <p style="color:#212121;padding:10px 0;">售纸机</p>
                </li>
                <li>
                     <p style="font-size:0.8rem;color:#ff5252;">123.00</p>
                </li>
            </ul>
            <ul class="btnBox">
                <li>
                    <span>认购</span>
                </li>
                <li>
                     <span>赎回</span>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
export default {
    data() {
        return {

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
    border-bottom:1px solid #d9d9d9;
    margin-bottom:10px;
}
.btnBox,.msgBox{overflow:hidden;}
.msgBox{padding:10px 0;}
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
   padding:10px 40px;
   border:1px solid #06816c;
   color:#06816c;
   font-size:0.24rem;
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
</style>


