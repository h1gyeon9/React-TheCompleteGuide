import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>  {/*JSX는 하나의 값을 반환함. 이하는 하나로 묶는 세 가지 방식 1. div가 없으면 Header와 main 두 개의 값이 됨. div로 묶어서 하나로 만들기. 2. Fragment를 사용하면 불필요한 div 없이 하나로 묶을 수 있음. 3. 빈 태그를 사용함 */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;