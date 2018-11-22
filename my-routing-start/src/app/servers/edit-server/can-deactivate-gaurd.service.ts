import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(
        component : CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
        }
    
}