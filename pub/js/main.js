let links = {
    facebook:   'https://www.facebook.com/pg/shahriar-farzam-669498900072024/photos/?ref=page_internal',
    google:     'https://scholar.google.com/citations?user=ztLYBJgAAAAJ&hl=en',
    twitter:    'https://twitter.com/Shahriar1983',
    linkedin:   'https://www.linkedin.com/in/shahriar-farzam',
    instagram:  'https://www.instagram.com/shahriar.farzam/',
    github:     'https://github.com/shfarzam',
    //skype:      'https://join.skype.com/invite/pW1wAhaDK6hq'
    skype:      'skype:sh.farzam@hotmail.com?chat'
    };

$(window).on('load',function () {
    var anchors = document.querySelectorAll('a');
    Array.prototype.forEach.call(anchors, function (element, index) {
        if(links.hasOwnProperty(element.id)) {
            element.href = links[element.id];
        }

    });
});