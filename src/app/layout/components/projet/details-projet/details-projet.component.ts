import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CalendarOptions, EventClickArg } from '@fullcalendar/angular';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { CoreConfigService } from '@core/services/config.service';

import { CalendarService } from 'app/services/calendar.service';
import { EventRef } from 'app/layout/components/projet/details-projet/calendar.model';
@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class DetailsProjetComponent implements OnInit, AfterViewInit {

  // Public
  public slideoutShow = false;
  public events = [];
  public event;

  public calendarOptions: CalendarOptions = {
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    initialView: 'dayGridMonth',
    initialEvents: this.events,
    weekends: true,
    editable: true,
    eventResizableFromStart: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: 2,
    navLinks: true,
    eventClick: this.handleUpdateEventClick.bind(this),
    eventClassNames: this.eventClass.bind(this),
    select: this.handleDateSelect.bind(this)
  };

  // Private
  private _unsubscribeAll: Subject<any>;
  public static events = [
    {
      id: 1,
      url: '',
      title: 'Design Review',
      start: new Date(),
      end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      allDay: false,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 2,
      url: '',
      title: 'Meeting With Client',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -11),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -10),
      allDay: true,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 3,
      url: '',
      title: 'Family Trip',
      allDay: true,
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -9),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -7),
      calendar: 'Holiday',
      extendedProps: {}
    },
    {
      id: 4,
      url: 'https://www.pixinvent.com',
      title: 'URL event',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -11),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -10),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    },
    {
      id: 5,
      url: '',
      title: 'Dart Game?',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'ETC',
      extendedProps: {
        location: 'Chicago',
        description: 'on a Trip',
        addGuest: []
      }
    },
    {
      id: 6,
      url: '',
      title: 'Meditation',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    },
    {
      id: 7,
      url: '',
      title: 'Dinner',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Family',
      extendedProps: {
        location: 'Moscow',
        description: 'The party club'
      }
    },
    {
      id: 8,
      url: '',
      title: 'Product Review',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Business',
      extendedProps: {
        location: 'Japan',
        description: 'weekend Drive'
      }
    },
    {
      id: 9,
      url: '',
      title: 'Monthly Meeting',
      start:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() + 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
      end:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() + 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
      allDay: true,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 10,
      url: '',
      title: 'Monthly Checkup',
      start:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() - 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      end:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() - 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    }
  ];
  public static calendar = [
    { id: 1, filter: 'Business', color: 'primary', checked: true },
    { id: 2, filter: 'Holiday', color: 'success', checked: true },
    { id: 3, filter: 'Personal', color: 'danger', checked: true },
    { id: 4, filter: 'Family', color: 'warning', checked: true },
    { id: 5, filter: 'ETC', color: 'info', checked: true }
  ];

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   * @param {CalendarService} _calendarService
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreSidebarService: CoreSidebarService,
    private _calendarService: CalendarService,
    private _coreConfigService: CoreConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Event Class
   *
   * @param s
   */
  eventClass(s) {
    const calendarsColor = {
      Business: 'primary',
      Holiday: 'success',
      Personal: 'danger',
      Family: 'warning',
      ETC: 'info'
    };

    const colorName = calendarsColor[s.event._def.extendedProps.calendar];
    return `bg-light-${colorName}`;
  }

  /**
   * Update Event
   *
   * @param eventRef
   */
  handleUpdateEventClick(eventRef: EventClickArg) {
    this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
    this._calendarService.updateCurrentEvent(eventRef);
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Date select Event
   *
   * @param eventRef
   */
  handleDateSelect(eventRef) {
    const newEvent = new EventRef();
    newEvent.start = eventRef.start;
    this._coreSidebarService.getSidebarRegistry('calendar-event-sidebar').toggleOpen();
    this._calendarService.onCurrentEventChange.next(newEvent);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe config change
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      // ! If we have zoomIn route Transition then load calendar after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          // Subscribe to Event Change
          this._calendarService.onEventChange.subscribe(res => {
            this.events = res;
            this.calendarOptions.events = res;
          });
        }, 450);
      } else {
        // Subscribe to Event Change
        this._calendarService.onEventChange.subscribe(res => {
          this.events = res;
          this.calendarOptions.events = res;
        });
      }
    });

    this._calendarService.onCurrentEventChange.subscribe(res => {
      this.event = res;
    });
  }

  /**
   * Calendar's custom button on click toggle sidebar
   */
  ngAfterViewInit() {
    // Store this to _this as we need it on click event to call toggleSidebar
    let _this = this;
    this.calendarOptions.customButtons = {
      sidebarToggle: {
        text: '',
        click() {
          _this.toggleSidebar('calendar-main-sidebar');
        }
      }
    };
  }

}
