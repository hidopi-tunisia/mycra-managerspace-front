import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { Subject } from 'rxjs';
import { UserEditService } from 'app/layout/components/profil/user-edit.service';
import { cloneDeep } from 'lodash';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProfilComponent implements OnInit {
  // Public
  public url = this.router.url;
  public urlLastValue;
  public rows;
  public currentRow;
  public tempRow;
  public avatarImage: string;
//data:any

@ViewChild('accountForm') accountForm: NgForm;
public birthDateOptions: FlatpickrOptions = {
  altInput: true
};

  // Private
  private _unsubscribeAll: Subject<any>;

constructor(private router: Router, private _userEditService: UserEditService) {
  this._unsubscribeAll = new Subject();
  this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
}
uploadImage(event: any) {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();

    reader.onload = (event: any) => {
      this.avatarImage = event.target.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}

submit(form) {
  if (form.valid) {
    console.log('Submitted...!');
  }
}
  ngOnInit(): void {
    this._userEditService.onUserEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.rows.map(row => {
        if (row.id == this.urlLastValue) {
          this.currentRow = row;
          this.avatarImage = this.currentRow.avatar;
          this.tempRow = cloneDeep(row);
        }
      });
    });
  }

}
