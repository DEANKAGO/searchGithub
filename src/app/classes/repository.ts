export class Repository {
    constructor(
        public name:string,
        public description:string,
        public author:string,
        public stargazer:number,
        public watchers:number,
        public forks:number,
        public created_at:Date,
        public htmlURL:string,
        public homepage:string,
    ){}
}
