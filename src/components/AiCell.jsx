function AiCell(props) {
  let position = props.position;

  return (
    <>
      <div
        className={`${position}
          ${"blocks-within-unchecked-ai"}`}
      ></div>
    </>
  );
}

export default AiCell;
