export default function Logo() {
  const text = "TravelAngola";

  return (
    <h1 className="text-4xl font-black flex tracking-wide">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={
            index < 4
              ? "text-red-600"
              : index < 8
                ? "text-yellow-400"
                : "text-black"
          }
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}
