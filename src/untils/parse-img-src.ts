export const parseImgSrc = (name: string): string => {
  const origin = location.origin;
  const assetPath = '/src/assets/svgs/'
  return origin + assetPath + name + '.svg';
}