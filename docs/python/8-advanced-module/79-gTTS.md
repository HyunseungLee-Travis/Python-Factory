# gTTS

gTTS는 문자를 컴퓨터가 말하게 만들 수 있는 기능을 가지고 있습니다.

이번 시간에는 컴퓨터에서 컴퓨터가 말하게 만들어 보겠습니다!

먼저, gTTS를 설치하기 위해서 다음 코드를 실행하세요.

```sh
pip install gtts
```

## gTTS 커맨드

터미널을 키고 다음 코드를 실행하세요.

```sh
gtts-cli 'hello' --output hello.mp3
```

위의 코드를 실행하면 `hellp.mp3`라는 새로운 파일이 만들어 집니다.

`hello.mp3`를 실행하면 컴퓨터 목소리가 'hello'를 말하는 것을 들을 수 있습니다.

## 파이썬

파이썬에서 gTTS를 사용하겠습니다.

```py
from gtts import gTTS

gtts = gTTS('Python is awsome', lang="en")
gtts.save("hello.mp3")
```

`gTTS()`를 사용해서 컴퓨터가 말하는 오디오를 만들었습니다.

`gtts.save()`를 실행해서 `mp3` 파일 안에 저장했고 그 파일을 실행하면 컴퓨터가 'Python is awsome'을 말하는 것을 들을 수 있습니다.
