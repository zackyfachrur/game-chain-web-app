import CardList from "../../Json/Home/CardListView.json";
import { encryptData } from "../../Utils/parseURL";

const ListGameCards = () => {
  return (
    <>
      <section className="flex flex-row items-center justify-start w-full h-full">
        <div className="container flex flex-wrap self-center gap-2 ml-[560px]">
          <div className="h-32 flex flex-row justify-start gap-[50%] w-full items-center">
            <h2 className="text-4xl font-bold">
              <span className="border-b-4 border-colorAqua">More Games</span>
            </h2>
            <button className="px-5 py-2 text-xl text-colorAqua hover:underline underline-offset-4 rounded-xl">
              View Collection <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="flex flex-wrap">
            {/* Sorting Limited Index */}
            {CardList.filter((card) => card.popular === false)
              .slice(0, 6)
              .map((content, index) => {
                const category = content.category.split(" ");
                const contentID = content.id.replace(/ /g, "-").toLowerCase();
                const encryptParams = encryptData(encodeURI(contentID));

                return (
                  <div
                    className="bg-colorPurple w-[350px] flex justify-center text-start items-center flex-col rounded-xl m-4 mt-8"
                    key={index}
                  >
                    <img
                      src={content.thumbnail}
                      alt="Hero Thumbnail"
                      className="w-[300px] h-[250px] object-cover -mt-8 rounded-2xl"
                    />
                    <div className="self-start px-8 py-4">
                      <h2 className="text-2xl font-bold cursor-pointer">
                        {/* Limit Character Games Card Title */}
                        {content.name.length > 16
                          ? `${content.name.slice(0, 17)}...`
                          : content.name}
                      </h2>
                      <p className="text-xl font-semibold text-colorAqua">
                        {content.price} ETH
                      </p>
                      <ul className="flex flex-wrap pt-1 text-sm uppercase">
                        {category.slice(0, 2).map((item, categoryIndex) => (
                          <li
                            className="flex gap-1 px-1 font-semibold"
                            key={categoryIndex}
                          >
                            <i className="ri-gamepad-line"></i>
                            {item.replace(/-/g, " ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-4 my-8">
                      <button className="w-[85%] px-4 py-2 uppercase border-2 rounded-full outline-none hover:bg-colorAqua hover:text-colorViolet border-colorAqua text-colorAqua">
                        Add to cart <i className="ri-shopping-cart-2-fill"></i>
                      </button>
                      <button
                        className="w-[85%] px-4 py-2 bg-transparent hover:bg-colorWhite hover:text-colorViolet border-colorWhite uppercase border-2 rounded-full hover:border-colorWhite bg-colorPurple text-colorWhite outline-none"
                        onClick={() => {
                          // Decrypt the ID and redirect to the correct page
                          window.location.assign(`/games/${encryptParams}`);
                        }}
                      >
                        Read More <i className="ri-arrow-right-line"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListGameCards;
