import { StyledComponent } from 'styled-components';

/**
 * 単体のオブジェクトを指定する場合はコンポーネントを指定する場合はオブジェクトにする
 * getComponentStyles({BorderCircle})
 **/
export const getComponentsStyles = <T extends { [key in string]: StyledComponent<any, any> }>(
  target: T
) => {
  let result: { [key in string]: string[] } = {};
  for (const key in target) {
    result[key] = String(target[key].componentStyle['rules'][0])
      .replace(/\n|  /g, '')
      .replace(/: /g, ',')
      .slice(0, -1)
      .split(';');
  }
  // console.log('表示されるオブジェクトをコピーして、テストコードに貼り付けてください')
  // console.log(result);
  return result;
};
