import { RouterModule,Routes} from '@angular/router';
import { HeroesComponent } from './component/utils/heroes/heroes.component';
import { CarouselComponent } from './components/utils/carousel/carousel.component';
import { HomeComponent } from "./components/utils/home/home.component";
import { HvComponent } from "./components/utils/hv/hv.component";
import { SobrenComponent } from "./components/utils/sobren/sobren.component";

const APP_ROUTES:Routes=[
    {path: 'home',component: HomeComponent},
    {path: 'sobren',component: SobrenComponent},
    {path: 'heroes',component: HeroesComponent},
    {path: 'carousel',component: CarouselComponent},
    {path: 'hv',component: HvComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}
]

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);