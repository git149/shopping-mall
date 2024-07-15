<template>
    <div class="login_background" v-show="show" :style="moveStyle">
        <div class="login_box">
            <div class="login">              
                <div class="login_form">
                    <span>用户名：</span>
                    <input type="text" placeholder="请输入账号" v-model.trim="username">
                    <span>密码：</span>
                    <input type="password" placeholder="请输入密码" v-model.trim="password">
                </div>
                <div class="btn">
                    <button class="login_btn" @click.prevent="submit">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // name:'Login',
    data() {
        return {
            username: '',
            password: '',
            show: true,
            moveStyle: {}
        }
    },
    methods: {
        submit: function () {
            if (this.username === localStorage['username'] && this.password === localStorage['password']) {
                this.$router.replace('/home');
                localStorage.setItem('token', 'Bearer xxx')
            } else if (this.username === '') {
                alert('用户不能为空');
                localStorage.removeItem('token')
            } else if (this.password === '') {
                alert('密码不能为空');
                localStorage.removeItem('token')
            } else {
                alert('账号不存在，请注册后登录');
                localStorage.removeItem('token')
            }
        },

    }
}

</script>

<style scoped>
.login_background {
    background-color: #3dd25e;
    border-radius: 7px;
    width: 320px;
    height: 500px;
    position: fixed;
    margin-top: -60px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
}

.login_form {
    padding: 20px;
    /* color: white; */

}

.login_box {
    padding: 72px 0px;
}

.login_btn:hover {
    box-shadow: 2px 2px 15px 2px rgb(37, 43, 48);
    background-color: transparent;
    color: white;
    /* 选择动画 */
    animation: login_mation 0.5s;
}

.login_btn {
    background-color: rgba(255, 255, 255, 0.582);
    border: 1px solid rgb(0, 85, 255);
    padding: 10px;
    width: 150px;
    height: 60px;
    border-radius: 30px;
    font-size: 20px;
    color: rgb(25, 150, 181);
    font-weight: 100;
    margin-top: 15px;
    margin-left: 75px;
}

.login_form input {
    background-color: transparent;
    width: 250px;
    padding: 2px;
    text-indent: 2px;
    color: white;
    font-size: 20px;
    height: 45px;
    margin: 30px 30px 30px 5px;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgb(36, 42, 45);
}

.login_form span {
    color: rgb(20, 176, 158);
    font-size: 20px;
    font-weight: 400;
}
</style>