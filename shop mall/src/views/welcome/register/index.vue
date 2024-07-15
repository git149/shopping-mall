<template>
  <div class="register_background" v-show="show" :style="moveStyle">
    <div class="register_box">
        <div class="login ">
          <div class="login_form">
            <span>用户名：</span>
            <input type="text" placeholder="请输入用户名" v-model.trim="username">          
            <span>密码：</span>
            <input type="password" placeholder="请输入密码" v-model.trim="password">
          </div>
          <div class="btn">
            <button class="login_btn" @click.prevent="register">注册</button>
          </div>
        </div>     
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
      moveStyle: {}
    };
  },
  methods: {
    register: function () {
      if (localStorage['username'] === this.username) {
        alert("用户名已存在")
        this.$router.replace('/welcome');
        localStorage.setItem('token', 'Bearer xxx')
      } else if (this.username === '') {
        localStorage.removeItem('token')
        alert("用户名不能为空")
      } else if (this.password === '') {
        localStorage.removeItem('token')
        alert("密码不能为空")
      }else {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        alert("注册成功！")
        this.$router.replace('/welcome');
      }
    },

  }
};

</script>

<style scoped>
.register_background {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(19, 144, 57, 0.776);
  border-radius: 7px;
  width: 320px;
  height: 500px;
  position: fixed;
  margin-top: -60px;
  transition: all 0.5s;
}

.login_form {
  padding: 20px;
  /* color: white; */

}


.register_box {
  padding: 72px 0px;
}



.login_btn:hover {
  box-shadow: 2px 2px 15px 2px rgb(47, 80, 107);
  background-color: transparent;
  color: white;
  /* 选择动画 */
  animation: login_mation 0.5s;
}

.login_btn {
  background-color: rgba(255, 255, 255, 0.582);
  border: 1px solid rgb(255, 0, 0);
  padding: 10px;
  width: 150px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  color: rgb(170, 151, 26);
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
  color: rgba(83, 6, 52, 0.421);
  font-size: 20px;
  font-weight: 400;
}
</style>