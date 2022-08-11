# 날짜

날짜는 모듈이어서 먼저 가지고 와야 합니다.

```py
import datetime
```

## 지금 시간

지금 당장 시간을 파이썬으로 통해 알고 싶으면 `datetime.datetime.now()`를 사용하면 됩니다.

`'yyyy-mm-dd hh:mm:ss'` 형식으로 출력이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/437df64da8"
  height="400"
/>

## 시, 분, 초, 마이크로초

지금 시, 분, 초와 밀리초를 알고 싶다면 `strftime`이라는 메서드를 이용하면 됩니다.

`strftime()` 안에 `%H`(Hour)을 입력하면 24시간 형태를 가진 지금 시각이 출력됩니다.

12 시간 행태를 원한다면 `%I`를 사용하면 됩니다.

12 시간 행태를 사용한다면 오후인지 오전인지 알기 위하여 `%p`(AM 또는 PM)을 사용하면 됩니다.

분은 `%M`, 초는 `%S`, 마이크로초는 `%f` 입니다

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/b649e0b775"
  height="400"
/>

## 요일, 월, 년

요일 이름은 `%A`를 사용해서 알 수 있습니다. 요일의 이름은 영어로 출력됩니다(예: Friday).

June, January와 같이 `%B`는 월 이름을 영어로 출력합니다.

`%Y`를 사용하면 년을 알 수 있습니다.

2018, 2022과 같이 년의 전체 값을 출력합니다.
