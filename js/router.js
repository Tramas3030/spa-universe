export class Router {

    routes = {};
    currentPage = '/';

    add(routeName, page, isActive = false) {
        this.routes[routeName] = page;
        if (isActive) {
            this.currentPage = routeName
        }
    }
    
    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href);
    
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];

        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html;
        });

        const links = document.querySelectorAll('nav a');
        links.forEach(link => {
            if(link.getAttribute('href') === pathname) {
                link.classList.add('activated');
            }
            else {
                link.classList.remove('activated');
            }
        })
    }
}