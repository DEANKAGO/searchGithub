export class Users {
    date: any;
    constructor(
        public name: string,
        public following: number,
        public followers: number,
        public bio: string,
        public image: string,
        public creationDate: Date,
        public location: string,
        public email: string,
        public hireable: string,
        public htmlURL: string,

    ){}

}
