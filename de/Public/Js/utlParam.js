document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
        document.querySelectorAll('a').forEach(link => {
            const url = new URL(link.href, window.location.origin);
            url.searchParams.set('token', token);
            link.href = url.toString();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    console.log('找到链接数量:', links.length);

    links.forEach(link => {
        console.log('原始链接:', link.href);
    });
});
