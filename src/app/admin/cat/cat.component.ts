import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ChooseUsers, ListUsers} from "../../Model/model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {
  btnclik: string = '';
  forms: boolean = false;
  id: number = 0;
  displayedColumns: string[] = [
    'id',
    'img',
    'title',
    'text',
    'Action',
  ];
  form: FormGroup = new FormGroup({});

  dataSource!: MatTableDataSource<ChooseUsers>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private request: RequestService, public fm: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fm.group({
      id: [''],
      img: [''],
      title: [''],
      text: [''],


    });
    this.getChooseUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  add() {
    this.forms = !this.forms;
    this.btnclik = 'Add';
  }

  submit() {
    if (this.btnclik == 'Add') {
      let item: ChooseUsers = {
        id: this.form.get('id')?.value,
        img: this.form.get('img')?.value,
        title: this.form.get('title')?.value,
        text: this.form.get('text')?.value,


      };
      if (confirm('Do your really want to add new Autors')) {
        this.request
          .postData<ChooseUsers>(environment.chooseUsers.get, item)
          .subscribe(() => {
            this.getChooseUsers();
            this.forms = !this.forms;
          });
      }
    } else if (this.btnclik == 'edit') {
      console.log('hello words');

      if (confirm('Do you really want to confirm the change?')) {
        this.request.putData<ChooseUsers>(`${environment.chooseUsers.get}/${this.id}`,this.form.value)
          .subscribe(() => {
            this.getChooseUsers();
            this.forms = !this.forms;
          });
      }
    }
  }

  addit(row: ChooseUsers) {
    this.forms = !this.forms;
    this.btnclik = 'edit';
    this.form.patchValue({
      img: row.img,
      text: row.text,
      title: row.title,


    });
    this.id = row.id;
  }



  delate(id: number) {
    if (confirm('Do you want to delete this')) {
      this.request.deleteData(environment.chooseUsers.get, id).subscribe(() => {
        this.getChooseUsers();
      });
    }
  }


  getChooseUsers() {
    this.request.getData<ChooseUsers[]>(environment.chooseUsers.get).subscribe((item) => {
        this.dataSource = new MatTableDataSource(item);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (e) => {
        alert('Error');
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
