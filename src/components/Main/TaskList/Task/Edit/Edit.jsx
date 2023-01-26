function Edit({ value, record }) {
  return <input type="text" className="edit" defaultValue={value} onKeyUp={record} onChange={record} />;
}

export default Edit;
