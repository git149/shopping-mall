<template>
    <div class="shoppingCart">
        <el-card class="shopping_card">
            <div class="title">
                <span>购物车</span>
                <i class="el-icon-shopping-cart-full"></i>
            </div>
            <el-table class="shopping_table" :data="cart" border style="width: 100%" @selection-change="selectChange">
                <el-table-column type="selection" label="全部" width="80" align="center"></el-table-column>
                <el-table-column prop="cover" label="商品" width="width" align="center">
                    <template slot-scope="{row,$index}">
                        <img :src="row.cover" alt="图片加载错误" class="cover">
                    </template>
                </el-table-column>
                <el-table-column prop="price" label="单价（元）" width="width" align="center"></el-table-column>
                <el-table-column prop="number" label="数量" width="width" align="center">
                    <template slot-scope="{row,$index}">
                        <el-button plain icon="el-icon-minus" @click="subNumber(row)" size="mini"></el-button>
                        <span class="number">{{row.number}}</span>
                        <el-button plain icon="el-icon-plus" @click="addNumber(row)" size="mini"></el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="prop" label="小计（元）" width="width" align="center">
                    <template slot-scope="{row,$index}">
                        {{row.number*row.price}}
                    </template>
                </el-table-column>
                <el-table-column prop="date" label="操作" width="width" align="center">
                    <template slot-scope="{row,$index}">
                        <el-button type="success" @click="detail(row)">详情</el-button>
                        <el-tooltip effect="light" content="删除商品" placement="right">
                            <el-button type="danger" icon="el-icon-delete" @click="deletecake(row)"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <div class="bottom">
                <span class="tips">已选择{{selectNumber}}件商品&nbsp;&nbsp;&nbsp;共计：{{total}}元</span>
                <el-button type="success" plain @click="pay">结算</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'ShoppingCart',
        data() {
            return {
                selectNumber: 0,
                total: 0,
                selectcake: []
            }
        },
        computed: {
            ...mapState({
                cart: (state) => state.cart,
            }),
        },
        methods: {
            selectChange(selection) {
                this.selectcake = selection;
                this.selectNumber = selection.length;
                let total = 0;
                selection.forEach(item => {
                    total += item.number * item.price
                });
                this.total = total;
            },
            deletecake(cake) {
                this.$store.commit('DELETE', cake);
            },
            detail(cake) {
                this.$router.push('/jingdong')
                this.$store.commit('DETAIL', cake)
            },
            addNumber(cake) {
                this.$store.commit('ADD', cake)
            },
            subNumber(cake) {
                if (cake.number == 1) {
                    this.deletecake(cake);
                } else {
                    this.$store.commit('SUB', cake)
                }
            },
            pay() {
                this.$store.commit('PAY', this.selectcake)
                this.$message({
                    type: 'success',
                    message: '结算成功！共支付' + this.total + '元'
                })
            }
        }
    }
</script>

<style scoped>
    .shoppingCart {
        display: flex;
        justify-content: center;
        text-align: center;
        background-color: #eee;
    }   /**购物车背景设置*/

    .shopping_card {
        margin: 30px 0px;
        width: 1000px;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
        padding-left: 10px;
        padding-bottom: 10px;
        text-align: left;
    }

    .cover {
        width: 100px;
        height: 100px;
    }

    .number {
        padding: 0px 10px;
    }

    .bottom {
        margin-top: 20px;
        text-align: right;
    }

    .tips {
        font-size: 16px;
        padding-right: 20px;
    }
</style>