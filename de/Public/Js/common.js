function getLangFromPath() {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[1]; // 假设语言代码总是在第一个路径段
}

function returnAdvWord(){
    return `<p style="text-align: center">Advertisment</p>`
}