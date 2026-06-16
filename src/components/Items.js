import BasicCard from "./BasicCard";

const Items = ({ items, onDelete, onToggle }) => {
  return (
    <>
      {items.map((item) => (
        <BasicCard
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Items;
