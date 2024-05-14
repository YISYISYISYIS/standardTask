import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
    // console.log(users);
  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  //이름과 나이를 추가할 변수와 변수를 수정할수있는 함수를 만듬.

  const addUser = (e) => {
    e.preventDefault();
    // 이벤트 기본동작을 막는 메서드. 여기서는 새로고침막음
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if(!name || !age){
      alert("값을 입력하세요")
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    const newUser = {id : Date.now() ,name ,age }
    //Date.now는 현재 날짜와시간을 나타내는 메서드. id값으로 지정시 필터링 하는데 있어 고유한 값을 가질수 있음.
    // console.log(newUser.id)
    setUsers([...users,newUser]);
    //setUsers로 users를 업뎃 하는데 스프레드연산자로 users를 쪼개고, 거기에 newUser를 같이 할당.
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    setUsers(users.filter((value)=>{
      return value.id !== id;
      //removeUser매개변수로 들어온 user.id
      //setUsers로 users를 수정하겠다.
      //users의 각 요소를 filter로 돌면서 클릭해서 들어온 매개변수값 user.id랑 비교한후 
      //같지 않으면 새로운 배열에 할당. 같으면 X . 즉 클릭해서 들어온 매개변수값은 
      //users의 안에 있으므로 제외됨. 이게 삭제처럼보임. 특정값을 제외한 새배열을 생성한다고 보면됨
    }))
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="이름" value={name} onChange={(event)=>{setName(event.target.value)}}/>
        {/* onChange는 입력 값이 변할때마다 호출되는 이벤트핸들러. 매개변수 event는 발생한 이벤트정보를 가지고 있는객체*/}
        {/* event.target는 이벤트가 발생된 요소를 가리킴->인풋창.   value는 입력필드의 현재값을 의미. 입력할때마다 변경됨*/}
        {/* setName상태업데이트함수에  event.target.value값을 인자로 전달하면서 입력된값을 name에 전달.*/}
        {/* value솔직히 아직도 이해안됨. 상태와 입력필드간의 동기화를 시킨다는데, value가 없으면
        제어되지 않는 컴포넌트가 된다. 리액트와 양방향 바인딩이 되지 않는다... 없어도 작동이되는데?? 일단은 pass */}
        <input type="number" placeholder="나이" value={age} onChange={(event)=>{setAge(event.target.value)}}/>
        <button type="submit">사용자 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
        {users.map(user => (
          <li key={user.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly",border: "1px solid #000" }}>
            이름: {user.name}, 나이: {user.age}
            <button onClick={() => removeUser(user.id)}>삭제</button>
            {/* users를 맵으로 돌면서 각각의 id,name,age값,button을 가진 새로운 배열을 생성*/}
          </li>
        ))}
      </ul>
    </>
    // onSubmit으로 addUser함수가 실행되서 새로운 사용자가 users에 추가되면 상태가변경되면서
    // 리액트가 재랜더링 하고 그때마다 users 가 바뀜
  );
}

export default App;
