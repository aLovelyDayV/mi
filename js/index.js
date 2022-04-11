window.addEventListener('load', function () {
    // banner部分
    var banner = document.querySelector('.banner')
    var lunbo = banner.querySelector('.lunbo')
    var arrow_l = banner.querySelector('.arrow-l')
    var arrow_r = banner.querySelector('.arrow-r')
    var dot = banner.querySelector('.dot')
    var step = banner.clientWidth
    banner.onmouseover = function () {
        clearInterval(timer)
        timer = null
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
    }
    banner.onmouseout = function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
        timer = setInterval(function () {
            arrow_r.click()
        }, 10000)
    }
    for (var i = 0; i < lunbo.children.length; i++) {
        var li = document.createElement('li')
        dot.appendChild(li)
        li.setAttribute('data-index', i)

        li.addEventListener('click', function () {
            for (var i = 0; i < dot.children.length; i++) {
                dot.children[i].className = ''
            }
            this.className = 'dot-current'
            var index = this.getAttribute('data-index')
            animate(lunbo, -index * step)
            num = index
            circle = index
        })
    }
    dot.children[0].className = 'dot-current'
    var last = lunbo.children[0].cloneNode(true)
    lunbo.appendChild(last)
    var num = 0
    var circle = 0
    var flag = true
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false
            num++
            if (num == lunbo.children.length) {
                lunbo.style.left = 0
                num = 1
            }
            animate(lunbo, -num * step, function () {
                flag = true
            })

            circle++
            if (circle == dot.children.length) {
                circle = 0
            }
            circleChange(circle)

        }

    })
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num <= 0) {
                num = lunbo.children.length - 1
                lunbo.style.left = -num * step + 'px'
            }
            num--
            animate(lunbo, -num * step, function () {
                flag = true
            })

            circle--
            if (circle < 0) {
                circle = dot.children.length - 1
            }
            circleChange(circle)
        }


    })
    function circleChange(circle) {
        for (var i = 0; i < dot.children.length; i++) {
            dot.children[i].className = ''
        }
        dot.children[circle].className = 'dot-current'
    }
    var timer = setInterval(function () {
        arrow_r.click()
    }, 10000)

    // mainnav展开
    var mainnav = banner.querySelector('.mainnav')
    var mainnav_li = mainnav.querySelectorAll('li')
    var navbox = banner.querySelectorAll('.navbox')
    for (var i = 0; i < mainnav_li.length; i++) {
        mainnav_li[i].setAttribute('index', i)
        navbox[i].setAttribute('index', i)
        mainnav_li[i].onmouseover = function () {
            this.style.backgroundColor = '#ff6700'
            var index = this.getAttribute('index')
            navbox[index].style.display = 'block'
        }
        mainnav_li[i].onmouseout = function () {
            this.style.backgroundColor = ''
            var index = this.getAttribute('index')
            navbox[index].style.display = 'none'
        }
        navbox[i].onmouseover = function () {
            this.style.display = 'block'
            var index = this.getAttribute('index')
            mainnav_li[index].style.backgroundColor = '#ff6700'
        }
        navbox[i].onmouseout = function () {
            this.style.display = 'none'
            var index = this.getAttribute('index')
            mainnav_li[index].style.backgroundColor = ''
        }
    }
    // 返回顶部
    var goback = document.querySelector('.goback')
    var box = document.querySelector('.box')
    document.onscroll = function(){
        if(window.pageYOffset>box.offsetTop){
            goback.style.display = 'block'
        }else {
            goback.style.display = 'none'
        }
    }
    goback.onclick = function(){
        window.scroll(0,0)
    }
    // tab_list 方法
    function tab_list(tab_lists, contents) {
        for (var i = 0; i < tab_lists.length; i++) {
            tab_lists[i].setAttribute('data-index', i)
            tab_lists[i].addEventListener('mouseover', function () {
                for (var i = 0; i < tab_lists.length; i++) {
                    tab_lists[i].className = ''
                }
                this.className = 'tab-list-current'
                var index = this.getAttribute('data-index')
                for (var i = 0; i < contents.length; i++) {
                    contents[i].style.display = 'none'
                }
                contents[index].style.display = 'block'
            })
        }
    }
    // box2部分
    var box2 = document.querySelector('.box2')
    var box2_lists = box2.querySelector('.tab-list').querySelectorAll('li')
    var box2_contents = box2.querySelectorAll('.content')
    tab_list(box2_lists, box2_contents)

    // box3部分
    var box3 = document.querySelector('.box3')
    var box3_lists = box3.querySelector('.tab-list').querySelectorAll('li')
    var box3_contents = box3.querySelectorAll('.content')
    tab_list(box3_lists, box3_contents)

})