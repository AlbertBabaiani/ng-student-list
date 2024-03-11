import { Courses } from "./Courses";

export class Student{
    constructor(
        private _id: string,
        private _first_name: string,
        private _last_name: string,
        private _gender: string,
        private _dob: Date,
        private _course: Courses,
        private _points: number,
        private _fee: number,
        ){}

    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

    get first_name(): string {
        return this._first_name;
    }
    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }
    set last_name(value: string) {
        this._last_name = value;
    }

    get gender(): string {
        return this._gender;
    }
    set gender(value: string) {
        this._gender = value;
    }

    get dob(): Date {
        return this._dob;
    }
    set dob(value: Date) {
        this._dob = value;
    }

    get course(): Courses {
        return this._course;
    }
    set course(value: Courses) {
        this._course = value;
    }

    get points(): number {
        return this._points;
    }
    set points(value: number) {
        this._points = value;
    }

    get fee(): number {
        return this._fee;
    }
    set fee(value: number) {
        this._fee = value;
    }
}