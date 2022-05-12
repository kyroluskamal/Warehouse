import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './shared/components/default-layout/default-layout.component';
import { AuthGuardService } from './shared/services/auth-guard/auth-guard.service';
import { RegisterComponent } from './views/register/register.component';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
const routes: Routes = [

  // {path:'',pathMatch:'full', redirectTo:'register'},

  { path: 'register', component: RegisterComponent },

  {
    path: 'home',
    component: DefaultLayoutComponent,data: {breadcrumbs:'Home'},
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('./modules/projects/projects.module').then(x => x.ProjectsModule)
    //   }
    // ]
  },
  {
    path: 'orders',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/neworder/neworder.module').then(x => x.NeworderModule)
      }
    ]
  },

  {
    path: 'projectmanagment',
    component: DefaultLayoutComponent,
    children: 
    [
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(x => x.ProjectsModule)
      },
      {
        path: 'package',
        loadChildren: () => import('./modules/packages/packages.module').then(x => x.PackagesModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./modules/teams/teams.module').then(x => x.TeamsModule)
      },
      {
        path: 'task',
        loadChildren: () => import('./modules/tasks/tasks.module').then(x => x.TasksModule)
      },
      {
        path: 'assignee',
        loadChildren: () => import('./modules/assignee/assignee.module').then(x => x.AssigneeModule)
      },

    ]
  },


  // {path:'employee',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/employee/employee.module').then(x =>x.EmployeeModule)
  //  }
  // ]
  // },

  {
    path: 'purchases',
    component: DefaultLayoutComponent,data: {breadcrumbs:'purchases'},
    children: [
      // {
      //   path: 'newpurchases',
      //   loadChildren: () => import('./modules/vendor/vendor.module').then(x => x.VendorModule)
      // },
      {
        path: 'purchasesorder',
        loadChildren: () => import('./modules/purchaseorder/purchaseorder.module').then(x => x.PurchaseorderModule)
      },
      {
        path: 'vendor',
        loadChildren: () => import('./modules/vendor/vendor.module').then(x => x.VendorModule)
      },
    ]
  },

  {
    path: 'warehouse',
    component: DefaultLayoutComponent, data:{titulo:'warehouse'},
    children: [
      {
        path: 'newwarehouse',
        loadChildren: () => import('./modules/warehouse/warehouse.module').then(x => x.WarehouseModule)
      },
    ]
  },

  {
    path: 'workorders',
    component: DefaultLayoutComponent,data: {breadcrumbs:'workorders'},
    children: [
      {
        path: 'Ticket',
        loadChildren: () => import('./modules/tickettwo/tickettwo.module').then(x => x.TickettwoModule)
      },
    ]
  },

  {
    path: 'newfiles',
    component: DefaultLayoutComponent,data: {breadcrumbs:'newfiles'},
    children: [
      {
        path: 'cities',
        loadChildren: () => import('./modules/cities/cities.module').then(x => x.CitiesModule)
      },
      {path: 'countery',loadChildren: () => import('./modules/countery/countery.module')
            .then(mod => mod.CounteryModule), data: {breadcrumb: 'Countery'}},
      // {
      //   path: 'countery',
      //   loadChildren: () => import('./modules/countery/countery.module').then(x => x.CounteryModule), data: {breadcrumb: 'Countery'}
      // },

      {
        path: 'unitmeasurement',
        loadChildren: () => import('./modules/unitmeasure/unitmeasure.module').then(x => x.UnitmeasureModule)
      },

      {
        path: 'priority',
        loadChildren: () => import('./modules/priority/priority.module').then(x => x.PriorityModule)
      },
      {
        path: 'servicestypes',
        loadChildren: () => import('./modules/servicetype/servicetype.module').then(x => x.ServicetypeModule)
      },

      {
        path: 'subservices',
        loadChildren: () => import('./modules/subservice/subservice.module').then(x => x.SubserviceModule)
      },
      {
        path: 'Workorderstatus',
        loadChildren: () => import('./modules/workorder/workorder.module').then(x => x.WorkorderModule)
      },
      {
        path: 'ordertype',
        loadChildren: () => import('./modules/workordertype/workordertype.module').then(x => x.WorkordertypeModule)
      },
      {
        path: 'mainservices',
        loadChildren: () => import('./modules/mainservic/mainservic.module').then(x => x.MainservicModule)
      },
      {
        path: 'department',
        loadChildren: () => import('./modules/department/department.module').then(x => x.DepartmentModule)
      },
      {
        path: 'serviceprice',
        loadChildren: () => import('./modules/serviceprice/serviceprice.module').then(x => x.ServicepriceModule)
      },
      {
        path: 'ticketstatus',
        loadChildren: () => import('./modules/ticket/ticket.module').then(x => x.TicketModule)
      },
      {
        path: 'unitmeasurement',
        loadChildren: () => import('./modules/unitmeasure/unitmeasure.module').then(x => x.UnitmeasureModule)
      },

      {
        path: 'usertypes',
        loadChildren: () => import('./modules/usertype/usertype.module').then(x => x.UsertypeModule)
      },

      {
        path: 'profession',
        loadChildren: () => import('./modules/profession/profession.module').then(x => x.ProfessionModule)
      },
    ]
  },

  {
    path: 'users',
    component: DefaultLayoutComponent,

    children: [
      {
        path: 'employee',
        loadChildren: () => import('./modules/employee/employee.module').then(x => x.EmployeeModule)
      },

      {
        path: 'clients',
        loadChildren: () => import('./modules/client/client.module').then(x => x.ClientModule)
      },
    ]

  },

  {
    path: 'priority',data: {breadcrumbs:'priority'},
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/priority/priority.module').then(x => x.PriorityModule)
      }
    ]
  },

  // {path:'countery',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/countery/countery.module').then(x =>x.CounteryModule)
  //  }
  // ]
  // },



  // {path:'ordertype',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/workordertype/workordertype.module').then(x =>x.WorkordertypeModule)
  //  }
  // ]
  // },

  // {path:'mainservices',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/mainservic/mainservic.module').then(x =>x.MainservicModule)
  //  }
  // ]
  // },

  // {path:'department',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/department/department.module').then(x =>x.DepartmentModule)
  //  }
  // ]
  // },

  // {path:'serviceprice',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/serviceprice/serviceprice.module').then(x =>x.ServicepriceModule)
  //  }
  // ]
  // },

  {
    path: 'purchasesorder',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/purchaseorder/purchaseorder.module').then(x => x.PurchaseorderModule)
      }
    ]
  },

  // {path:'ticketstatus',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/ticket/ticket.module').then(x =>x.TicketModule)
  //  }
  // ]
  // },


  // {path:'profile',
  // component:DefaultLayoutComponent,
  // children:[
  //  {
  //   path:'',
  //   loadChildren:() =>import('./modules/profile/profile.module').then(x =>x.ProfileModule)
  //  }
  // ]
  // },

  //   {path:'',
  //   component:DefaultLayoutComponent,
  //   children:[
  //     {
  //      path:'',
  //      loadChildren:() =>import('./modules/auth/auth.module').then(x =>x.AuthModule)
  //     }
  //   ]
  //  },

  //  {path:'user',
  // //  component:UserlayoutComponent,
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
