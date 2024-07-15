<template>
    <div>
        <el-row class="row_box">
            <el-col :span="15" :offset="2">
                <div class="title" @click="toHome">Your PersonalShangCheng</div>
            </el-col>
            <el-col :span="2.5">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="#dddddd"
                    text-color="#0000ff" active-text-color="bule">
                    <el-menu-item index="home">商城</el-menu-item>
                    <el-menu-item index="shoppingCart">订单</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="2">
                <el-dropdown @command="handleDownBoxCommand">
                    <span class="el-dropdown-link">               
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
            activeIndex: 'home'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key == 'home') {
                this.$router.push('/home')
            } else if (key == 'shoppingCart') {
                this.$router.push('/shoppingCart')
            }
        },
        handleDownBoxCommand(command) {
            if (command === 'logout') {
                this.logout();
            }
        },
        logout() {
            this.$message({
                type: 'success',
                message: '退出成功'
            })
            this.$router.push('/welcome')
        },
        toHome() {
            this.$router.push('/home')
        }
    },
    
    watch: {
        $route(to, from) {
            if (to.name == 'Home') {
                this.activeIndex = 'home'
            } else if (to.name == 'ShoppingCart') {
                this.activeIndex = 'shoppingCart'
            } else {
                this.activeIndex = ''
            }
        }
    },
}
</script>

<style scoped>
/** 背景颜色（头部）*/
.row_box {
    background-color: rgb(34, 128, 159);
}

/**网站名称 */
.title {
    letter-spacing: 2px;
    font-size: 25px;
    color: #1b3c71;
    float: left;
    font-weight: 600;
    font-family: "Lucida Calligraphy", cursive, serif, sans-serif ;
    font-style: normal;
    line-height: 61px;
}

/**登入名*/
.el-dropdown-link {
    cursor: pointer;
    color: #1d3215;
    font-size: 25px;
    line-height: 61px;
}

.el-icon-arrow-down {
    font-size: 10px;
}
</style>
