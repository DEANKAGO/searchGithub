export class UserRepos {
    constructor(
        public name:string,
        public description:string,
        public homepage:string,
        public author:string,
        public stargazer:number,
        public watchers:number,
        public forks:number,
        public created_at:Date,
        public htmlURL:string
    ){}
}
