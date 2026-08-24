export interface Socials {
  name: string;
  href: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export interface Contact {
  email: string;
  location: string;
  socials: Socials[];
}
