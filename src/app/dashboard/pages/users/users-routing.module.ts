import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserDetailComponent } from "./pages/user-detail/user-detail.component";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";



@NgModule({
    declarations:[],

    imports:[
        CommonModule,
        RouterModule.forChild([
            {
              path: '',
              component: UsersComponent,  
            },
            {
                path:'by/:id',
                component: UserDetailComponent,
            },
        ])
    ],
    
exports : [RouterModule],
})

export class UsersRoutingModule {}