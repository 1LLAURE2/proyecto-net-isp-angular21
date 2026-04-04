import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPlansUseCase } from '../../application/use-cases/get-plans.usecase';
import { Plan } from '../../dominio/models/plan.model';
import { Observable } from 'rxjs';
// import { GetPlansUseCase } from '../../application/use-cases/get-plans.usecase';

@Component({
  // standalone: true,
  selector: 'app-list-planes',
  imports: [CommonModule],
  templateUrl: './list-planes.html',
  // template: `
  //   <h2>Planes</h2>

  //   <ul>
  //     @for (plan of plans; track plan.id) {
  //       <li>
  //         {{ plan.name }} - S/. {{ plan.price }} - {{ plan.speed }} Mbps
  //       </li>
  //     }
  //   </ul>
  // `
  styleUrls: ['./list-planes.css'],
})
export class ListPlanes {
  private getPlans = inject(GetPlansUseCase);

  plans: Plan[] = [];

  plans$: Observable<Plan[]> = this.getPlans.execute();

  // ngOnInit() {
  //   this.getPlans.execute()
  //     .subscribe(data => {
  //       console.log("PLANSsss 👉", data); // 👈 aquí sí verás los 6
  //       this.plans = data;
  //     });
  // }
}
