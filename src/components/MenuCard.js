import MenuList from "./MenuList";

const MenuCard = ({ menu, showIndex, setShowIndex }) => {

  const handleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 p-4 my-3 mx-auto shadow-lg bg-gray-50">
      <div
        className="flex justify-between text-xl cursor-pointer"
        onClick={handleAccordion}
      >
        <span className="font-bold">{menu.title}</span>
        <span>{showIndex ? '⬆️' : '⬇️'}</span>
      </div>

      {showIndex &&
        menu.itemCards.map((item) => (
          <MenuList key={item.card.info.id} item={item.card.info} />
        ))}
    </div>
  );
};

export default MenuCard;
