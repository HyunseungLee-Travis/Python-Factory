module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: '파이썬',
      link: {
        type: 'generated-index',
        title: '파이썬',
        description:
          '파이썬은 처음으로 프로그래밍을 하는 사람들을 위해 디자인된 언어입니다.',
        keywords: ['python', 'python3', '파이썬'],
      },
      items: [
        {
          type: 'category',
          label: '시작하기',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/1-start',
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 타입',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/2-data-types',
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 플로우',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/3-data-flow',
            },
          ],
        },
        {
          type: 'category',
          label: '모듈',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/4-module',
            },
          ],
        },
        {
          type: 'category',
          label: '파일',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/5-file',
            },
          ],
        },
        {
          type: 'category',
          label: '고급 데이터 형태',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/6-advanced-data-types',
            },
          ],
        },
        {
          type: 'category',
          label: '고급 데이터 플로우',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/7-advanced-data-flow',
            },
          ],
        },
        {
          type: 'category',
          label: '고급 모듈',
          items: [
            {
              type: 'autogenerated',
              dirName: 'python/8-advanced-module',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rust',
      link: {
        type: 'generated-index',
        title: 'Rust',
        description:
          'Rust는 다른 프로그래밍 언어와 달리 매우 "안전하고, 효율적이고, 유용한" 프로그래밍 언어입니다.',
        keywords: ['rust', 'rustlang', 'rust-lang'],
      },
      items: [
        {
          type: 'category',
          label: '시작하기',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/1-start',
            },
          ],
        },
        {
          type: 'category',
          label: '변수',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/2-variable',
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 형태',
          items: [
            'rust/data-types/datatype',
            {
              type: 'category',
              label: '스칼라',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'rust/3-data-types/scalar',
                },
              ],
            },
            {
              type: 'category',
              label: '컴파운드',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'rust/3-data-types/compound',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '데이터 플로우',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/4-data-flow',
            },
          ],
        },
        {
          type: 'category',
          label: '함수',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/5-function',
            },
          ],
        },
        {
          type: 'category',
          label: '메모리',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/6-memory',
            },
          ],
        },
        {
          type: 'category',
          label: '모듈',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/7-module',
            },
          ],
        },
        {
          type: 'category',
          label: '에러 핸들링과 에트리뷰트',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/8-errhandleattr',
            },
          ],
        },
        {
          type: 'category',
          label: '라이브러리',
          items: [
            {
              type: 'autogenerated',
              dirName: 'rust/9-lib',
            },
          ],
        },
      ],
    },
  ],
};
