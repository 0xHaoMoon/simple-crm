export class Customers{
    name: string;
    street: string;
    zipCode: number;
    city: string;
    email:string;
    number:number;
    prio:string;

    constructor(obj?:any){
        this.name = obj ? obj.firstname : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email:'';
        this.number = obj ? obj.number:'';
        this.prio = obj ? obj.prio:'';
    }

    public toJSON(){
        return {
            Name: this.name,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email,
            number : this.number,
            prio : this.prio
        };
    }
}