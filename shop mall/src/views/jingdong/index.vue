<template>
    <div class="cake">
        <el-card class="cake_card">
            <el-divider content-position="left">{{cake.shiwuName}}</el-divider>
            <el-row>
                <el-col :span="5">
                    <img :src="cake.cover" alt="图片加载出错" class="cover">
                </el-col>
                <el-col :span="19">
                    <div class="information">类型：{{cake.type}}</div>
                   
                    <div class="information">价格：{{cake.price}}元</div>
                    <div class="information">库存：59件</div>
                </el-col>
            </el-row>
            <el-card class="description_box">
                <div class="title">
                    商品介绍
                </div>
                <div class="description">
                    {{cake.description}}
                </div>
            </el-card>
            <el-button type="success" class="shoppingCart" @click="addCart" plain icon="el-icon-shopping-cart-2">加入购物车</el-button>
        </el-card>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'cake',
        data() {
            return {
            }   
        },
        methods: {
            addCart() {
                this.$store.commit('ADDCART',this.cake)
                this.$message({
                    type:'success',
                    message:'添加购物车成功'
                });
            }
        },
        computed: {
            ...mapState({
                cake: (state) => state.cake,
            }),
        },
    }
</script>

<style scoped>
    .cake {
        background-color: #eee;
        display: flex;
        justify-content: center;
    }

    .cake_card {
        margin: 30px 0px;
        width: 900px;
    }

    .el-divider__text {
        font-size: 20px;
        font-weight: 600;
    }

    .cover {
        width: 100%;
    }

    .information {
        font-size: 16px;
        padding: 16px 0px;
        padding-left: 25px;
    }

    .description_box {
        margin-top: 30px;
    }

    .description {
        margin-top: 20px;
        font-size: 15px;
        line-height: 30px;
    }

    .title {
        font-size: 20px;
        color: #27ae60;
    }

    .shoppingCart {
        margin: 25px 0px;
        float: right;
    }
</style>