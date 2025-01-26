// filter out functions and sensitive methods form class 
type FlagExcludedType<Base, Type> = {
    [Key in keyof Base]: Base[Key] extends Type ? never : Key;
  };
  
  type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];
  
  type OmitType<Base, Type> = Pick<Base, AllowedNames<Base, Type>>;
  
  // eslint-disable-next-line @typescript-eslint/ban-types
  export type ConstructorType<T> = OmitType<T, Function>;
  