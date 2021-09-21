## Linked List

Java 에는 기본적으로 가지고 있는 데이터 구조이다.

Head, Node(마디의 교점) 혹은 Vertex(정점, 꼭지점의 의미), Tail로 구성되어 있는 배열구조, Array List와는 다르게 엘리먼트와 엘림먼트 간의 연결(link)을 이용해서 리스트를 구현하는 것을 의미한다.

- Array List 와는 다른 구조다.

### 특징

- node는 일반적으로 객체를 이용해서 표현한다.
- 2개의 변수를 가지고 있다. (Field 또는 Property 라고 부를 수 있다.)
- Data field, Link field
- Head는 첫번째 노드가 무엇인가를 알고 있어야 한다. (Head는 변수다.)

<br/>
<br/>

### Head

```java
Vertex temp = new Vertex(input)
temp.next = head
head = temp
```

<br/>
<br/>

### 중간 삽입

```java
Vertex temp1 = head
while (--k != 0)
    temp1 = temp1.next

Vertex temp2 = temp1.next
Vertex newVertex = new Vertex(input)
temp1.next = newVertex
newVertex.next = temp2
```

<br/>
<br/>

### 참고자료

[visualgo (알고리즘 시각화 사이트)](https://visualgo.net/ko)  
[오픈튜토리얼 - Linked List](https://opentutorials.org/module/1335/8821)
