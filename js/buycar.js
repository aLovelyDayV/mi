$(function () {
    // 全选
    getSum()
    $("#all").change(function () {
        if ($(this).prop("checked")) {
            $(".item-checkbox").prop("checked", true)
        } else {
            $(".item-checkbox").prop("checked", false)
        }

        if ($(".item-checkbox").prop("checked")) {
            $(".item-checkbox").parents(".item-box").addClass("check-cart-item")
        } else {
            $(".item-checkbox").parents(".item-box").removeClass("check-cart-item")
        }
        getSum()
    })
    // 单个选
    $(".item-checkbox").change(function () {
        if ($(".item-checkbox:checked").length == $(".item-checkbox").length) {
            $("#all").prop("checked", true)
        } else {
            $("#all").prop("checked", false)
        }

        if ($(this).prop("checked")) {
            $(this).parents(".item-box").addClass("check-cart-item")
        } else {
            $(this).parents(".item-box").removeClass("check-cart-item")
        }
        getSum()
    })

    // 数量
    $(".plus").click(function () {
        var n = $(this).siblings(".itxt").val()
        n++
        $(this).siblings(".itxt").val(n)
        var p = $(this).parent().siblings(".col-price").text()
        p = p.slice(0, p.length - 1)
        var subtotal = (n * p).toFixed(2)
        $(this).parent().siblings(".subtotal").text(subtotal + "元")
        getSum()
    })
    $(".minus").click(function () {
        var n = $(this).siblings(".itxt").val()
        n--
        n = n < 1 ? 1 : n
        $(this).siblings(".itxt").val(n)
        var p = $(this).parent().siblings(".col-price").text()
        p = p.slice(0, p.length - 1)
        var subtotal = (n * p).toFixed(2)
        $(this).parent().siblings(".subtotal").text(subtotal + "元")
        getSum()
    })

    // 删除
    $(".del").click(function () {
        $(this).parents(".item-box").remove()
        getSum()
    })

    function getSum() {
        var num = 0
        var total = 0
        $(".item-checkbox").each(function (i, ele) {
            if ($(ele).prop("checked")) {
                $(ele).parent().siblings(".col-num").children(".itxt").each(function (i, obj) {
                    var n = $(obj).val()
                    num += parseInt(n)
                })
                $(".num").text(num)
                $(ele).parent().siblings(".subtotal").each(function (i, obj) {
                    var m = $(obj).text()
                    m = m.slice(0, m.length - 1)
                    total += parseFloat(m)
                })
                $(".total").text(total.toFixed(2))
            } else {
                num = num + 0
                total = total + 0
                $(".num").text(num)
                $(".total").text(total.toFixed(2))
            }
        })

    }
})