export default function map<T extends []>(arr: T) {
  return arr.map((v) => v).join('');
}
