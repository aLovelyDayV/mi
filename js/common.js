window.addEventListener('load',function(){
    // header部分
    var topbar = document.querySelector('.topbar')
    var download = topbar.querySelector('.download')
    
    var search = document.querySelector('.search')
    var text = search.querySelector('input')
    var button = search.querySelector('button')
    var search_la = search.querySelector('.search-la')
    text.onfocus = function () {
        clearInterval(search_play)
        search_play = null
        this.style.borderColor = '#ff6700'
        button.style.borderColor = '#ff6700'
        search_la.style.display = 'block'
    }
    text.onblur = function () {
        this.style.borderColor = '#ccc'
        button.style.borderColor = '#ccc'
        search_la.style.display = 'none'
        search_play = setInterval(function () {
            if (s == 8) { s = 0 }
            text.placeholder = search_la.children[s].innerText
            s++
        }, 5000)
    }
    var s = 0
    var search_play = setInterval(function () {
        if (s == 8) { s = 0 }
        text.placeholder = search_la.children[s].innerText
        s++
    }, 5000)
})