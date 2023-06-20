import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
})
export class AddNotificationComponent implements OnInit {
  public contentHeader: object


// modal Open Vertically Centered
modalOpenVC(modalVC) {
  this.modalService.open(modalVC, {
    centered: true
  });
}
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Notifications',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Notifications',
            isLink: false,
          }
        ]
      }
    };
    }
    
  }


