let newspaper = {
    title: 'The Developer Times',
    dateline: 'Sunday, April 5, 2020',
    articles: [
        {
            headline: 'A Big City Event',
            byline: 'Dr. So Andso',
            content: 'Mauris eget feugiat ante. Nunc imperdiet eget dui finibus hendrerit. Sed feugiat, lacus eu laoreet maximus, lacus turpis pulvinar lacus, vitae consequat magna est id erat. Fusce venenatis a lacus in tristique. Nunc suscipit libero eget mauris placerat, viverra sodales ex sagittis. Etiam a scelerisque mi. Nulla et mollis leo. Nulla et eros tristique, pretium neque id, pretium purus. Nulla cursus pellentesque ipsum convallis viverra. Mauris sagittis augue eget arcu maximus rhoncus sit amet nec ipsum. Aliquam quis magna at turpis mattis consectetur. Etiam iaculis turpis a cursus pulvinar. Sed dignissim purus id quam viverra, at laoreet massa tempor. Nam porttitor facilisis est ac lacinia. Ut luctus, felis id consequat tristique, magna sapien commodo nibh, ut pharetra quam mauris id ante. Aliquam molestie nisi nisl, id consectetur elit mollis ac.',
            cols: 3,
            rows: 3,
            big: true,
            image: 'images/city.jpg',
            caption: 'This is a city'
        },
        {
            headline: 'I Looked For A Story. There Was None.',
            byline: 'Joe Reporter',
            content: 'Mauris eget feugiat ante. Nunc imperdiet eget dui finibus hendrerit. Sed feugiat, lacus eu laoreet maximus, lacus turpis pulvinar lacus, vitae consequat magna est id erat. Fusce venenatis a lacus in tristique. Nunc suscipit libero eget mauris placerat, viverra sodales ex sagittis. Etiam a scelerisque mi. Nulla et mollis leo. Nulla et eros tristique, pretium neque id, pretium purus. Nulla cursus pellentesque ipsum convallis viverra. Mauris sagittis augue eget arcu maximus rhoncus sit amet nec ipsum. Aliquam quis magna at turpis mattis consectetur. Etiam iaculis turpis a cursus pulvinar. Sed dignissim purus id quam viverra, at laoreet massa tempor. Nam porttitor facilisis est ac lacinia. Ut luctus, felis id consequat tristique, magna sapien commodo nibh, ut pharetra quam mauris id ante. Aliquam molestie nisi nisl, id consectetur elit mollis ac.',
            cols: 1,
        },
        {
            headline: 'A Short Comment',
            byline: 'Unknown',
            content: 'Fusce venenatis a lacus in tristique. Nunc suscipit libero eget mauris placerat, viverra sodales ex sagittis. Etiam a scelerisque mi. Nulla et mollis leo. Nulla et eros tristique, pretium neque id, pretium purus. Nulla cursus pellentesque ipsum convallis viverra. Mauris sagittis augue eget arcu maximus rhoncus sit amet nec ipsum. Aliquam quis magna at turpis mattis consectetur. Etiam iaculis turpis a cursus pulvinar. Sed dignissim purus id quam viverra, at laoreet massa tempor. Nam porttitor facilisis est ac lacinia. Ut luctus, felis id consequat tristique, magna sapien commodo nibh, ut pharetra quam mauris id ante. Aliquam molestie nisi nisl, id consectetur elit mollis ac.',
            cols: 1,
        },
        {
            headline: 'Wouldn\'t This Be Below the Fold?',
            byline: 'Susan Cando',
            content: 'Mauris eget feugiat ante. Nunc imperdiet eget dui finibus hendrerit. Sed feugiat, lacus eu laoreet maximus, lacus turpis pulvinar lacus, vitae consequat magna est id erat. Fusce venenatis a lacus in tristique. Nunc suscipit libero eget mauris placerat, viverra sodales ex sagittis. Etiam a scelerisque mi. Nulla et mollis leo. Nulla et eros tristique, pretium neque id, pretium purus. Nulla cursus pellentesque ipsum convallis viverra. Mauris sagittis augue eget arcu maximus rhoncus sit amet nec ipsum. Aliquam quis magna at turpis mattis consectetur. Etiam iaculis turpis a cursus pulvinar. Sed dignissim purus id quam viverra, at laoreet massa tempor. Nam porttitor facilisis est ac lacinia. Ut luctus, felis id consequat tristique, magna sapien commodo nibh, ut pharetra quam mauris id ante. Aliquam molestie nisi nisl, id consectetur elit mollis ac.',
            cols: 4,
        }
    ]
}

let app = new Vue({
    el: '#app',
    data: {
        title: newspaper.title,
        dateline: newspaper.dateline,
        articles: newspaper.articles,
    }
});

window.document.title = newspaper.title