import './static/css/reset.css'
import './index.scss'
import $ from './static/js/jquery'

// 初始化
let init = (function() {
    let that = {
        menus: []
    }
    
    // 初始化
    // 获取菜单数据
    import('./menusData.json').then(res => {
        that.menus = res.default
        const randomArr = []
        let count = that.menus.length
        const showHeight = 80   //限制钻石生成区域高度
        const showWidth = 60
        while (count > 0) {
            const item = that.menus[count-1]
            const row = Math.floor(Math.random() * showHeight)
            const col = Math.floor(Math.random() * showWidth)
            if (randomArr.length === 0) {
                randomArr.push({
                    left: col,
                    top: row,
                    href: item.href,
                    name: item.name
                })
               
                count -= 1
            } else {
                const noOverlap = randomArr.every(v => Math.hypot(v.left - col, v.top - row) > 15)  //这里的主要目的就是来保证每次随机生成的点确定的图片位置不会有重叠
                console.log(noOverlap)
                if (noOverlap) {
                    randomArr.push({
                        left: col,
                        top: row,
                        href: item.href,
                        name: item.name
                    })
                    count -= 1
                }
            }
        }

        let li = ''
        for(let i = 0; i < randomArr.length; i++) {
            const item = randomArr[i]
            li += `<li style='top: ${item.top}vh;left:${item.left}vw'><a href='${item.href}' target='_blank'>${item.name}</a></li>`
        }
        
        $('#menus').html(li)
    })
})()

// this.io= new IntersectionObserver(
//     (entries)=> {
//     if (entries[0].intersectionRatio <= 0) return;
//     this.seeMore();
//     });
//     // 开始观察
//     this.io.observe(document.getElementById("more"));