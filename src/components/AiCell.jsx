function AiCell(props) {
  let position = props.position;

  return (
    <>
      <div
        onClick={() => {
          console.log(`props.Onclick`);
        }}
        className={`${position}
          ${"blocks-within-unchecked-ai"}`}
      ></div>
    </>
  );
}

export default AiCell;
