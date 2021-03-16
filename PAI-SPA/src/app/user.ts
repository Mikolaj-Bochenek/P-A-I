export class User {
  constructor(
    public userId: number,
    public userName: string,
    public userPassword: string,
    public online: boolean = false
  ) { }
}
