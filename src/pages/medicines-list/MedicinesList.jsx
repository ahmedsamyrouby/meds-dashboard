import MedicineCard from './MedicineCard';

const MedicinesList = () => {
  return (
    <main className="d-flex flex-column">
      <header className="login-header pt-4">
        <h1>Medicines List</h1>
      </header>
      <div className=" p-5 d-flex flex-wrap justify-content-evenly">
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
        <MedicineCard />
      </div>
    </main>
  );
};

export default MedicinesList;
