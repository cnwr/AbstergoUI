/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpHelperService } from './http-helper.service';

describe('HttpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHelperService]
    });
  });

  it('should ...', inject([HttpHelperService], (service: HttpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
