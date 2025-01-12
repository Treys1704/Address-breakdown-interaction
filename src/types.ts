export interface AddressData {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export interface AddressItemProps {
    label: string;
    value: string;
    image: string;
    expanded: boolean;
    layoutId: string;
}

