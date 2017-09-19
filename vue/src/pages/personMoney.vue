<template>
    <div id="person">
        <mt-header title="资产管理">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="center_header">
            <p class="money_num">3.62</p>
            <p class="money_txt">昨日纸巾收益：元</p>
        </div>
        <div class="center-my">
            <ul>
                <li>7天累计
                    <span>0.22元</span>
                </li>
                <li>7天年化
                    <span>0.002%</span>
                </li>
            </ul>
        </div>
        
        <router-link  to="/myMoney">
       
        <mt-cell title="aa" is-link>
            <img slot="icon" src="../assets/img/asset-icon1.png" width="24" height="24">
        </mt-cell>
        
        </router-link>
        <router-link  to="/incomeDetail">
        <mt-cell title="收支明细" is-link>
            <img slot="icon" src="../assets/img/asset-icon2.png" width="24" height="24">
        </mt-cell>
        </router-link>        
        <mt-cell title="账户预留" is-link>
            <img slot="icon" src="../assets/img/asset-icon3.png" width="24" height="24">
        </mt-cell>

    </div>
</template>
<script>
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
export default {
  
    date() {
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
    background: #06816c;
    font-size: 0.36rem;
    color: #fff;
    padding: 5px 0;
    overflow: hidden;
}

.center-my li {
    float: left;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    font-size: 0.26rem;
}

.center-my li:nth-of-type(1) {
    border-right: 1px solid #fff;
}

.center-my li span {
    padding-left: 10px;
}

.center_header {
    padding: 20px 0;
    background: #06816c;
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


