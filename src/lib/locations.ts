export type Location = {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  image: string;
};

export const locations: Location[] = [
  {
    id: "stables",
    name: "The Stables",
    x: 34,
    y: 18,
    description:
      "The heart of our sanctuary, housing our seniors and those needing extra care.",
    image:
      "https://images.unsplash.com/photo-1663036050191-9dd1e7985b52?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "arena",
    name: "Rehab Arena",
    x: 32,
    y: 35,
    description:
      "Where trust is rebuilt. Our specialized training facility for rehabilitation.",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "goats",
    name: "Our Goat Sanctuary",
    x: 24,
    y: 54,
    description:
      "Meet Snap, Crackle, and Pop. They are our goats, and they are in a boy band.",
    image: "/images/map/goats.jpg",
  },
];
