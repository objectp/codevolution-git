import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You selected department with id = {{ departmentId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <br />
    <a (click)="goNext()">Next</a>
    <br />

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id')); 
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
   let previousId = this.departmentId -1 ;
   this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1 ;
    this.router.navigate(['/departments', nextId]);
   }

   gotoDepartments(){
     let selectedId = this.departmentId ? this.departmentId: null;
     this.router.navigate(['/departments', {id: selectedId}]);
   }
 

}
