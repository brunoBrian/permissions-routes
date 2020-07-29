import React, {useState, useEffect, useCallback, useMemo} from 'react';

function ProtectAdmin() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  }

  const decrement = () => {
    setCount(count => count - 1);
  }

  useEffect(() => {
    console.log('ProtectAdmin Re-render')
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>UseCallback</h1>
        <h2>Count: {count}</h2>
        {/* useCallback para não atualizar a referencia do onCLick, então a função onclick é memorizada e não renderizara quando o componente for renderizado novamente. Mantém a igualdade referencial entre renders */}
        <ButtonCount onClick={useCallback(() => increment(), [])}>Increment</ButtonCount>
        <ButtonCount onClick={useCallback(() => decrement(), [])}>Decrement</ButtonCount>
        {/* <ButtonCount onClick={decrement}>Decrement</ButtonCount> */}
      </header>
    </div>
  );
}

export default ProtectAdmin;


function ButtonCount({...props}) {

  useEffect(() => {
    console.log("Render always component's father state was changed")
  })

  useEffect(() => {
    console.log('Render button first time')
  }, [])

  useEffect(() => {
    console.log('Button onClick Re-render')
  }, [props.onClick])

  return (
    <div className="App">
      <button {...props} />
    </div>
  );
}