function ContainerBox(prop) {
  return (
    <>
      <div className="bg-slate-400 border-4 p-8 boeder-double rounded-sm">{prop.children}</div>
    </>
  );
}

export default ContainerBox;
