export interface Property {
    name: string;
    description: string;
    address: string;
    location: string;
    visibility: 'PUBLIC' | 'PRIVATE';
    state: 'AVAILABLE' | 'UNAVAILABLE'
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    ownerId: number | null;
  }
