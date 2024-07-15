<template>
    <div class="welcome">
        <el-card class="background_box">
            <jingdongmark ref="login" :title_1="leftTitle.title_1" :title_2="leftTitle.title_2"
                :title_3_1="leftTitle.title_3_1" :title_3_2="leftTitle.title_3_2" :cover="leftTitle.cover"
                :buttonTitle="leftTitle.buttonTitle" @change=toLogin>
            </jingdongmark>
            <jingdongmark ref="register" :title_1="rightTitle.title_1" :title_2="rightTitle.title_2"
                :title_3_1="rightTitle.title_3_1" :title_3_2="rightTitle.title_3_2" :cover="rightTitle.cover"
                :buttonTitle="rightTitle.buttonTitle" @change=toRegister>
            </jingdongmark>
            <Login ref="loginRef"></Login>
            <Register ref="registerRef" @toLogin="toLogin"></Register>
        </el-card>
    </div>
</template>
<script>
    import jingdongmark from './jingdongmark'
    import Login from './login'
    import Register from './register'
    export default {
        name: 'Welcome',
        components: {
            jingdongmark,
            Login,
            Register
        },
        data() {
            return {
                leftTitle: {
                    title_1: 'WELCOME&',
                    title_2: 'YOUE SHANGPIN',
                    title_3_1: 'Pick your perfect ',
                    title_3_2: 'cake',
                    cover: require('./images/cover1.jpg'),
                    buttonTitle: '去登陆'
                },
                rightTitle: {
                    title_1: 'WELCOME&',
                    title_2: 'YOUE SHANGPIN',
                    title_3_1: 'Pick your perfect ',
                    title_3_2: 'cake',
                    cover: require('./images/cover2.jpg'),
                    buttonTitle: '去注册'
                },
            }
        },
        methods: {
            toLogin() {
                this.$refs.loginRef.show = true
                this.$refs.registerRef.show = false
                setTimeout(() => {
                    this.$refs.loginRef.moveStyle = {
                        transform: 'translateX(0px)'
                    }
                    this.$refs.registerRef.moveStyle = {
                        transform: 'translateX(0px)'
                    }
                }, 10)
            },
            toRegister() {
                this.$refs.loginRef.show = false
                this.$refs.registerRef.show = true
                setTimeout(() => {
                    this.$refs.loginRef.moveStyle = {
                        transform: 'translateX(300px)'
                    }
                    this.$refs.registerRef.moveStyle = {
                        transform: 'translateX(300px)'
                    }
                }, 10)
            },
        }
    }
</script>

<style scoped>
    .welcome {
        height: 100%;
        margin:0px;
        background: url(./images/beijing.png);
        background-size:100% 100%;
        background-attachment:fixed;
        }

    .background_box {
        width: 660px;
        height: 420px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: visible;
    }
</style>