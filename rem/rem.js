<!doctype html><html lang="zh-cmn-Hans"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"><title>代码托管 项目管理 WebIDE 企业服务</title><meta name="keywords" content="腾讯云,Git,Svn,代码托管,Pages,WebIDE,Cloud Studio,持续集成,开发协作,团队协作,项目管理,敏捷开发,缺陷管理,在线IDE,CI,代码管理,CODING,腾讯云开发者平台"><meta name="description" content="腾讯云开发者平台是腾讯云为开发者提供的在线研发管理工具，提供 Git/Svn 代码托管，项目管理，持续集成，云端开发工具 Cloud Studio 等一整套 SaaS 产品。"><link href="//imgcache.qq.com/qcloud/app/resource/ac/favicon.ico" rel="icon" type="image/x-icon"><script>window.PDFJS_WORKER_SRC=void 0</script><link href="https://assets.codehub.cn/static/css/index.350460c8.chunk.css" rel="stylesheet"></head><body><div id="container"></div><iframe id="report_iframe" name="report_iframe" style="position:absolute;height:1px;width:1px;bottom:-250px;left:-250px" src="https://cloud.tencent.com/act/thirdpartyreport"></iframe><style>@keyframes react-progress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.react-progress-bar{position:fixed;top:0;left:0;width:100%;visibility:visible;opacity:1;transition:all .4s;z-index:9999}.react-progress-bar.react-progress-bar-on-top{height:100%}.react-progress-bar.react-progress-bar-hide{opacity:0;visibility:hidden;z-index:-10}.react-progress-bar-percent{height:2px;background:#77b6ff;box-shadow:0 0 10px rgba(119,182,255,.7);transition:all .2s ease}.react-progress-bar-spinner{display:block;position:fixed;top:15px}.react-progress-bar-spinner-left{left:15px;right:auto}.react-progress-bar-spinner-right{left:auto;right:15px}.react-progress-bar-spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;animation:react-progress-spinner .4s linear infinite}</style><script>(() => {
        const body = document.getElementsByTagName('body')[0];
        let percent = 0;
        let progressBar = null;
        let interval = null;

        const progress = {
            id: `${new Date().getTime()}-JS_PROGRESS_BAR`,
            insert() {
                const ele = `<div class="react-progress-bar">
                    <div class="react-progress-bar-percent" style="width: 0%;" id="${this.id}"/>
                </div>`;
                body.innerHTML += ele;
                progressBar = document.getElementById(this.id);
            },
            increment() {
                percent += ((Math.random() + 1) - Math.random());
                percent = percent < 99 ? percent : 99;
                progressBar.style.width = `${percent}%`;
            },
            start() {
                interval = setInterval(this.increment, 200);
            },
            end() {
                if (interval) {
                    clearInterval(interval);
                }
                progressBar.style.width = `100%`;
                setTimeout(() => {
                    progressBar.style.display = 'none';
                }, 200)
            },
            setProxy() {
                window.PROGRESS_BAR = new Proxy({}, {
                    set: function (target, key, value, receiver) {
                        progress.end();
                        return Reflect.set(target, key, value, receiver);
                    }
                });
            },
            init() {
                this.insert();
                this.setProxy();
                this.start();
            }
        };
        if (typeof window.Proxy === 'function') {
            progress.init();
        }
    })();</script><script type="text/javascript" src="https://assets.codehub.cn/static/js/runtime~index.b559ff74.js"></script><script type="text/javascript" src="https://assets.codehub.cn/static/js/index.dbc9ff53.chunk.js"></script></body><script type="text/javascript">var Utils=function(){var a=window.location.protocol,r="dev.tencent.com",i=(new RegExp("^http[s]?://"+r.replace(/\./g,"\\.")+".*$","i"),new RegExp(".(tencent.com|qcloud.com|qq.com)$","i"));return{mobilecheck:function(){try{if(t=!1,e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t)document.getElementById("container").style.minWidth=0,document.body.style.minWidth=0,document.body.parentElement.style.minWidth=0}catch(e){}var e,t},fromCodingCheck:function(){var t,o,i;if(window.localStorage){if("/login"===window.location.pathname){var e="coding"===(t="from",o=null,i=[],location.search.substr(1).split("&").forEach(function(e){(i=e.split("="))[0]===t&&(o=decodeURIComponent(i[1]))}),o);window.localStorage.setItem("from_coding",e?"1":"0")}}else console.log("请升级浏览器")},getReportIframeUrl:function(e){var t="",o=a+"//"+r;if(-1<(e=e.replace(/(\w+)\/\//g,"$1/")).indexOf("?")){var i=/^(.*)\?(.*)$/.exec(e);null!==i&&i[1]&&(o=i[1]),null!==i&&i[2]&&(t=i[2])}else o=e;var n="https://cloud.tencent.com/act/thirdpartyreport";return n+=t?"?"+encodeURI(t)+"&url="+encodeURIComponent(o):"?url="+encodeURIComponent(o)},changeReportSrc:function(e){window.frames.report_iframe&&(window.frames.report_iframe.location.href=e)},onMessage:function(e){var t,o=e.origin||e.originalEvent.origin;if(o=o.replace(/(:\d+)/g,""),i.test(o)){try{t=JSON.parse(e.data||"")}catch(e){}if(t&&t.action)switch(t.action){case"redirect":t&&t.url&&!/^http/i.test(t.url)&&(t.url=""),location.href=t.url;break;case"resize":document.getElementById("loginbox").style.height=t.height+"px",document.getElementById("loginbox").style.width=t.width+"px"}}},hackPushState:function(){try{n=window,a=n.history.pushState,n.history.pushState=function(e,t,o){"function"==typeof n.history.onpushstate&&n.history.onpushstate({state:e}),Utils.tcssReport();var i=Utils.getReportIframeUrl(n.location.href);return Utils.changeReportSrc(i),a.apply(n.history,arguments)}}catch(e){}var n,a},tcssReport:function(){"function"==typeof pgvMain&&pgvMain({repeatApplay:"true",virtualDomain:"qcloud.dev.qq.com"})},addMessageListener:function(){window.addEventListener?window.addEventListener("message",Utils.onMessage,!1):window.attachEvent?window.attachEvent("onmessage",Utils.onMessage):console.warn("请升级浏览器")},onLoadDo:function(){window.onload=function(){Utils.tcssReport();var e=Utils.getReportIframeUrl(window.location.href);Utils.changeReportSrc(e)}}}}();Utils.mobilecheck(),Utils.fromCodingCheck(),Utils.addMessageListener(),Utils.hackPushState(),Utils.onLoadDo()</script><script type="text/javascript" src="https://pingjs.qq.com/tcss.ping.https.js"></script></html>