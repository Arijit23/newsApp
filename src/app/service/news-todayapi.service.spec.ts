import { TestBed } from '@angular/core/testing';

import { NewsTodayapiService } from './news-todayapi.service';

describe('NewsTodayapiService', () => {
  let service: NewsTodayapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsTodayapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
