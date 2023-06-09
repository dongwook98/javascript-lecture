HTTP란?
브라우저 위에서 동작하고 있는 웹 사이트나 웹 어플리케이션과 같은 클라이언트들이 어떻게 서버와 통신 할 수 있는지를 정의 한 것
HTTP는 Hypertext Transfer Protocal의 약자로서 어떻게 이 Hypertext를 주고 받을 수 있는지를 규약한 프로토콜의 하나이다.
HTTP는 클라이언트가 서버에게 데이터를 request(요청) 할 수 있고 서버는 클라이언트가 요청한 것에 따라서 response(응답)을 클라이언트에 보내주는 이런 방식으로 진행되는 것을 의미한다.여기서 Hypertext는 웹사이트의 링크들만 이야기하는것이 아니라 전반적으로 쓰여지고 있는 리소스들 문서나 이미지 파일들 이런 것들을 다 포함해서 말합니다. 이렇게 HTTP를 이용해서 서버에게 데이터를 요청해서 받아올 수있는 방법으로 AJAX가 있다.

AJAX는 Asynchronous JavaScript And XML의 약자이다. 이 AJAX는 웹페이지에서 동적으로 서버에게 데이터를 주고받을수있는 기술을 의미한다 대표적으로 XHR (XMLHttpRequset)라는 오브젝트가 있다. XMLHttpRequest라는 오브젝트는 브라우저 API에서 제공해주는 오브젝트 중 하나이고, 이 오브젝트를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수가 있다. 최근 브라우저 API에 추가된 fetch() API를 이용하면 간편하게 데이터를 주고받을 수 있다. AJAX,XHR에서 계속 반복해서 XML이 나오고있는데 이 XML은 바로 HTML과 같은 마크업 언어 중 하나이다. 태그들을 이용해서 데이터를 나타낸다. HTML과 마찬가지로 데이터를 표현할 수 있는 한가지 방법입니다.

AJAX과 XHR도 그렇고 계속 반복해서 XML만 나오고 있는데 서버와 데이터를 주고 받을때는 XML만 가능한가? 결론은 그렇지 않다. 서버와 데이터를 주고받을때는 XML 뿐만아니라 굉장히 다양한 파일포맷을 전달받을 수 있다. 요즘엔 JSON을 많이 쓰고 있다. 그런데 왜 XML이라는 이름이 지어졌을까? AJAX와 XHR이 활발히 개발되고있을당시에 마이크로소프트사에있는 아웃룩을 만드는 개발팀이 활발히 참여해서 만들었다. 이 때 아웃룩은 서버와 클라이언트에 데이터를 전송할때 XML을 사용하였다. 그래서 XML을 HttpRequest앞에 붙여서 개발을 하게되었다. 데이터를 주고 받을때는 XML 뿐만 아니라 다양한 타입의 데이터를 주고받을수 있기 때문에 XML이라고 이름을 앞에 지은것은 굉장히 큰 실수이다.

브라우저에서 서버와 통신을 할때는 새로추가된 fetch() API를 사용할수있고 요즘에도 많이사용되는 XMLHttpRequest 라는 오브젝트를 이용해서 서버와 통신을 할수도있다.
이 xml을 사용하면 불필요한 태그들이 많이들어가서 파일의 사이즈가 커질뿐만아니라 가독성도 좋지않다. 그래서 요즘엔 xml대신에 json을 많이사용한다.

JSON(JavaScript Object Notation)
1999년도 ECMAScript 3번째 버젼에 쓰여지는 object에 큰 영감을 받아서 만들어진 데이터 포맷이다. 자바스크립트에서 object를 보면 key와 value로 이루어져 있는걸 볼 수 있다. JSON도 똑같이 key와 value로 이루어져 있다. JSON은 브라우저 뿐만 아니라 모바일에서 서버와 데이터를 주고 받을 때 또는 서버와 통신을 하지않아도 object를 파일시스템에 저장할 때도 JSON 데이터 타입을 많이 이용하고 있다.

1. 데이터를 주고받을때 쓸 수 있는 가장 간단한 파일 포맷이다.
2. 텍스트를 기반으로 작성되있어 가볍다.
3. 사람 눈으로도 읽기편하다.
4. key와 value로 이루어져 있는 파일 포맷이다.
5. 데이터를 보통은 서버와 주고받을 때 데이터를 직렬화(serialize)하고 데이터를 전송할 때 쓰인다.
6. ✨ 프로그래밍 언어와 플랫폼에 상관없이 쓰일 수 있다. -> c,c++,c#,java,python,php,kotlin,go 이런 거의 대부분의 언어들과 플랫폼에 상관없이 JSON으로 직렬화(serialize)된 오브젝트를 다시 그 언어의 특징에 맞게 오브젝트로 변환하고 그 오브젝트를 다시 JSON으로 직렬화(serialize) 하는것을 지원을 해주거나, 아니면 많이 쓰여지고 있는 외부 라이브러리를 통해서 이런 언어들이 JSON을 읽을 수 있다.

✨ JSON 공부포인트
object 를 어떻게 serialize(직렬화)해서 JSON으로 변환할지,
직렬화된 JSON을 어떻게 deserialize(역직렬화) 해서 다시 object로 변환할 것인지.를 중점적으로 공부하자.
