import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';
import { Courses } from '../Models/Courses';

@Injectable({
  providedIn: 'root'
})
export class PageLogicService {

  constructor() { }

  private _students: Student[] = [
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
    new Student('99999999999', 'John' ,'Smith', 'Male', new Date('11-12-1997'), 'CST', 50, 1899),
    new Student('11111111111', 'Mark', 'Vought', 'Male', new Date('10-06-1998'), 'CSA', 40, 2899),
    new Student('33333333333', 'Sarah', 'King', 'Female', new Date('09-22-1996'), 'CSB', 57, 2899),
    new Student('44444444444', 'Merry', 'Jane', 'Female', new Date('06-12-1995'), 'CSL', 80, 1899),
    new Student('55555555555', 'Steve', 'Smith', 'Male', new Date('12-21-1999'), 'CST', 43, 799),
    new Student('66666666666', 'Jonas', 'Weber', 'Male', new Date('06-18-1997'), 'CSA', 100, 799),
  ];

  get students(): Student[]{
    return this._students
  }

  get students_quantity(): number{
    return this._students.length
  }


  readonly total_score: number = 600

  addStudent(
    id: string,
    first_name: string,
    last_name: string,
    gender: string,
    dob: Date,
    course: Courses,
    points: number,
    fee: number
    ): void{
      this._students.push(new Student(id, first_name, last_name, gender, dob, course, points, fee))
  }

  deleteStudent(id: string): void{
    this._students = this._students.filter((student: Student) => student.id !== id)
  }
}
