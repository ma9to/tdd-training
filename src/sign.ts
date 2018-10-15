interface UserData {
    name: string;
    corporateName: string;
    emailAddress: string;
}

export class User {
    public name: string;
    public corporateName: string;
    public emailAddress: string;

    constructor(
        data: UserData
    ) {
        this.name = data.name;
        this.corporateName = data.corporateName;
        this.emailAddress = data.emailAddress;
    }
}