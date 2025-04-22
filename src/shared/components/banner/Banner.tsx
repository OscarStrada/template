export const Banner = () => {
  console.log("🚀 ~ banner was render");

  return (
    <div className="bg-[#91B3FF] text-[#15274D] font-bold py-5 flex justify-between items-center px-32">
      <span>
        ¡Felicidades! Eres de los primeros que prueban el nuevo sitio.
      </span>
      <span>Volver al sitio clásico →</span>
    </div>
  );
};
