import type { NewsItem } from "../interfaces/Components";

import News1 from "../assets/news/News-01.png"
import News2 from "../assets/news/News-02.png"

export const newsData: NewsItem[] = [
    {
      title: "QSG News",
      image: News1,
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum, sit minus architecto molestias facilis tempore dignissimos dicta hic magnam aperiam repudiandae enim ducimus quia qui reprehenderit in id culpa.",
      date: "Aug 11, 2025",
      large: true,
    },
    {
      title: "QSG News",
      image: News2,
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "Aug 04, 2025",
    },
    {
      title: "QSG News",
      image: News1,
      link: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "May 12, 2025",
    },
  ];