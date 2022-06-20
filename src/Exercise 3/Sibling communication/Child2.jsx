const Child2 = ({ setName }) => {
  const handleClick = () => {
    setName('Jianeng');
  };

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Set default Name
      </button>
    </>
  );
};

export default Child2;
