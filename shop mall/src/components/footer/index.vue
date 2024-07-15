<template>
    <div class="footer">
        {{ word }}
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            word: '',
            wordList: [
                '八骏日行三万里，穆王何事不重来。',
                '书中借我大义，天地还我春秋。',
                '【只有不在乎统战价值的人才真的具有统战价值;当你想有统战价值的时候，你已经不具备统战价值了】',
                '雄关漫道真如铁，而今迈步从头越。',
                '青山略输我峥嵘，春意逊我半抹浓。',
                '与其誉尧而非桀也，不如两忘而化其道',
                '老骥伏枥，志在千里；烈士暮年，壮心不已。',
                ' 壮志饥餐胡虏肉，笑谈渴饮匈奴血。',
                '五百人中第一仙，等闲平步上青天。',
                '仰天大笑出门去,我辈岂是蓬蒿人。',
            ],
        }
    },
    methods: {
        getWord() {
            this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        },
    },
    watch: {
        $route() {
            this.getWord();
        }
    },
}
</script>

<style scoped>
.footer {
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    background-color: #ffffff;
    height: 50px;
    color: #aaaa7f;
}
</style>