$(document).ready(function () {
    /* The following code is executed once the DOM is loaded */
    $('.sponsorFlip').bind("click", function () {
        // $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
        var elem = $(this);
        // data('flipped') is a flag we set when we flip the element:
        if (elem.data('flipped')) {
            // If the element has already been flipped, use the revertFlip method
            // defined by the plug-in to revert to the default state automatically:
            elem.revertFlip();
            // Unsetting the flag:
            elem.data('flipped', false)
        }
        else {
            // Using the flip method defined by the plugin:
            elem.flip({
                direction: 'lr',
                speed: 300,
                onBefore: function () {
                    // Insert the contents of the .sponsorData div (hidden from view with display:none)
                    // into the clicked .sponsorFlip div before the flipping animation starts:

                    elem.html(elem.siblings('.sponsorData').html());
                }
            });
            // Setting the flag:
            elem.data('flipped', true);
        }
    });


    /*var time2 = 600;  //重置牌时间
    var time1 = 1200;

    var timer = null;
    var show_c = null;

    timer = setInterval(function () {
        var num2 = parseInt(Math.random() * 9);
        console.log(num2);
        $(".sponsorFlip:eq(" + num2 + ")").trigger("click");
        show_c = setTimeout(function () {
            $(".sponsorFlip:eq(" + num2 + ")").revertFlip();
        }, time2);
    }, time1)*/

    function createRandom2(num , from , to)
    {
        var arr=[];
        var json={};
        while(arr.length<num)
        {
            //产生单个随机数
            var ranNum=Math.ceil(Math.random()*(to-from))+from;
            //通过判断json对象的索引值是否存在 来标记 是否重复
            if(!json[ranNum])
            {
                json[ranNum]=1;
                arr.push(ranNum);
            }
        }
        return arr;
    }

    function fanpai() {
       var p = createRandom2(3,0,8);
        console.log(p);
        $(".sponsorFlip:eq(" + p[0] + ")").trigger("click");
        $(".sponsorFlip:eq(" + p[1] + ")").trigger("click");
        $(".sponsorFlip:eq(" + p[2] + ")").trigger("click");
        setTimeout(function () {
            /*$(".sponsorFlip:eq(" + p[0] + ")").revertFlip();
            $(".sponsorFlip:eq(" + p[1] + ")").revertFlip();
            $(".sponsorFlip:eq(" + p[2] + ")").revertFlip();*/
            $(".sponsorFlip:eq(" + p[0] + ")").trigger("click");
            $(".sponsorFlip:eq(" + p[1] + ")").trigger("click");
            $(".sponsorFlip:eq(" + p[2] + ")").trigger("click");
        },3000);

    }
    var time1 = setInterval(fanpai,8000);

    function myrefresh()
    {
        window.location.reload();
    }
    setTimeout('myrefresh()',600000); //指定1秒刷新一次

});