import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const MealsList = ({ mealsArray }) => {
  const mealsList = mealsArray.map((meal) => (
    <MealItem
      key={`meal-${Math.floor(Math.random() * 1000)}`}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </ul>
    </section>
  );
};

const AvailableMeals = () => {
  return <MealsList mealsArray={DUMMY_MEALS} />;
};

export default AvailableMeals;
