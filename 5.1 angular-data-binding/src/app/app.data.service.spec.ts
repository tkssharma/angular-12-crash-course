import { TestBed } from '@angular/core/testing';

import { App.DataService } from './app.data.service';

describe('App.DataService', () => {
  let service: App.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
