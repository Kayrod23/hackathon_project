import LocationEditForm from '../Components/LocationEditForm';
import "../Style/Home.css"

export default function Home() {
  return (
    <div className="container">
      <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLvOhlGwQJIqG8FM36iEeCR-SU5m9RIWda1R84Ethszx4KfbjW6tJydZKwvmemhDg1hM&usqp=CAU" alt="votehands" />
      <LocationEditForm />
    </div>
  );
}