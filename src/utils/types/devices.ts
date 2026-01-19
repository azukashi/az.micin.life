import { Database } from '@/utils/supabase/types/database.types';

export interface OperatingSystem {
    name: string;
    icon: string;
    version: string;
}

export interface GraphicsCard {
    name: string;
    icon: string;
    color: string;
    vram?: number;
}

export interface Accessory {
    name: string;
    type: string;
    description: string;
    image: string;
    link: string;
}

export interface LaptopDetails {
    image: string;
    manufacturer: string;
    release_date: string;
    proc: string;
    memory: string;
    storage: string;
    security: string;
    os: OperatingSystem[];
    graphics: GraphicsCard[];
    screenshots?: string[];
}

// Database row type from Supabase
export type DeviceRow = Database['public']['Tables']['Devices']['Row'];

// Typed device with proper details structure
export interface LaptopDevice extends Omit<DeviceRow, 'details' | 'accessories'> {
    name: string;
    details: LaptopDetails;
    accessories?: Accessory[];
}
