import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserhttpService} from '../../services/userhttp.service';

@Component({
  selector: 'app-makemod',
  templateUrl: './makemod.component.html',
  styleUrls: ['./makemod.component.css']
})
export class MakemodComponent {
  response: string;
  usr: string;
  usure = false;
  success: boolean;
  constructor(
    public dialogRef: MatDialogRef<MakemodComponent>,
    private userhttpService: UserhttpService,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {
  }

  onDismiss(): void{
    this.dialogRef.close();
  }

  confirm(): void{
    this.usure = true;
  }

  onCommit(): void{
    this.userhttpService.newModerator({
      login: this.data.login,
      passwd: this.data.passwd,
      usertomod: this.usr
    }).subscribe(response => {
      this.response = response.details;
      this.success = response.wasSuccesful;
      this.usure = undefined;
    }, error => {
      this.response = error.error.details;
    });
  }

}
