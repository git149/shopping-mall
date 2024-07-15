<template>
    <div class="jingdongList">
        <div class="jingdongList_box">
            <div class="category_list">
                <span @click="categoryChange(index,$event)" :class="{'active':activeIndex == index}"
                    v-for="(category,index) in categoryList" :key="index" class="category">{{category}}</span>
            </div>
            <div class="cake_box">
                <el-row>
                    <el-col :span="6" v-for="(cake,index) in cakePage" :key="index" class="boox_col">
                        <div class="item">
                            <img :src="cake.cover" @click="detail(cake)" alt="图片加载出错" class="cover">
                            <div class="information">
                                <span>{{cake.cakeName}}</span>
                               
                            </div>
                            <div class="information">
                                <el-tag type="success">{{cake.price}}元</el-tag>
                                <el-tooltip effect="light" content="加入订单" placement="right">
                                    <el-button type="success" @click="addCart(cake)" size="mini"
                                        icon="el-icon-shopping-cart-2"></el-button>
                                </el-tooltip>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-pagination class="pagination" :current-page="page.currentPage" :page-sizes="[8, 16, 24]"
                :page-size="page.pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                layout="prev, pager, next, jumper, ->, sizes, total" :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'jingdongList',
        data() {
            return {
                tianmaoPage: [],
                page: {
                    currentPage: 1,
                    pageSize: 8,
                    total: 0,
                },
                activeIndex: 0,
            }
        },
        methods: {
            getcakePage() {
                let start = (this.page.currentPage - 1) * (this.page.pageSize);
                let end = this.page.pageSize * this.page.currentPage;
                this.cakePage = this.jingdongList.slice(start, end);
            },
            getTotal() {
                this.page.total = this.jingdongList.length;
            },
            handleSizeChange(pageSize) {
                this.page.pageSize = pageSize;
                this.getcakePage();
            },
            handleCurrentChange(currentPage) {
                this.page.currentPage = currentPage;
                this.getcakePage();
            },
            categoryChange(index, event) {
                this.activeIndex = index
                let type = event.target.innerHTML;
                if (type == '全部分类') {
                    this.getcakePage();
                    this.getTotal();
                } else {
                    let newjingdongList = this.jingdongList.filter((item) => {
                        if (item.type == type) return true
                    })
                    this.page.total = newjingdongList.length;
                    this.cakePage = newjingdongList;
                }
            },
            detail(cake) {
                this.$router.push('/jingdong')
                this.$store.commit('DETAIL', cake)
            },
            search(key) {
                this.cakePage = this.jingdongList.filter((item) => {
                    if (item.cakeName.indexOf(key) == 0) return true
                })
                this.page.total = this.cakePage.length;
            },
            addCart(cake) {
                this.$store.commit('ADDCART', cake);
                this.$message({
                    type: 'success',
                    message: '添加购物车成功'
                });
            }
        },
        mounted() {
            this.getcakePage();
            this.getTotal();
        },
        computed: {
            ...mapState({
                jingdongList: (state) => state.jingdongList,
                categoryList: (state) => state.categoryList,
            }),
        },
    }
</script>

<style scoped>
    .jingdongList {
        display: flex;
        justify-content: center;
        text-align: center;
        background: #eee;
    }  /** 底部旁白*/

    .jingdongList_box {
        background: white;
    }  /**订单背景颜色*/

    .category_list {
        width: 1150px;
        height: 50px;
    }

    .category {
        font-size: 16px;
        padding: 10px 30px;
        line-height: 50px;
        font-weight:800;
    }

    .category:hover {
        color: #27ae60;
        border-bottom: 2px solid #2ecc71;
        cursor: pointer;
        font-weight:800;
    }

    .active {
        color: #27ae60;
        border-bottom: 2px solid #2ecc71;
    }

    .cake_box {
        width: 1150px;
    }

    .boox_col {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .item {
        padding: 10px 15px;
        border: 2px #eeeeee solid;
        width: 200px;
    }

    .item:hover {
        box-shadow: 0 0 10px #ddd;
    }

    .cover {
        width: 200px;
        height: 200px;
    }

    .information {
        display: flex;
        justify-content: space-between;
        font-weight:600;
        font-size: 16px;      
        padding-top: 20px;
    }

    .pagination {
        text-align: center;
        padding: 30px 100px;
    }
</style>