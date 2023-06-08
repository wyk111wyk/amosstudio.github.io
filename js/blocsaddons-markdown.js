$(function () {
    $('.blocsaddons-markdown').each(function (index, element) {
        marked.setOptions({
            breaks: true,
            gfm: true,
            tables: true,
            headerIds: false
        });
        var html = element.innerHTML.trim();
        html = html.replace(/<br>/g, '\n');
        element.innerHTML = marked(html);
    });
});