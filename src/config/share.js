import "./jweixin-1.2.0"
export const share = () => {
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '123', // 必填，公众号的唯一标识
        timestamp: 123, // 必填，生成签名的时间戳
        nonceStr: '123', // 必填，生成签名的随机串
        signature: '123',// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });



    wx.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

        wx.checkJsApi({
            jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function (res) {
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }


        });
        wx.onMenuShareTimeline({
            title: shareJson.title, // 分享标题
            link: shareJson.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareJson.imgUrl, // 分享图标
            success: function (data) {
                func(that)
                // alert('分享到朋友圈')
            },
            cancel: function (data) {
                // alert('分享到朋友圈失败')
            }
        });
        wx.onMenuShareAppMessage({
            title: shareJson.title, // 分享标题
            desc: shareJson.desc, // 分享描述
            link: shareJson.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareJson.imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (data) {
                func(that)
                // alert('分享给朋友')
                // 用户确认分享后执行的回调函数
            },
            cancel: function (data) {
                // alert('分享给朋友')
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: shareJson.title, // 分享标题
            desc: shareJson.desc, // 分享描述
            link: shareJson.link, // 分享链接
            imgUrl: shareJson.imgUrl, // 分享图标
            success: function (data) {
                func(that)
                // alert('分享到qq')
                // 用户确认分享后执行的回调函数
            },
            cancel: function (data) {
                // alert('分享到qq')
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareWeibo({
            title: shareJson.title, // 分享标题
            desc: shareJson.desc, // 分享描述
            link: shareJson.link, // 分享链接
            imgUrl: shareJson.imgUrl, // 分享图标
            success: function () {
                func(that)
                // alert('分享到微博')
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // alert('分享到微博')
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQZone({
            title: shareJson.title, // 分享标题
            desc: shareJson.desc, // 分享描述
            link: shareJson.link, // 分享链接
            imgUrl: shareJson.imgUrl, // 分享图标
            success: function (data) {
                func(that)
                // alert('分享到空间')
                // 用户确认分享后执行的回调函数
            },
            cancel: function (data) {
                // alert('分享到空间')
            }
        });

    });

    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
}

