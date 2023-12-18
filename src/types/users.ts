export interface Users {
    id: string;
    fullName: string;
    username: string;
    email: string;
    phone: string;
    picture: string;
    cell: string;
    firstName: string;
    lastName: string;
    gender: string;
    address: Address;
    nat: string;
}

interface Address {
    street: string;
    city: string;
    state: string;
    postcode: number;
    country: string;
}

