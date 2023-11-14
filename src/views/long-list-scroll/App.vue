<template>
  <div class="app">
    <!-- 滚动视图 -->
    <!-- 将变量放在父元素上面，子元素可以继承变量，防止性能浪费 -->
    <div class="viewport" ref="viewport" :style="{'--rowHeight': rowHeight+'px'}" @scroll="onScroll">
      <!-- 子元素超出父元素高度 -->
      <div class="scroll" ref="scroll"></div>
      <div class="list" ref="list">
        <div class="row" v-for="(item, index) in showList" :key="index">
          {{ item.n }}
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
const bigList = new Array(200000).fill(null).map((ele, i) => ({n: i+1}))
export default {
  name: '',
 
  props: {
    list: {
      type: Array,
      default: () => {
        // vue 会进行递归，给属性上监听，Object.defineProperty
        // 如果不需要修改，冻结这个属性将会提升性能, 内部就会判断是否冻结，Object.isFrozen(obj)
        return  Object.freeze(bigList)
      }
    },
    viewCount: {
      type: Number,
      default: 20000
    },
    rowHeight: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      offSetTop: 0,
      start: 0,
      end: 0,
     
    }
  },
  computed: {
    showList() {
      return this.list.slice(this.start, this.end)
    }
  },
  created() {
    this.end = this.viewCount
  },
  mounted() {
    // viewport的高度
    this.$refs.viewport.style.height = `${this.rowHeight * this.viewCount}px`
    // 显示滚动条
    this.$refs.scroll.style.height = `${this.rowHeight * this.list.length}px`

  },
  methods: {
    onScroll() {
      // 顶部偏移量
      this.offSetTop = this.$refs.viewport.scrollTop;
      this.start = Math.round(this.offSetTop / this.rowHeight);
      this.end = this.start + this.viewCount;
      // 平移回调(把滚动上去的部分回调回来)
      this.$refs.list.style.transform = `translateY(${this.offSetTop}px)`
    }
  }
}
</script>

<style lang="scss" scoped>
.viewport {
  width: 300px;
  // height: 400px;
  background: yellow;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow-y: auto;
  .scroll {
    // height: 3000px;
  }
  .list {
    position: absolute;
    left: 0;
    top: 0;
    .row {
      height: var(--rowHeight);
    }
  }
}
</style>