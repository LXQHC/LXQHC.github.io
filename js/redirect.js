(function() {
    // 检测当前域名是否为镜像网站的域名
    var originalDomain = "lxqxm.top";
    var currentDomain = window.location.hostname;

    // 如果当前域名不是原始域名，则弹出提示并重定向到原始网站
    if (currentDomain !== originalDomain) {
        // 弹出提示信息
        alert('检测到您处于恶意镜像网站中，即将为您跳转至原站');
        // 重定向到原始网站
        window.location.href = "https://" + originalDomain + window.location.pathname + window.location.search;
    }
})();
