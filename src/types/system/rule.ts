export type InputRuleType = (v: any) => string | boolean

export type RuleType<T = string> = Record<keyof T | string, Array<InputRuleType>>

