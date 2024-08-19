interface propStruct {
  onAddCount: () => void;
}

const ChildCounter: React.FC<propStruct> = (props) => {
  return <button onClick={props.onAddCount}>Add</button>;
};

export default ChildCounter;
