import { CheckCircle, Cancel, Star, Favorite, ThumbUp, LocalCafe, DirectionsCar, Home, Flight } from '@mui/icons-material';

const icons={CheckCircle:CheckCircle, Cancel:Cancel, Star:Star, Favorite:Favorite, Thumb:ThumbUp, LocalCafe:LocalCafe, DirectionsCar:DirectionsCar, Home:Home, Flight:Flight}

const itemsData = [
    {
      id: 1,
      title: "Task Completed",
      content: "This task was completed successfully.",
      icon: icons.CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      title: "Task Failed",
      content: "This task failed.",
      icon: icons.Cancel,
      color: 'red'
    },
    {
      id: 3,
      title: "Favorite",
      content: "This is a favorite item.",
      icon: icons.Star,
      color: 'gold'
    },
    {
      id: 4,
      title: "Love",
      content: "This item is loved.",
      icon: icons.Favorite,
      color: 'red'
    },
    {
      id: 5,
      title: "Liked",
      content: "This item is liked.",
      icon: icons.Thumb,
      color: 'blue'
    },
    {
      id: 6,
      title: "Coffee Break",
      content: "Time for a coffee break.",
      icon: icons.LocalCafe,
      color: 'brown'
    },
    {
      id: 7,
      title: "Car",
      content: "This is a car item.",
      icon: icons.DirectionsCar,
      color: 'grey'
    },
    {
      id: 8,
      title: "Home",
      content: "This is a home item.",
      icon: icons.Home,
      color: 'teal'
    },
    {
      id: 9,
      title: "Travel",
      content: "Time to travel.",
      icon: icons.Flight,
      color: 'purple'
    }
  ];
  
  export default itemsData;
  