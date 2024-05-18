import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable, map, of as ofObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private onMobile$: Observable<boolean> = ofObservable();

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    this.onMobile$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map((breakpointState: BreakpointState) => breakpointState.matches));
  }

  onMobile(): Observable<boolean> {
    return this.onMobile$;
  }
}
