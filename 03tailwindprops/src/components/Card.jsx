const Card = ({ username, post="Not asigned yet" }) => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://i.pinimg.com/736x/67/b7/e3/67b7e32789206a11a41a378baae7d271.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              modi placeat neque vitae a veniam aspernatur asperiores assumenda
              soluta esse eos cum culpa magni enim dolores magnam, iusto sint
              ratione.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
            	{post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
