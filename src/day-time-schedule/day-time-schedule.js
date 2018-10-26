import {bindable} from 'aurelia-framework';

export class DayTimeSchedule {

  @bindable dayStart;
  @bindable dayEnd;
  @bindable days;
  @bindable bookingClicked;
  HOURSIZE = 3600000;

  constructor() {
  }
}
