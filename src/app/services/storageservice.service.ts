import { Injectable } from '@angular/core';

@Injectable()
export class StorageserviceService {

  private item: any;
  constructor() { }

  getItem(){
    return this.item;
  }

  setItem(item: any){
    this.item = item;
  }
}
