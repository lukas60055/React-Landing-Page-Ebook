type Data = {
  id: string;
  title: string;
  heading: {
    h1: string;
    h2: string;
    h3: string;
  };
  text: string[];
  video: string;
  navbar: {
    title: string;
    link: string;
  }[];
  success: {
    heading: string;
    text: string[];
  };
  failed: {
    heading: string;
    text: string[];
  };
  list: string[];
  card: {
    text: string[];
    author: string[];
    subtext: string[];
  };
  price: number;
};

export type DataLanding = Data | undefined;
