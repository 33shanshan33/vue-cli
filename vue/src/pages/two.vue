<template>
    <div>
       
        <img src="../assets/img/01.jpg" alt="">
        <router-link to="/one">
            <mt-button type="default">跳转到第一个页面</mt-button>
        </router-link>

    </div>
</template>
<script>
export default {
    name: 'TWO',
    data() {
        return {

        }
    }
}
</script>
<style>
.mint-swipe-items-wrap > div{display: blcok;}
img{width: 100px;height: 100px;}
mt-swipe-item {
    color: red;
}
</style>


