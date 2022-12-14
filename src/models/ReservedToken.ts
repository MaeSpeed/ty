export enum ReservedTokenType {
  LeftParenth = "(",
  RightParenth = ")",
  Semi = ";",
  LeftBracket = "{",
  RightBracket = "}",
  Assignment = "=",
}

export default class ReservedToken {
  public constructor(public readonly type: ReservedTokenType) {}
}
