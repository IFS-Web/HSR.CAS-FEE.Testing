/**
 * Static Bound Service
 */
export class NoteServiceWithDoC {
  constructor(settings) {
    this.settings = settings;
  }
  load() {
    // cache data, more business logic here...
    return fetch(this.settings.url, { body: { /*...*/ } }); // don't do that!
  }
}

/**
 * Dynamic Bound Service, test-friendly
 */
export class NoteService {
  constructor(httpResourceService) {
    this.httpResourceService = httpResourceService;
  }
  load() {
    // cache data, more business logic here...
    return this.httpResourceService.get(); // indirection to httpResourceService; it invokes fetch()
  }
}
