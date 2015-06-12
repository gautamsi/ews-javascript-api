import {ISelfValidate} from "../Interfaces/ISelfValidate";
export class MobilePhone implements ISelfValidate {
    Name: string;
    PhoneNumber: string;
    private name: string;
    private phoneNumber: string;
    Validate(): any {throw new Error("Not implemented");};
}


//}



