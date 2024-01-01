type CardType = {
  title: string;
  text: string;
};

function Card({ title, text }: CardType) {
  return (
    <>
      <div className="card w-full h-44 bg-base-300 shadow-xl cursor-pointer hover:scale-105 transition duration-300 active:scale-100 active:duration-300 active:bg-primary select-none hover:bg-base-200">
        <div className="card-body justify-center items-center ">
          <h2 className="card-title">{title}</h2>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
