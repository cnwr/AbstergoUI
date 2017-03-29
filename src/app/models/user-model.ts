export class UserModel {
    constructor(
        public userName:string, 
        public firstName: string, 
        public lastName:string,
        public phone:string,
        public mail:string,
        public birthDay:Date
        ){}
}