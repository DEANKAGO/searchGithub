export class Repository {
    constructor(
        public name: string,
        public description:string,
        public author:string,
        public homepage:string,
        public stargazer:number,
        public forks:number,
        public watchers:number,
        public created_at:Date,
        public htmlURL:string
    ){}
}
