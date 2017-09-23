<template>
    <div>
        <mt-header title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="center_header">
            <img src="../assets/img/personal-center-portrait.png" alt="" class="person_photo">
            <p>{{usersName}}</p>
        </div>
        <div class="center-my">
            <ul>
                <li>我的单车
                    <span>0</span>
                </li>
                <li>我的售货机
                    <span>2</span>
                </li>
            </ul>
        </div>
        <template v-for="(row,index) in rows">
            <router-link :to="row.links">
                <mt-cell :title="row.title" is-link>
                    <span v-if="row.money">0.00元</span>
                    <img slot="icon" :src="row.url" width="24" height="24">
                </mt-cell>
            </router-link>
        </template>
        <!-- <ul v-for="item in newlist">
                            <li>
                                <p>{{item.name}}</p>
                                <p>{{item.title}}</p>
                            </li>
                        </ul> -->

    </div>
</template>
<script>

import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
import qs from 'qs';
export default {
    name: 'personCenter',
    created: function() {
        this.$http.post('api/getList')
            .then(function(res) {
                console.log(res)
                this.rows = res.data
                //this.newlist = res.data
            }), function(err) {
                console.log(err)
            }

    },
    props: ['usersName'],
    data() {

        return {
            rows: [],
            newlist: [
            ]
        }
    }
    ,
    methods: {
        GetURLParameter: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) { return unescape(r[2]) };
            return null;
        }

    },
    mounted: function() {
        const n = this.GetURLParameter("sta")
        console.log(n)
    }
}
</script>
<style scoped>
.mint-header {
    background: #000;
}

.center-my {
    background: #25907e;
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
</style>


