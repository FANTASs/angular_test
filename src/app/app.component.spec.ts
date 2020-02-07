import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GiphiesService } from './service/service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  const limit = 25;
  const offset = 1;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        GiphiesService,
        HttpClient,
        HttpHandler
      ],
    })
      .compileComponents();
  }));

  beforeEach(inject([GiphiesService], s => {
    service = s;
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('method getGiphies', () => {
    service.getGiphies('dog', limit, offset).subscribe(res => {
      expect(res['data'].length).toBeTruthy();
    });
  });

  it('method getGiphies with different parameters', () => {
    let firstItem = '';
    let secondItem = '';

    service.getGiphies('dog', limit, offset).subscribe(res => {
      firstItem += res['data'][0];

      service.getGiphies('dog', limit, offset + 9).subscribe(result => {
        secondItem += result['data'][0];

        expect(firstItem === secondItem).toBeFalsy();
      });
    });
  });

  it('method getGiphies with clean input', () => {
    service.getGiphies('', limit, offset).subscribe(res => {
      expect(res).toBeFalsy();
    });
  });
});
