# 스레드

설명할 것이 조금 많습니다.

먼저, 모든 컴퓨터에서는 CPU라는 것이 있습니다.

CPU는 모든 커맨드가 이 물건을 지나면서 실행이 됩니다.

CPU 안에는 코어라는 것이 몇 개 있습니다.

코어가 실제로 CPU 안에서 커맨드를 읽어서 실행합니다.

코어에는 스레드가 달려있습니다.

코어는 커맨드를 읽을 때 스레드를 읽고 실행합니다.

컴퓨터는 매우 빨리 정보를 처리할 수 있지만 코어는 하나하나 스레드만 실행할 수 있습니다.

## 스레드 여러 개

만일 스레드 여러 개가 코어에 달려있다면 어떻게 될까요?

코어는 한 스레드를 하나하나씩 실행할 수 있어서 여러 개가 있다면 먼저 스레드 1에서 들어오는 커맨드를 실행하고 넘어갑니다.

하지만 만일 2개 이상이 있다면 가장 중요한 것을 먼저 실행하고 다른 것을 기다립니다.

파이썬에서 스레드를 지정하는 것이 가능합니다.

스레드 1을 만들고 스레드 2를 만들려면 threading이라는 모듈을 이용할 수 있습니다.

먼저, 원리부터 설명하겠습니다.

만일 스레드가 2개가 있고 하나는 `"Hello"`를 출력하고 1초 기다리고 `"Done"`을 출력합니다.

다른 하나는 `"World"`를 출력합니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/cf48124315"
  height="400"
/>

만일 thread 1을 실행하고 thread 2를 실행하면 `Hello done World`가 출력됩니다.

그 이유는 아직 스레드를 1에서만 실행하고 있기 때문입니다.

모든 작업은 하나씩 실행을 해야 합니다.

하지만 `threading` 모듈을 이용하여 다른 스레드를 만든다면 먼저 thread 1이 실행되고 1초 기다릴 때 코어는 thread 2를 실행합니다. 그러면 매우 효율적입니다.

또한, 만일 한 스레드에서 버그나 문제가 있다면 그 스레드에 있는 코드는 멈추지만 다른 스레드에 있는 코드는 계속 실행이 됩니다.

## 파이썬 threading

1. 파이썬 모듈 `threading`을 가지고 옵니다. 다음에, `time`도 가지고 옵니다.
2. 그리고 thread 1과 thread 2 함수를 만들겠습니다.
3. 그리고 스레드를 만들겠습니다.

밑의 코드는 `threading.Thread()` 메서드를 사용하여 스레드를 만들고 함수를 입력합니다.

함수가 매개변수일 때는 `()`를 사용하지 않습니다.

`()`를 사용할 수 없으니 `args` 안에 매개변수 튜플을 사용할 수 있습니다.

`start()` 메서드를 사용하여 스레드를 실행시킬 수 있습니다.

`start()`를 실행하지 않는다면 thread 1은 실행되지 않고 스레드의 수(`active_count()`)도 1입니다.

만일 `start()`를 사용한다면 thread 1은 실행이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/a21ef7102c"
  height="400"
/>

## 파이썬에서 조금 더 복잡한 스레드 예시

이제 조금 더 복잡한 스레드 예시를 관찰하겠습니다.

위의 예시를 실행하면 다음과 같은 순서로 실행이 됩니다.

1. 첫 번째 스레드 (파일의 코드가 실행되는 곳)에서 `mainThread`를 만듭니다.
2. 다음에 thread1 함수를 실행합니다.
3. `Hello`를 출력하고 1초 기다립니다.
4. 코어에서 1초 시간이 있으니 바로 `threading.active_count()`를 실행합니다.
5. 다음에 첫 번째 스레드에 있는 `time.sleep(1)` 메서드를 실행합니다.
6. 다음에 `"Finally"`를 출력합니다. 그 이유는 0.95가 1보다 더 작기 때문입니다.
7. 첫 번째 스레드에 있는 코드를 다 실행했으니 이제 스레드 2에 있는 `Done!` 과 0.9초 기다리고 `Now It is Really Done!` 을 출력합니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/d14f421fa3"
  height="400"
/>

## .join 메서드

`asyncio`에서 배웠듯이 `await` 키워드는 `async` 함수가 끝날 때까지 기다립니다.

비슷하게 스레드에서도.

`join()` 메서드를 사용하면 스레드에 있는 코드가 끝날 때까지 기다립니다.

밑의 코드는 5 스텝까지 같지만 `mainThread.join()` 메서드가 있어 `Done!` 과 `Now It is Really Done!` 이 먼저 출력이 되고 `Finally!` 가 출력이 됩니다.

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/4b10ddd953"
  height="400"
/>

## 데이먼 (daemon)

데이먼은 배경에서 실행되는 스레드를 뜻합니다.

파이썬에서는 프로그램이 끝나면 바로 끝나는 스레드를 뜻합니다.

만일 데이먼 스레드가 있다면 다른 스레드가 다 멈출 때까지 기다리고 바로 없어집니다.

마지막으로 실행이 되는 스레드를 뜻합니다.

데이먼 스레드는 처음에 스레드를 만들 떼 선정할 수 있습니다.

```py
mainThread = threading.Thread(target = mainFunc, daemon = True)
```

스레드가 데이먼 스레드인지 확인하는 방법은 `daemon` 키를 사용하는 방법이 있습니다.

```py
mainThread = threading.Thread(target = mainFunc, daemon = True)
print(mainThread.daemon) # True가 출력됩니다
```

스레드를 나중에 데이먼으로 바꾸는 것도 가능하지만 스레드가 실행하고 있으면 안 됩니다.

```py
mainThread.setDaemon(True)
```

<iframe
  loading="lazy"
  title="Python IDLE Trinket"
  src="https://trinket.io/embed/python3/4f89284925"
  height="400"
/>
