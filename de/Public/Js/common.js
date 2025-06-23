function getLangFromPath() {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[1]; // 假设语言代码总是在第一个路径段
}

function returnAdvWord(){
    return `<p style="text-align: center;text-align: center; line-height: 100px; margin: 0;width: 100%">Advertisment</p>`
}