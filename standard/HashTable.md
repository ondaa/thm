## HashTable

**나름 정의**  
누군가 이미 올라가 있는 나의 영상을 유튜브에 올리려고 한다.  
이때 "이미 올라간 영상"이라는 오류가 뜬다. 즉, 중복검사가 이루어졌다는 의미가 된다.  
이렇게 중복데이터를 찾는 방법은 Hash Table로 쉽고 빠르게 찾을 수 있다.

```javascript
F(key) -> Hashcode -> Index -> Value
```

---

**예제)**
|key|hashcode (ASCII)|index|list|
|---|---|---|---|
|SUNG|445 (to index 1)|0|JIN - HEE - MIN
|JIN|321 (to index 0)|1|SUNG
|HEE|306 (to index 0)|2|
|MIN|324 (to index 0)||

SUNG 이라는 문자를 문자 하나씩 아스키 코드로 만들어 더 하면 445 가 나온다.

- S(115) + U(117) + N(110) + G(103) = 445

이때 정의하려는 배열방을 먼저 만들어 준 뒤 배열방의 개수 만큼 나눈 나머지를 방으로 지정한다.  
방 3개를 만든다고 가정했을때...

- 445 % 3 = 1 // 즉, SUNG 은 Index 1 에 저장되는 것이다. 이때 나머지 JIN, HEE, MIN 은 0 번째 방으로 모두 들어가게 되는데, 이런 경우를 **Hash Algorithm Collision** 이라고 한다. SUNG 같은 경우 시간복잡도를 O(1)로 표현할 수 있지만 이렇게 Collision 현상이 생기면 O(n)으로 표현된다.

<br/>
<br/>

### Hash 의 필수사항

- 고정된 크기의 배열을 우선 선언하는 것

<br/>
<br/>

### 참고자료

https://www.youtube.com/watch?v=Vi0hauJemxA  
https://opentutorials.org/module/1335/8821
