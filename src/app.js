import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'start'], name: 'start',      moduleId: PLATFORM.moduleName('./start'),      nav: true, title: 'Dagsschema' }
    ]);

    this.router = router;
  }
}
