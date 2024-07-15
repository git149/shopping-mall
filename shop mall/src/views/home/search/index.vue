<template>
    <div class="search">
        <div class="search_box">
            <div class="title">Choose your Like ShangPin</div>
            <el-form :model="serachForm" class="search_form">
                <el-form-item class="search_item">
                    <el-row>
                        <el-col :span="21">
                            <el-input v-model="serachForm.key" @keyup.enter.native="search" clearable placeholder="请输入商品的关键字"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-button type="success" @click="search" icon="el-icon-search"></el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <div class="hotSearch">
                <span class="active" @click="detail(cake)" v-for="(cake,index) in hotSearch"
                    :key="index">{{cake.cakeName}}&nbsp;&nbsp;&nbsp;</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'Search',
        data() {
            return {
                serachForm: {
                    key: ''
                },
                hotSearch: [],
            }
        },
        methods: {
            search() {
                this.$emit('search',this.serachForm.key);
                this.serachForm.key = '';
            },
            getHotSearch() {
                this.hotSearch = [];
                for (let index = 0; index < 4; index++) {
                    let cake = this.jingdongList[Math.floor(Math.random() * this.jingdongList.length)]
                    this.hotSearch.push(cake)
                }
            },
            detail(cake) {
                this.$router.push('/jingdong')
                this.$store.commit('DETAIL', cake)
            }
        },
        mounted() {
            this.getHotSearch();
        },
        computed: {
            ...mapState({
                jingdongList: (state) => state.jingdongList,
            }),
        },
    }
</script>

<style scoped>
    .search {
        height: 350px;
        background: url(./images/beijing.jpg);
        display: flex;
        justify-content: center;
        align-items: center;
    } /**背景图片*/

    .search_box {
        height: 200px;
        width: 450px;
    }

    .title {
        text-align: center;
        color: rgb(56, 65, 104);
        font-weight: 800;
        font-size: 22px;
        letter-spacing: 1.5px;
        font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
        padding-bottom: 20px;
    }         /**Pick 标题的设置*/

    .search_item {
        margin: 0px 0px;
    }

    .hotSearch {
        cursor: pointer;/**当鼠标移动到该单元格上时,鼠标会由箭头形状改为手的形状**/
        text-align: center;
        
        color: white;
        font-size: 15px;
        padding-top: 15px;
    }  /**热门搜索的设置*/

    .active:hover {
        color: rgb(160, 63, 63);
    }
</style>