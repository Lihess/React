# 리액트의 장점
1. 리액트 : 자바스크립 + html
    > 따로 새로운 언어를 배우지 않아도 됨!
2. 요소별, 컴포넌트별로 나눠서 작업이 가능함
3. 단방향 데이터플로우 : 데이터는 항상 일정한 곳에만 있고 이곳에 접근하면 됨.
                        데이터 > UI 같의 변경만 가능

WebPack : 파일 변형을 위한 묘듈번들러, 나중에 함 봐보기!!
    > 어려우니까 우리는 create-react-app으로!

class => classname

컴포넌트는 각기 다른 함수와 메소드를 가지며, 항상 보여주는 함수인 render()을 가짐

리액트 : UI 라이브러리
리액트DOM : 리액트를 웹사이트에 올릴때 사용!
> 리엑트DOM은 하나의 컴포넌트를 출력함

props : 부모 컴포넌트가 자식컴포넌트에게 주는 값, 자식 컴포넌트는 변경 불가
    > 값을 사용할 경우, {this.props.---} 로 사용
state : 컴포넌트 내부에서 선언하는 값으로 내부에서 변경가능
    > state 값이 변경될때마다 다시 render
    > 직접적으로 값을 변경해서는 안되며 <b>'this.setState()'</b> 내에서 변경!

<b>큰 컴포넌트가 모든 데이터를 보유하고 각기 다른 칠드런에게 정보를 전달함으로써 강력한 UI 구축!</b>

# 컴포넌트 라이프 사이클
: 컴포넌트가 존재하기 시작할때 작동. 컴포넌트가 시작되면 우선 context, props, state를 저장. 후에 아래와 같은 과정을 겪음
1. willMount : 컴포넌트가 화면에 나가기 직전
2. Render : 컴포넌트를 화면에 나타냄
3. DidMount : 화면에 나타난 후

# 리액트 업데이트 사이클
1. component will reciver props
2. should component update : 이게 true라면 다음 단계 수행
3. component will update
4. render
5. component did update 

state를 가지지 않는 컴포넌트를 함수형 컴포넌트로 생성!
    > 이러한 함수형 컴포넌트는 라이프 사이클도 없음.

AJAX : Asynchronous JavaScript and XML의 약자로, 웹 페이지의 전체를 로딩하지 않고 일부분만들 갱신 가능.
> AJAX를 이용하면 백그라운드 영역에서 서버와 통신, 그 결과를 웹페이지 일부분에 표시

promise : 새로운 JS의 컨셉. 비동기적 프로그래밍을 지원함으로서 시나리오를 관리하는 방법을 만들어줌

