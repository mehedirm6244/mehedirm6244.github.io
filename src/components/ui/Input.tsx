function Input({...args}) {
  return (
    <>
      <input
        {...args}
        className="w-full rounded-md bg-slate-750 placeholder-slate-400 px-4 py-3 text-sm"
      />
    </>
  )
}

export default Input;
