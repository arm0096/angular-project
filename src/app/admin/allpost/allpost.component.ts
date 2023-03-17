import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AllUsers} from "../../Model/model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments";

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent implements OnInit {
  btnclik: string = '';
  forms: boolean = false;
  id: number = 0;
  displayedColumns: string[] = [
    'id',
    'img',
    'title',
    'text',
    'ptext',
'Action',
  ];
  form: FormGroup = new FormGroup({});

  dataSource!: MatTableDataSource<AllUsers>;

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
      ptext: [''],

    });
    this.getAllUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  add() {
    this.forms = !this.forms;
    this.btnclik = 'Add';
  }

  submit() {
    if (this.btnclik == 'Add') {
      let item: AllUsers = {
        id: this.form.get('id')?.value,
        img: this.form.get('img')?.value,
        title: this.form.get('title')?.value,
        text: this.form.get('text')?.value,
        ptext: this.form.get('ptext')?.value

      };
      if (confirm('Do your really want to add new Autors')) {
        this.request
          .postData<AllUsers>(environment.allUsers.get, item)
          .subscribe(() => {
            this.getAllUsers();
            this.forms = !this.forms;
          });
      }
    } else if (this.btnclik == 'edit') {
      console.log('hello words');

      if (confirm('Do you really want to confirm the change?')) {
        this.request.putData<AllUsers>(`${environment.allUsers.get}/${this.id}`,this.form.value)
      .subscribe(() => {
          this.getAllUsers();
          this.forms = !this.forms;
        });
      }
    }
  }

  addit(row: AllUsers) {
    this.forms = !this.forms;
    this.btnclik = 'edit';
    this.form.patchValue({
      img: row.img,
      text: row.text,
      title: row.title,
      ptext: row.ptext,

    });
    this.id = row.id;
  }



  delate(id: number) {
    if (confirm('Do you want to delete this')) {
      this.request.deleteData(environment.allUsers.get, id).subscribe(() => {
        this.getAllUsers();
      });
    }
  }


  getAllUsers() {
    this.request.getData<AllUsers[]>(environment.allUsers.get).subscribe((item) => {
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
