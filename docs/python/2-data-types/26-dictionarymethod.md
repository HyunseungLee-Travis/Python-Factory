# 딕셔너리 메서드

<iframe
  loading="lazy"
  className="youtube"
  src="https://www.youtube.com/embed/SaJzwva53zo"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
/>

## 딕셔너리 쌍 추가하기

`a = {1: "a", 2: "b"}`라는 딕셔너리에 `{3: "c"}`라는 딕셔너리 쌍을 추가시키는 방법 중 인덱싱을 사용하는 방법이 있습니다.

인덱싱을 사용하면 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/04ee6a9b27"
  height="400"
/>

## 딕셔너리 쌍 삭제하기

딕셔너리 요소를 삭제하는 방법은 매우 간단합니다.

`del` 딕셔너리 `이름[Key]`를 입력하면 삭제할 수 있습니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/1a3ca85630"
  height="400"
/>

## `update()`

딕셔너리 요소를 추가하거나 업데이트하는 방법은 매우 간단합니다.

`update()` 메서드를 사용하면 됩니다.

```py
d = {'key': 'value'}
d.update({'new_key': 'new_value'})
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/eef048afb8"
  height="500"
/>

## `get()`

딕셔너리에서 Key의 Value를 찾기 위하여 `get()`라는 메서드를 사용할 수 있습니다.

첫 번째 매개변수에는 아이템의 값을 넣고 두 번째는 만일 그 값이 딕셔너리에 존재하지 않는다면 출력될 값을 입력하면 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/c250d6c262"
  height="400"
/>
