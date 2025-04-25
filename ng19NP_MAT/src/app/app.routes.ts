import { Routes } from '@angular/router';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';


export const routes: Routes = [
    {
        path:'employee-data',
        component: EmployeeDataComponent,
    },
    {
        path:'autocomplete',
        component: AutocompleteComponent,
    },
    {
        path:'input',
        component: InputComponent,
    },
   //  {path:'autocomplete',component:AutocompleteComponent},
];




