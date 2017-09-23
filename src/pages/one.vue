<template>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-field label="用户名" placeholder="请输入用户名">
        </mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type=""></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type=""></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type=""></mt-field>
        <router-link to="/two">
            <mt-button type="default" class="confirm_btn">提交</mt-button>
        </router-link>
        <mt-button type="default" @click="alertbox">点击事件</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name: 'indexpage',
    data() {
        return {

        }
    },
    methods: {
        alertbox: function() {
            Toast({
                message: '操作成功',
                iconClass: 'icon icon-success'
            });
        }
    }
}
</script>
<style lang="css">
@import '../assets/css/base.css';
#sg,
body {
    margin: 0;
}

.mint-field-core,
.mint-cell-wrapper {
    font-size: 18px;
    color: #212121;
    background-image: none;
}

.mint-field {
    border-bottom: 1px solid #d9d9d9;
    font-size: 18px;
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
    background: #ca0713;
}
</style>


