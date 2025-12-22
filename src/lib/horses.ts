const breeds = "Mini Shetland" as const;
type Breed = typeof breeds;

export type Horse = {
  id: string;
  name: string;
  dob: Date;
  breed: Breed;
  image: string;
  video: string;
  tags: string[];
  stats: {
    energy: number; // 1-10
    trust: number; // 1-10
    handling: number; // 1-10
  };
};

export const HORSES: Horse[] = [
  {
    id: "1",
    name: "Mouse",
    dob: new Date(2014, 1, 1),
    breed: "Mini Shetland",
    image: "mouse.jpg",
    video:
      "https://videos.pexels.com/video-files/3209663/3209663-uhd_2560_1440_25fps.mp4",
    tags: ["Rideable", "Good with Kids"],
    stats: { energy: 7, trust: 7, handling: 8 },
  },
  {
    id: "2",
    name: "Tubs",
    dob: new Date(2018, 1, 1),
    breed: "Mini Shetland",
    image: "tubs.jpg",
    video:
      "https://videos.pexels.com/video-files/3209663/3209663-uhd_2560_1440_25fps.mp4",
    tags: ["Pasture Potato", "Good with Kids"],
    stats: { energy: 3, trust: 9, handling: 10 },
  },
];
