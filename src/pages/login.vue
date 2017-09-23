<template>
    <div>
        <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="logoBox">
            <img src="../../static/img/logo.png" width="120px">
        </div>
        <form action="aa" id="myform">
            <mt-field label="姓名" placeholder="请输入姓名" v-model="username" id="username"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" id="phone"></mt-field>

            <mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
                <span class="getNum">获取验证码</span>
            </mt-field>
           
                <mt-button type="default" class="confirm_btn" @click="loginMsd">登录</mt-button>
            
        </form>
        <!-- <personCenter :usersName="username">123</personCenter> -->

    </div>
</template>
<script>
import personCenter from './personCenter.vue'
import axios from 'axios';
import qs from 'qs';
import { MessageBox } from 'mint-ui';
export default {

    name: 'login',
    data() {
        return {
            username: '',
            phone: '',
            captcha: '',
            links: '',

        }
    },
    components: {
        personCenter
    },
    mounted: function() {


    },
    methods: {
        loginMsd: function() {
            var myName = $(".mint-field-core").eq(0).val();
            var myCall = $(".mint-field-core").eq(1).val();
            var that = this;
            if (myCall.length > 11 || myCall.length == '') {
                MessageBox('提示', '请填写正确的手机号');
                return;
            } 
            // else {
            //     that.links = "personCenter?sta=" + myName
            // }
            console.log(myName)
            console.log(myCall)

            $.ajax({
                url: 'http://118.190.8.134:9000/gms/userInfo',
                method: 'post',
                dataType: 'jsonp',
                jsonp: "jsoncallback",
                jsoncallback: "success_jsoncallback",
                data: {
                    name: myName,
                    call: myCall
                },
                success: function(res) {
                    //alert(that.links)
                    //that.links="personCenter"

                    // window.location="./personCenter"
                    console.log(res);
                    that.router.go('/personCenter');
                },
                error: function(err) {
                    console.log(err)
                }
            })


        }
    }
}
</script>
<style scoped>
.mint-header {
    background: #00856e;
}

.logoBox {
    width: 100%;
    padding: 20px 0;
    background: #fff;
    text-align: center;
    margin-bottom: 10px;
}

.getNum {
    color: #595959;
    cursor: pointer;
}

mt-field .mint-cell-wrapper {
    background-image: none;
}

.mint-button--default {
    display: block;
    width: 100%;
    height: 44px;

    text-align: center;
    border-radius: 4px;
    color: #fff;
    line-height: 44px;
}

.confirm_btn {
    margin: 30px auto;
    background: #00856e;
}
</style>




