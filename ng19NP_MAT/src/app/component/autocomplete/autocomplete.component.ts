import { Component, OnInit } from '@angular/core';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { MasterService } from '../../service/master.service';
import { colorentity } from '../../Entity/colorentity';

@Component({
  selector: 'app-autocomplete',
  imports: [
            AsyncPipe,
            CommonModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule,
            FormsModule
          ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['Red', 'Green', 'Yellow'];
  filteroptions!:Observable<string[]>
  formcontrol = new FormControl('');

  colorarraylist!:colorentity[];
  filteroptionslist!:Observable<colorentity[]>

  constructor(private service: MasterService){
   this.colorarraylist= this.service.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroptions = this.formcontrol.valueChanges.pipe(
    //   startWith(''), map(value => this._FILTER(value || ''))
    // )

    this.filteroptionslist = this.formcontrol.valueChanges.pipe(
      startWith(''), map(value => this._LISTFILTER(value || ''))
    )
  }

  private _FILTER(value: string): string[]{
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
  }

  private _LISTFILTER(value: string): colorentity[]{
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarraylist.filter(option => option.name.toLocaleLowerCase().includes(searchvalue));
  }

}
