import { forwardRef } from "react";
import { RiStarSFill } from "react-icons/ri";
const Difficultylevel = ({ difficulty }) => {
  let spans = [],
    index = 0;
  index =
    difficulty.toLowerCase() === "beginner"
      ? 1
      : difficulty.toLowerCase() === "intermediate"
      ? 2
      : 3;
  for (let i = 0; i < 3; i++) {
    spans.push(
      <span
        key={i}
        className={`${
          i < index ? "active" : ""
        } block w-1 h-2 rounded-[1px] bg-white [&:is(.active)]:bg-[var(--bg)] 
        [&:nth-child(1)]:h-[6px] [&:nth-child(2)]:h-[10px] [&:nth-child(3)]:h-[14px]`}
      ></span>
    );
  }
  return <>{spans}</>;
};

const Course = forwardRef(
  (
    {
      id,
      title,
      category,
      difficulty,
      thumbnail,
      instructor: { name, pic },
      rating,
    },
    ref
  ) => {
    return (
      <div
        className="group relative h-[250px] border-[1.5px] border-solid border-transparent rounded-4xl overflow-hidden transition-colors duration-300"
        ref={ref}
        data-id={id}
        data-category={category.toLowerCase()}
        data-difficulty={difficulty.toLowerCase()}
      >
        <div className="w-full h-full">
          <img src={thumbnail} alt={title} />
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-24 p-2 m-2 bg-white border-[1.5px] border-solid
        border-transparent rounded-3xl transition-colors duration-300 group-hover:border-gray-10"
        >
          <a
            href="#"
            className="flex flex-col justify-between h-full"
            title={title}
          >
            <div className="flex justify-between gap-4">
              <p className="text-lg font-medium text-gray-10 whitespace-nowrap text-ellipsis overflow-hidden">
                {title}
              </p>
              <div className="flex items-center gap-4 rounded-md p-1 h-fit bg-[var(--bg-alpha-35)]">
                <p className="text-sm font-semibold text-gray-10 !leading-[normal]">
                  {difficulty}
                </p>
                <div className="flex items-end gap-x-0.5">
                  <Difficultylevel difficulty={difficulty} />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-4">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <img src={pic} alt={name} />
                </div>
                <p className="text-base font-medium">{name}</p>
              </div>
              <div className="flex items-center gap-x-2">
                {[...Array(5)].map((_, index) => (
                  <RiStarSFill
                    key={index}
                    className="text-primary-50"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-base font-semibold">{rating}</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
);

export default Course;
