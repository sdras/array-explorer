# 자바스크립트 배열 탐색기

처음 배열 메서드을 배웠을 때는 문서를 탐색하는 데 많은 시간을 들여 적절한 문서를 찾아 검색했습니다. 저는 사람들이 좀 더 자연스럽게 정확한 배열 방법을 찾게 하도록 이 자료를 만들었습니다. 여러분에게 가장 유용한 것을 발견할 때까지 탐험할 수 있습니다.

아래에서 확인하세요

원작자인 sdras의 링크
- [https://sdras.github.io/array-explorer/](https://sdras.github.io/array-explorer/)
- [https://codepen.io/sdras/full/gogVRX/](https://codepen.io/sdras/full/gogVRX/)

>[한글번역 페이지 링크](https://devjang.github.io/array-explorer/)

이 자료를 설정하는 데는 약 백만가지 방법이 있으며 일부 분류 체계는 반드시 반드시 선택화되어 있다고 생각합니다. 저는 표준 표기법(예를 들어 mutator, accessor, iteration)보다는 가장 잘 배울 수 있도록 도와주는 것에 초점을 맞추려고 노력했습니다. 이런 방법을 나눠 놓은 자료는 이미 많이 존재합니다. 그래서 학습 스타일이 당신에게 잘 어울리면 좋겠습니다! 이 자료는 그런 식으로 설정되지 않았습니다. 이 문서는 전체 설명서에 대한 포괄적이거나 대체용이 아니기 때문에 각 방법으로 MDN 문서가 링크되어 있다는 점에 유의하세요.

MDN 문서에서 대부분의 예제를 발췌했으며 설명이 초보자 적합하지 않다고 생각되는 곳은 약간 변경했습니다.

**즐거운 시간 되세요!**

## 그 밖의 비슷한 프로젝트

객체 탐색기도 있습니다: [https://sdras.github.io/object-explorer/](https://sdras.github.io/object-explorer/)  
객체 탐색기 번역: [https://devJang.github.io/object-explorer/](https://devJang.github.io/object-explorer)

[루비 배열 탐색기](https://contrepoint.github.io/ruby-array-explorer/). 코드는 [이곳](https://github.com/contrepoint/ruby-array-explorer)

## 감사합니다!

번역에 많은 도움을 주신 모든 분들께 감사드립니다! @AWolf81, @Gonzalo2310, @welll, @julienmartin, @g-plane, @imbyurhan, @bahe007, @salahaa1, @proYang, @bdimitrovski, @TheElderMindseeker, @glenngijsberts, @galuhsahid, @xgebi

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# to build for the docs:
npm run build
# then rename `dist` to `docs` and remove the first slash `/static` from `static` in `index.html`
# then change the font paths in the css file from `/static` to `../../static`
```

빌드 방법에 대한 자세한 설명을 보려면 [vue-loader에 대한 문서](https://vue-loader.vuejs.org/kr/)와 [가이드](http://vuejs-templates.github.io/webpack/)를 확인하십시오.