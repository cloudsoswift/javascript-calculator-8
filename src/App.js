
class App {
  async run() {}
  extractDelimiter(str) { 
    const regex = "\\/\\/(.+?)\\n";
    const matches = [...str.matchAll(regex)];
    return matches.length > 0 ? matches[0][1] : "";
  }
  escapeAllSpecials(str) { 
    // 정규 표현식에서 특수한 역할을 수행하는 특수문자들을 모두 이스케이프
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  splitWithDelimiters(str, delimiter) {
    // 문자열(str)에 포함된 각 숫자들을 분리하여 숫자 형태로 보관할 배열 result
    const result = [];
    // 쉼표, 콜론, 그리고 사용자가 입력한 커스텀 구분자가 있다면 그를 포함해
    const delimiter = new RegExp(`,|:${delimiter !== "" ? `|${delimiter}` : ""}`);
    // 문자열 나눔
    const split = str.split(delimiter);
    for (const num of split) { 
      result.push(Number(num));
      if (result.at(-1) < 0) { 
        throw new Error('주어진 문자열에는 구분자와 양수만 포함되어야 합니다. 음수는 포함될 수 없습니다');
      }
    }
    return result;
  } 
  sumAllIntegers(integers) { 
    let sum = 0;
    for (const int of integers) { 
      sum += int;
    }
    return sum;
  }
}

export default App;
