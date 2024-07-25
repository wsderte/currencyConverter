import { Component, inject, Input } from '@angular/core'
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import { FloatLabelType } from '@angular/material/form-field';
import {map} from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatBottomSheet,
  MatBottomSheetModule,MatBottomSheetRef } from '@angular/material/bottom-sheet';
  
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import { OSM } from 'ol/source';
// import 'ol/ol.css';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    // @Input() isOpen = true;
    isOpen:boolean = true;
    isDesktop:boolean;
    currentModal: string | null = null;
    isPickup: boolean = false;
    lat:number | undefined;
    lng:number | undefined;


    readonly hideRequiredControl = new FormControl(false);
    readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
    readonly options = inject(FormBuilder).group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
    protected readonly hideRequired = toSignal(this.hideRequiredControl.valueChanges);
    protected readonly floatLabel = toSignal(
      this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
      {initialValue: 'auto'},
    );

    constructor( private _bottomSheet: MatBottomSheet){
      this.isDesktop = window.innerWidth >=768
      
      if (navigator){
        navigator.geolocation.getCurrentPosition( pos => {
            this.lng = +pos.coords.longitude;
            this.lat = +pos.coords.latitude;
            console.log(this.lng, this.lat, "COORDINATES")
        });
      }
    }

   


    onContainerClick(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest('.modal-content') && !(event.target as HTMLElement).closest('.modal-content2'))  {
        this.currentModal = '';
      }
    }

    getPosition(): Promise<any>{
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
          resolve({
              lng: resp.coords.longitude,
              lat: resp.coords.latitude
            })},
        err => {  reject(err)  }
      )});
    }

    onClickSendLocation():void {
      this.getPosition().then(pos=>
        {
           console.log(`Positon: ${pos.lng} ${pos.lat}`);
        });
    }

    openBottomSheet(): void {
      this._bottomSheet.open(BottomSheetOverviewSheet);
    }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  onToggleChange() {
    console.log(this.isPickup ? 'самовывоз' : 'доставка');
  }

  closeModal() {
    this.isOpen = !this.isOpen;
  }

  showModal = (modalName: string): void => {
      this.currentModal = modalName;
      // this.openBottomSheet();

  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.component.html',
  styleUrls: ['./form.component.css'],
})
export class BottomSheetOverviewSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./form.component.css']
})
export class Block1Component {
  @Input() currentModal: string | null = "";
  @Input()isDesktop: boolean = false;
  @Input()
  showModal!: (args: string) => void;
}