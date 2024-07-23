
import failed from '../src/assets/failed.svg'
import doneIcon from '../src/assets/done.svg';
import favorite from '../src/assets/favorite.svg';
import star from '../src/assets/star.svg';
import like from '../src/assets/like.svg';
import coffe from '../src/assets/coffe.svg';
import  car from '../src/assets/car.svg';
import home from '../src/assets/home.svg';
import travel from '../src/assets/travel.svg';



const itemsData = [
    {
        id: 1,
        title: "Task Completed",
        content: "This task was completed successfully.",
        icon: doneIcon
    },
    {
        id: 2,
        title: "Task Failed",
        content: "This task failed.",
        icon: failed
    },
    {
        id: 3,
        title: "Favorite",
        content: "This is a favorite item.",
        icon: star
    },
    {
        id: 4,
        title: "Love",
        content: "This item is loved.",
        icon: favorite
    },
    {
        id: 5,
        title: "Liked",
        content: "This item is liked.",
        icon: like
    },
    {
        id: 6,
        title: "Coffee Break",
        content: "Time for a coffee break.",
        icon: coffe
    },
    {
        id: 7,
        title: "Car",
        content: "This is a car item.",
        icon: car
    },
    {
        id: 8,
        title: "Home",
        content: "This is a home item.",
        icon: home
    },
    {
        id: 9,
        title: "Travel",
        content: "Time to travel.",
        icon: travel
    }
];

export default itemsData;
