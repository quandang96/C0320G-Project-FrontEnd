import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';
import { FlightBookingDetailComponent } from './flight-booking-detail/flight-booking-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightOnewayScheduleComponent } from './flight-oneway-schedule/flight-oneway-schedule.component';
import { OnewayDirective } from './oneway.directive';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import localeVi from '@angular/common/locales/vi';
import {NgxPayPalModule} from 'ngx-paypal';

registerLocaleData(localeVi);
@NgModule({
  declarations: [
    FlightCenterComponent,
    FlightScheduleListComponent,
    FlightBookingDetailComponent,
    FlightOnewayScheduleComponent,
    OnewayDirective,
    FlightDetailComponent,
    ReservationComponent,
    ReservationDetailComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  entryComponents: [
    FlightBookingDetailComponent,
    FlightOnewayScheduleComponent,
    FlightDetailComponent
  ],
  providers: [
    {
      provide: localeVi,
      useValue: 'vi',
    }
  ]
})
export class FlightModule {
}
