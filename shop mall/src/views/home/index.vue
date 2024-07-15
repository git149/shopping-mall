<template>
    <div class="home">
        <Search @search="search"></Search>
        <jingdongList ref="jingdongList"></jingdongList>
    </div>
</template>

<script>
import Search from './search'
import jingdongList from './jingdongList'
export default {
    name: 'Home',
    components: {
        Search,
        jingdongList
    },
    methods: {
        search(key) {
            if (key) {
                this.$refs.jingdongList.search(key)
            } else {
                this.$message.error('输入不能为空！');
            }
        }
    }
}
</script>